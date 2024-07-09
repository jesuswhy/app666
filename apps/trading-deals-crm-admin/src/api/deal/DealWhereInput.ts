import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type DealWhereInput = {
  id?: StringFilter;
  amount?: FloatNullableFilter;
  dealDate?: DateTimeNullableFilter;
  customer?: CustomerWhereUniqueInput;
};
