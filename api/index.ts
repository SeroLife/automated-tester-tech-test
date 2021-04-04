import { json, urlencoded } from 'body-parser'

import { RecipeController } from './controllers/recipe/Recipe.controller';
import cors from 'cors';
import express from "express";

const app = express();

export class Application {
  constructor() {
    this.setupApplicationSettings();
    this.setupControllers();
  }

  setupApplicationSettings() {
    app.use(cors());
    app.use(urlencoded({ extended: false }));
    app.use(json());
  }

  listen() {
    app.listen(3080, () => console.log('Listening on port 3080'));
  }

  setupControllers() {
    const recipeController = new RecipeController(app);

    recipeController.register();
  }
}

const application = new Application();

application.listen();
