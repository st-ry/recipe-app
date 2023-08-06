import { Controller, Get, Put } from "@nestjs/common"
import { RecipeService } from "./recipe.service"

@Controller("recipe")
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  @Get()
  getAll(): string {
    return this.recipeService.getRecipes()
  }

  @Put()
  putRecipe(): string {
    return this.recipeService.putRecipe()
  }
}
