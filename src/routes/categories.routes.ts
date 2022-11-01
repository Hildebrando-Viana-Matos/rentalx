// Routes for categories
// Rotas serve para receber requisições e repassar

// Router
import { Router } from "express";

// Controller
import createCategoryController from "../modules/cars/useCases/createCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";
import { importCategoryController } from "../modules/cars/useCases/importCategory";

// Multer
import multer from "multer";

const upload = multer({
  dest: "./tmp",
})

const categoriesRoutes = Router();

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController().handle(request, response);
})

categoriesRoutes.get("/", (request, response) => {
  return listCategoriesController.handle(request, response)
})

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
  return importCategoryController.handle(request, response);
})

export { categoriesRoutes }