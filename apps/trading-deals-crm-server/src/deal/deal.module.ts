import { Module } from "@nestjs/common";
import { DealModuleBase } from "./base/deal.module.base";
import { DealService } from "./deal.service";
import { DealController } from "./deal.controller";
import { DealResolver } from "./deal.resolver";

@Module({
  imports: [DealModuleBase],
  controllers: [DealController],
  providers: [DealService, DealResolver],
  exports: [DealService],
})
export class DealModule {}
