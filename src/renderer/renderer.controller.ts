import { Body, Controller, Get, Header, Post, Query } from "@nestjs/common"
import { RenderCommandDto } from "./dto/render-command.dto"
import { RenderQueryDto } from "./dto/render-query.dto"
import { RendererService } from "./renderer.service"

@Controller("v1/renderer")
export class RendererController {
  constructor(private readonly rendererService: RendererService) {}

  @Get("csr")
  @Header("Content-Type", "text/html; charset=UTF-8")
  getCSR(@Query() query: RenderQueryDto): Promise<string> {
    return this.rendererService.renderCSR(query.url, query.blockAds ?? true)
  }

  @Post("csr")
  @Header("Content-Type", "text/html; charset=UTF-8")
  postCSR(@Body() body: RenderCommandDto): Promise<string> {
    return this.rendererService.renderCSR(
      body.url,
      body.blockAds ?? true,
      body.headers,
      body.httpProxy
    )
  }
}
