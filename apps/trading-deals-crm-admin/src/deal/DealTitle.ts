import { Deal as TDeal } from "../api/deal/Deal";

export const DEAL_TITLE_FIELD = "id";

export const DealTitle = (record: TDeal): string => {
  return record.id?.toString() || String(record.id);
};
