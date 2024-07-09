import { DealUpdateManyWithoutCustomersInput } from "./DealUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  deals?: DealUpdateManyWithoutCustomersInput;
};
