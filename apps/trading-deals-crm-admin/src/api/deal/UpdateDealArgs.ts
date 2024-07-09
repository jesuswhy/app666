import { DealWhereUniqueInput } from "./DealWhereUniqueInput";
import { DealUpdateInput } from "./DealUpdateInput";

export type UpdateDealArgs = {
  where: DealWhereUniqueInput;
  data: DealUpdateInput;
};
