import { SortOrder } from "../../util/SortOrder";

export type DealOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  amount?: SortOrder;
  dealDate?: SortOrder;
  customerId?: SortOrder;
};
