import type { Product, User, Action } from "@prisma/client";
import dayjs, { type Dayjs } from "dayjs";

export interface ActionFormDTO {
  id?: string;
  name: string;
  image: string | null;
  startDate: Dayjs;
  orderDate: Dayjs;
  collectDate: Dayjs;
  payDate: Dayjs;
  description: string;
  rules: string | null;
  collection: string | null;
  payment: string | null;
  paylock: boolean;
  productsListOpen: boolean;
  constantPrice: number;
  discount: number;
}
export type ActionWithoutId = Omit<Action, "id">;

export type ActionWithRelations = Action & {
  user: User;
  products: Product[];
};

export const toActionFormDTO = (action: Action): ActionFormDTO => {
  const { startDate, orderDate, collectDate, payDate, ...rest } = action;

  return {
    ...rest,
    startDate: dayjs(startDate),
    orderDate: dayjs(orderDate),
    collectDate: dayjs(collectDate),
    payDate: dayjs(payDate),
  };
};

export const fromActionFormDTO = (
  values: ActionFormDTO
): Action | Omit<ActionWithoutId, "userId"> => {
  return {
    ...values,
    startDate: values.startDate.toDate(),
    orderDate: values.orderDate.toDate(),
    collectDate: values.collectDate.toDate(),
    payDate: values.payDate.toDate(),
    image: null,
  };
};
