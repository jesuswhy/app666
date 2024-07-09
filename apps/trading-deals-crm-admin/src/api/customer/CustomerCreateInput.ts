import { DealCreateNestedManyWithoutCustomersInput } from "./DealCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  deals?: DealCreateNestedManyWithoutCustomersInput;
};
