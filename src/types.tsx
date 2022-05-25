export interface ErrorMessageType {
  msg: string;
  value?: string;
  param?: string;
}

export interface Cohort {
  _id: string;
  name: string;
  startDate: string;
  endDate: string;
}
