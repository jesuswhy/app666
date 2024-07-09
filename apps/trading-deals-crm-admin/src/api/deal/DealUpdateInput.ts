import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type DealUpdateInput = {
  amount?: number | null;
  dealDate?: Date | null;
  customer?: CustomerWhereUniqueInput | null;
};
