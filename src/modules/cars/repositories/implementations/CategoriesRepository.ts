// Repositórios ficam responsável por fazer as ações nos bancos de dados, manipulação de dados
import { Category } from "../../model/Category";

import { ICategoriesRepository, ICreateCategoryDTO } from "../ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[];

  private static INSTANCE: CategoriesRepository;

  private constructor() {
    // Quando a gente instanciar a classe, nosso array categories vai iniciar como []
    this.categories = [];
  }

  // Responsável por instanciar nossa classe
  public static getInstance(): CategoriesRepository {
    if(!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }

    return CategoriesRepository.INSTANCE
  }

  create({ name, description }: ICreateCategoryDTO): void {
    // Função responsável por criar uma categoria 
    const category: Category = new Category();

    // Atribuindo valor da rota para o valor do objeto Category
    Object.assign(category, {
      name,
      description,
      created_at: new Date()
    })
    
    this.categories.push(category);
  }

  list(): Category[] {
    // Listando as categorias
    return this.categories;

  }

  findByName(name: string): Category | undefined {
    const category = this.categories.find((category) => category.name === name);
    return category;
  }
}

export { CategoriesRepository }