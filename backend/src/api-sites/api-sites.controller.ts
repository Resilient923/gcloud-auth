import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ApiSiteService } from './api-site.service';

@Controller('/api')
@ApiTags('healthcheck')
export class ApiSiteController {
  constructor(private readonly apiSiteService: ApiSiteService) {}

  @Get('/sites')
  async getApiSites() {
      this.apiSiteService.getApiSites();
  }
}
