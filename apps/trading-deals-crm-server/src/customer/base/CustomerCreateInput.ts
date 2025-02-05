/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { DealCreateNestedManyWithoutCustomersInput } from "./DealCreateNestedManyWithoutCustomersInput";
import { Type } from "class-transformer";

@InputType()
class CustomerCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  phone?: string | null;

  @ApiProperty({
    required: false,
    type: () => DealCreateNestedManyWithoutCustomersInput,
  })
  @ValidateNested()
  @Type(() => DealCreateNestedManyWithoutCustomersInput)
  @IsOptional()
  @Field(() => DealCreateNestedManyWithoutCustomersInput, {
    nullable: true,
  })
  deals?: DealCreateNestedManyWithoutCustomersInput;
}

export { CustomerCreateInput as CustomerCreateInput };
