import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type DealCreateInput = {
  amount?: number | null;
  dealDate?: Date | null;
  customer?: CustomerWhereUniqueInput | null;
};
