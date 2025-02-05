/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Deal } from "./Deal";
import { DealCountArgs } from "./DealCountArgs";
import { DealFindManyArgs } from "./DealFindManyArgs";
import { DealFindUniqueArgs } from "./DealFindUniqueArgs";
import { CreateDealArgs } from "./CreateDealArgs";
import { UpdateDealArgs } from "./UpdateDealArgs";
import { DeleteDealArgs } from "./DeleteDealArgs";
import { Customer } from "../../customer/base/Customer";
import { DealService } from "../deal.service";
@graphql.Resolver(() => Deal)
export class DealResolverBase {
  constructor(protected readonly service: DealService) {}

  async _dealsMeta(
    @graphql.Args() args: DealCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Deal])
  async deals(@graphql.Args() args: DealFindManyArgs): Promise<Deal[]> {
    return this.service.deals(args);
  }

  @graphql.Query(() => Deal, { nullable: true })
  async deal(@graphql.Args() args: DealFindUniqueArgs): Promise<Deal | null> {
    const result = await this.service.deal(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Deal)
  async createDeal(@graphql.Args() args: CreateDealArgs): Promise<Deal> {
    return await this.service.createDeal({
      ...args,
      data: {
        ...args.data,

        customer: args.data.customer
          ? {
              connect: args.data.customer,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Deal)
  async updateDeal(@graphql.Args() args: UpdateDealArgs): Promise<Deal | null> {
    try {
      return await this.service.updateDeal({
        ...args,
        data: {
          ...args.data,

          customer: args.data.customer
            ? {
                connect: args.data.customer,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Deal)
  async deleteDeal(@graphql.Args() args: DeleteDealArgs): Promise<Deal | null> {
    try {
      return await this.service.deleteDeal(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Customer, {
    nullable: true,
    name: "customer",
  })
  async getCustomer(@graphql.Parent() parent: Deal): Promise<Customer | null> {
    const result = await this.service.getCustomer(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
