import "./Recipe.css";

import { Button } from "../Button/Button";
import FoodSvg from "../Svg/Food/Food";
import { ICookingStep } from "../../interfaces/ICookingStep";
import { IIngredient } from "../../interfaces/IIngredient";
import { useHistory } from "react-router";

interface RecipeProps {
  id: string;
  title: string;
  ingredients: IIngredient[];
  cooking_steps: ICookingStep[];
  cooking_time_minutes: string;
  expand?: boolean;
}

export const Recipe = (props: RecipeProps) => {
  const location = useHistory();

  return (
    <div className="recipe-container">
      <div className="recipe-image">
        <FoodSvg width="200" height="200" />
      </div>
      <div className="recipe-content">
        <h1>{props.title}</h1>
        <h5>Cooking time - {props.cooking_time_minutes} minutes</h5>
        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          {
            props?.ingredients?.map((ingredient, index) => <span>{ingredient.name} ({ingredient.measurement}){index === props.ingredients.length - 1 ? '' : ', '}</span>)
          }
        </div>
        {
          props.expand
            ? <>
              <h2>Cooking steps</h2>

              {
                props?.cooking_steps?.map(cookingStep => <li style={{ listStyleType: 'decimal', marginBottom: '18px' }}>{cookingStep.description}</li>)
              }
            </>
            : <div className="recipe-button_container">
              <Button type='fill' onClick={() => { location.push(`/view-recipe/${ props.id }`) }} title="Cook it " />
            </div>
        }
      </div>
    </div>
  );
}
