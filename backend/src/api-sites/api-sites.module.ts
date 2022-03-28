import { Module } from '@nestjs/common';
import { ApiSiteController } from './api-sites.controller';
import { ApiSiteService } from './api-site.service';
@Module({
  imports: [],
  controllers: [ApiSiteController],
  providers: [ApiSiteService],
})
export class ApiSiteModule {}
