// Routes for categories
// Rotas serve para receber requisições e repassar

// Router
import { Router } from "express";

// Controller
import { CreateCategoryController } from "../modules/cars/useCases/createCategory/CreateCategoryController";
import { ListCategoriesController } from "../modules/cars/useCases/listCategories/ListCategoriesController";
import { ImportCategoryController } from "../modules/cars/useCases/importCategory/ImportCategoryController";

// Multer
import multer from "multer";

const upload = multer({
  dest: "./tmp",
})

const categoriesRoutes = Router();

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoriesController = new ListCategoriesController();

categoriesRoutes.post("/", createCategoryController.handle)

categoriesRoutes.get("/", listCategoriesController.handle)

categoriesRoutes.post("/import", upload.single("file"), importCategoryController.handle)

export { categoriesRoutes }