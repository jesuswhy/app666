import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type EmployeeWhereInput = {
  id?: StringFilter;
  position?: StringNullableFilter;
  name?: StringNullableFilter;
};
