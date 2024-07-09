import { DealWhereInput } from "./DealWhereInput";
import { DealOrderByInput } from "./DealOrderByInput";

export type DealFindManyArgs = {
  where?: DealWhereInput;
  orderBy?: Array<DealOrderByInput>;
  skip?: number;
  take?: number;
};
