import { Inject, Injectable } from "@nestjs/common"
import type { FirefoxBrowser } from "playwright-firefox"
import { BlocklistProvider } from "../blocklist/blocklist.provider"
import { HttpProxy } from "../common/types/http-proxy.class"
import { HeadlessBrowserProvider } from "../headless-browser/headless-browser.provider"

@Injectable()
export class RendererService {
  public constructor(
    @Inject(BlocklistProvider.providerName) private readonly blocklist: Set<string>,
    @Inject(HeadlessBrowserProvider.providerName) private readonly browser: FirefoxBrowser
  ) {}

  public async renderCSR(
    url: string,
    blockAds: boolean,
    headers?: Record<string, string>,
    proxy?: HttpProxy
  ): Promise<string> {
    const context = await this.browser.newContext({
      extraHTTPHeaders: headers,
    })
    context.setDefaultTimeout(10 * 1000) // 10s
    if (blockAds) {
      context.route("**", (route) => {
        const url = new URL(route.request().url())
        if (this.blocklist.has(url.hostname)) {
          route.abort()
        } else {
          route.continue()
        }
      })
    }
    const page = await context.newPage()

    try {
      await page.goto(url)

      const htmlHandle = await page.$("html")
      const html = await htmlHandle?.innerHTML()
      if (!html) {
        throw new Error(`Cannot extract HTML from ${url}`)
      }
      return `<!DOCTYPE HTML>${html}`
    } finally {
      await context.close()
    }
  }
}
