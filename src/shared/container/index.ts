import { container } from "tsyringe";

import { ICategoriesRepository } from "../../modules/cars/repositories/ICategoriesRepository";
import { ISpecificationsRepository } from "../../modules/cars/repositories/ISpecificationsRepository";

import { CategoriesRepository } from "../../modules/cars/repositories/implementations/CategoriesRepository"
import { SpecificationsRepository } from "../../modules/cars/repositories/implementations/SpecificationsRepository";

// Passa nossa interface ICategoriesRepository e vamos da um nome para chamar a classe
container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  // Classe que a gente vai chamar ao chamar o nome
  CategoriesRepository
)

container.registerSingleton<ISpecificationsRepository>(
  "SpecificationsRepository",
  SpecificationsRepository
)