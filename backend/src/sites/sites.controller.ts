import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ApiSiteDocument } from './documents/sites.document';
import { ApiSiteService } from './sites.service';

@Controller('/api')
@ApiTags('healthcheck')
export class ApiSiteController {
  constructor(
      private readonly apiSiteService: ApiSiteService,
    ) {}

  @Post('/site')
  async createApiSite(@Body() body:ApiSiteDocument) {
      console.log("createApiSite!")
      this.apiSiteService.create(body);
  }

  @Get('/site')
  async getApiSite(){
    console.log("getApiSite!")
    this.apiSiteService.findAll();
  }
}
