import "./ViewRecipe.css";

import { Header } from "../../components/Header/Header";
import { IRecipe } from "../../interfaces/IRecipe";
import LoaderSvg from "../../components/Svg/Loader/Loader";
import { Recipe } from "../../components/Recipe/Recipe";
import { RouteComponentProps } from "react-router";
import { Variables } from "../../Variables";
import useSWR from "swr";

interface ViewRecipeProps {
  id: string;
};

export const ViewRecipe = ({ match }: RouteComponentProps<ViewRecipeProps>) => {
  const { data: recipe, isValidating } = useSWR<IRecipe>(`${ Variables.URL }/recipes/${ match.params.id }`);

  return (
    <>
      <div className="view-recipe_outer">
        <div className="view-recipe_container">
          <Header showBackArrow={true} title={`Viewing recipe for ${ recipe?.name }`} />

          <div className="view-recipe_container__inner">
            {
              isValidating
                ? <div style={{ marginTop: 48 }}><LoaderSvg width="40" height="40" /></div>
                : recipe
                  ? <Recipe
                    key={recipe.id}
                    expand={true}
                    id={recipe.id}
                    ingredients={recipe.ingredients}
                    cooking_steps={recipe.cooking_steps}
                    cooking_time_minutes={recipe.cooking_time_minutes}
                    title={recipe.name}
                  />
                  : undefined
            }
          </div>
        </div>
      </div>
    </>
  );
}
