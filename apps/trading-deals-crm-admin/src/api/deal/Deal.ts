import { Customer } from "../customer/Customer";

export type Deal = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  amount: number | null;
  dealDate: Date | null;
  customer?: Customer | null;
};
