export type IGroupBy<T> = {
  [key in keyof T]: Array<T>;
};

export type orderType = "ASEC" | "DESC";

export type searchType = "ALL" | "FIRST ONE" | "LAST ONE";
