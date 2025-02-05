/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { DealService } from "../deal.service";
import { DealCreateInput } from "./DealCreateInput";
import { Deal } from "./Deal";
import { DealFindManyArgs } from "./DealFindManyArgs";
import { DealWhereUniqueInput } from "./DealWhereUniqueInput";
import { DealUpdateInput } from "./DealUpdateInput";

export class DealControllerBase {
  constructor(protected readonly service: DealService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Deal })
  async createDeal(@common.Body() data: DealCreateInput): Promise<Deal> {
    return await this.service.createDeal({
      data: {
        ...data,

        customer: data.customer
          ? {
              connect: data.customer,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        amount: true,
        dealDate: true,

        customer: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Deal] })
  @ApiNestedQuery(DealFindManyArgs)
  async deals(@common.Req() request: Request): Promise<Deal[]> {
    const args = plainToClass(DealFindManyArgs, request.query);
    return this.service.deals({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        amount: true,
        dealDate: true,

        customer: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Deal })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deal(
    @common.Param() params: DealWhereUniqueInput
  ): Promise<Deal | null> {
    const result = await this.service.deal({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        amount: true,
        dealDate: true,

        customer: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Deal })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateDeal(
    @common.Param() params: DealWhereUniqueInput,
    @common.Body() data: DealUpdateInput
  ): Promise<Deal | null> {
    try {
      return await this.service.updateDeal({
        where: params,
        data: {
          ...data,

          customer: data.customer
            ? {
                connect: data.customer,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          amount: true,
          dealDate: true,

          customer: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Deal })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteDeal(
    @common.Param() params: DealWhereUniqueInput
  ): Promise<Deal | null> {
    try {
      return await this.service.deleteDeal({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          amount: true,
          dealDate: true,

          customer: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
