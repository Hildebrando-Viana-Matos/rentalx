import { container } from "tsyringe";

import { ICategoriesRepository } from "../../modules/cars/repositories/ICategoriesRepository";
import { CategoriesRepository } from "../../modules/cars/repositories/implementations/CategoriesRepository"

// Passa nossa interface ICategoriesRepository e vamos da um nome para chamar a classe
container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  // Classe que a gente vai chamar ao chamar o nome
  CategoriesRepository
)