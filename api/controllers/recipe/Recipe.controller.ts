import { Recipe } from '@prisma/client';
import { Express, Request, Response } from 'express';
import { RecipeService } from '../../services/recipe/Recipe.service';
import { BaseController } from '../base/Base.controller';

export class RecipeController extends BaseController {
  private recipeService: RecipeService = new RecipeService();

  constructor(app: Express) {
    super(app);
  }

  async list(req: Request, res: Response) {
    let recipes: Partial<Recipe>[];

    try {
      if (req?.query?.search) {
        recipes = await this.recipeService.searchRecipes(<string>req.query.search);
      } else {
        recipes = await this.recipeService.getRecipes();
      }

      res.send({ data: recipes, status: 200, image: 'jackthomson/recipe-cookbook-api' });
    } catch (e) {
      res.status(e.status ?? 500).send(e.message ?? 'Internal Server Error');
    }
  }

  async get(req: Request, res: Response) {
    try {
      const recipe = await this.recipeService.getRecipe(req.params.id);

      res.send(recipe);
    } catch (e) {
      res.status(e.status ?? 500).send(e.message ?? 'Internal Server Error');
    }
  }

  async create(req: Request, res: Response) {
    try {
      await this.recipeService.saveRecipe(req.body);

      res.sendStatus(200);
    } catch (e) {
      res.status(e.status ?? 500).send(e.message ?? 'Internal Server Error');
    }
  }

  async delete(req: Request, res: Response) {
    try {
      await this.recipeService.deleteRecipe(parseInt(req.params.id));

      res.sendStatus(200);
    } catch (e) {
      res.status(e.status ?? 500).send(e.message ?? 'Internal Server Error');
    }
  }

  register() {
    this.app.get('/recipes', (req, res) => this.list(req, res));
    this.app.get('/recipes/:id', (req, res) => this.get(req, res));
    this.app.post('/recipes', (req, res) => this.create(req, res));
    this.app.delete('/recipes/:id', (req, res) => this.delete(req, res));
  }
}
