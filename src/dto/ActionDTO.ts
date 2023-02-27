import { type Action } from "@prisma/client";
import { type Dayjs } from "dayjs";

export interface ActionFormDTO {
  id?: string;
  name: string;
  startDate: Dayjs;
  orderDate: Dayjs;
  collectDate: Dayjs;
  payDate: Dayjs;
  description: string;
  image: string;
}
export type ActionWithoutId = Omit<Action, "id">;
