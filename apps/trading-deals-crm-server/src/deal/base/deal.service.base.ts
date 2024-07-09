/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Deal as PrismaDeal,
  Customer as PrismaCustomer,
} from "@prisma/client";

export class DealServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.DealCountArgs, "select">): Promise<number> {
    return this.prisma.deal.count(args);
  }

  async deals(args: Prisma.DealFindManyArgs): Promise<PrismaDeal[]> {
    return this.prisma.deal.findMany(args);
  }
  async deal(args: Prisma.DealFindUniqueArgs): Promise<PrismaDeal | null> {
    return this.prisma.deal.findUnique(args);
  }
  async createDeal(args: Prisma.DealCreateArgs): Promise<PrismaDeal> {
    return this.prisma.deal.create(args);
  }
  async updateDeal(args: Prisma.DealUpdateArgs): Promise<PrismaDeal> {
    return this.prisma.deal.update(args);
  }
  async deleteDeal(args: Prisma.DealDeleteArgs): Promise<PrismaDeal> {
    return this.prisma.deal.delete(args);
  }

  async getCustomer(parentId: string): Promise<PrismaCustomer | null> {
    return this.prisma.deal
      .findUnique({
        where: { id: parentId },
      })
      .customer();
  }
}
