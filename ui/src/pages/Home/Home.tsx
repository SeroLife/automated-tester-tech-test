import "./home.css";

import useSWR, { mutate } from "swr";

import { Header } from "../../components/Header/Header";
import { IRecipe } from "../../interfaces/IRecipe";
import { Input } from "../../components/Input/Input";
import LoaderSvg from "../../components/Svg/Loader/Loader";
import NoResultsSvg from "../../components/Svg/NoResults/NoResults";
import { Recipe } from "../../components/Recipe/Recipe";
import { Variables } from "../../Variables";
import { useHistory } from "react-router-dom";

export const Home = () => {

  const navigation = useHistory();

  const searchRecipes = async (query: string) => {
    const response = await fetch(`${ Variables.URL }/recipes?search=${ query }`);

    const updated_recipes_list = await response.json();

    mutate(`${ Variables.URL }/recipes`, updated_recipes_list, false);
  }

  const { data: recipes, isValidating } = useSWR<IRecipe[]>(`${ Variables.URL }/recipes`);

  return (
    <>
      <div className="home-container">
        <div className="home-title-inner-container">
          <Header title={'Your recipes'} button={{ title: 'Create new recipe', onClick: () => navigation.push('/create-recipe') }} />
        </div>

        <div className="home-input-container">
          <Input debounceTime={500} placeholder="Search for a recipe by name or by ingredients" onChange={(value: string) => { searchRecipes(value) }} />
        </div>

        <div className="home-inner-container">
          {
            isValidating
              ? <div style={{ marginTop: 48 }}><LoaderSvg width="40" height="40" /></div>
              : recipes && recipes.length > 0
                ? recipes.map((recipe) => {
                  return <Recipe
                    key={recipe.id}
                    id={recipe.id}
                    title={recipe.name}
                    ingredients={recipe.ingredients}
                    cooking_steps={recipe.cooking_steps}
                    cooking_time_minutes={recipe.cooking_time_minutes}
                  />
                })
                : <>
                  <div style={{ marginTop: '48px' }}>
                    <NoResultsSvg width="90%" height="90%" /><h2>It looks like you don't have any recipes 🥺</h2>
                  </div>
                </>
          }
        </div>
      </div>
    </>
  );
}