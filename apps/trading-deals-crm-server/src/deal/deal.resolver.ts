import * as graphql from "@nestjs/graphql";
import { DealResolverBase } from "./base/deal.resolver.base";
import { Deal } from "./base/Deal";
import { DealService } from "./deal.service";

@graphql.Resolver(() => Deal)
export class DealResolver extends DealResolverBase {
  constructor(protected readonly service: DealService) {
    super(service);
  }
}
