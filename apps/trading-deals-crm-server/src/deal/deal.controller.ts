import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DealService } from "./deal.service";
import { DealControllerBase } from "./base/deal.controller.base";

@swagger.ApiTags("deals")
@common.Controller("deals")
export class DealController extends DealControllerBase {
  constructor(protected readonly service: DealService) {
    super(service);
  }
}
