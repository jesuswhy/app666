import { Deal } from "../deal/Deal";

export type Customer = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  email: string | null;
  phone: string | null;
  deals?: Array<Deal>;
};
