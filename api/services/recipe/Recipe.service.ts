import { CookingStep, Ingredient, PrismaClient } from "@prisma/client";

export class RecipeService {
  private prisma: PrismaClient = new PrismaClient();

  async getRecipes() {
    const recipes = await this.prisma.recipe.findMany({
      select: {
        id: true,
        name: true,
        cooking_time_minutes: true,
        ingredients: true,
      },
      orderBy: {
        updated_at: "desc",
      },
    });

    return recipes;
  }

  async searchRecipes(query: string) {
    const recipes = await this.prisma.recipe.findMany({
      where: {
        OR: [
          {
            name: { contains: query, mode: "insensitive" },
          },
          {
            ingredients: {
              some: { name: { contains: query, mode: "insensitive" } },
            },
          },
        ],
      },
      select: {
        id: true,
        name: true,
        ingredients: true,
        cooking_time_minutes: true,
      },
      orderBy: {
        updated_at: "desc",
      },
    });

    return recipes;
  }

  async getRecipe(id: string) {
    return this.prisma.recipe.findFirst({
      where: { id: parseInt(id) },
      select: {
        id: true,
        name: true,
        ingredients: true,
        cooking_steps: true,
        cooking_time_minutes: true,
      },
    });
  }

  async saveRecipe(recipe: {
    name: string;
    ingredients: Ingredient[];
    cooking_steps: CookingStep[];
    cooking_time_minutes: string;
  }) {
    return this.prisma.recipe.create({
      data: {
        name: recipe.name,
        cooking_time_minutes: recipe.cooking_time_minutes,
        ingredients: {
          createMany: {
            data: recipe.ingredients,
          },
        },
        cooking_steps: {
          createMany: {
            data: recipe.cooking_steps,
          },
        },
      },
    });
  }

  async deleteRecipe(recipeId: number) {
    return this.prisma.recipe.delete({ where: { id: recipeId } });
  }
}
