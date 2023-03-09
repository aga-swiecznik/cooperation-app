import { createTRPCRouter } from "~/server/api/trpc";
import { saveAction } from "~/server/api/controllers/action/save";
import { getAllActions } from "~/server/api/controllers/action/all";
import { getAction } from "~/server/api/controllers/action/get";
import { saveProduct } from "../controllers/action/saveProduct";
import { getAllProducts } from "../controllers/action/allProducts";
import { deleteProduct } from "../controllers/action/deleteProduct";

export const actionRouter = createTRPCRouter({
  save: saveAction,
  get: getAction,
  getAll: getAllActions,
  saveProduct: saveProduct,
  getAllProducts: getAllProducts,
  deleteProduct: deleteProduct,
});
