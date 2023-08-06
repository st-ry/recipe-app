import { Injectable } from "@nestjs/common"

@Injectable()
export class RecipeService {
  getRecipes(): string {
    return "get recipes"
  }

  putRecipe(): string {
    return "put recipe"
  }
}
