import { ICookingStep } from './ICookingStep';
import { IIngredient } from './IIngredient';

export interface IRecipe {
  id: string;
  name: string;
  cooking_time_minutes: string;
  ingredients: IIngredient[];
  cooking_steps: ICookingStep[]
}
