// Definindo as tipagens
import { v4 as uuidV4 } from "uuid";

class Category {
  id?: string;
  name: string;
  description: string;
  created_at: Date;

  // Construtor é chamado quando a classe é instânciada 
  constructor() {
    if(!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Category }