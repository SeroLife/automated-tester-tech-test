import "./CreateRecipe.css";

import { Button } from "../../components/Button/Button";
import { CookingStepper } from "../../components/Stepper/CookingStepper/CookingStepper";
import { Header } from "../../components/Header/Header";
import { IRecipe } from "../../interfaces/IRecipe";
import { IngredientStepper } from "../../components/Stepper/IngredientStepper/IngredientStepper";
import { Input } from "../../components/Input/Input";
import { useHistory } from "react-router";
import { useState } from "react";

export const CreateRecipe = () => {
  const [ form, setForm ] = useState<IRecipe>({
    id: '',
    ingredients: [ {
      name: '',
      measurement: '',
    } ],
    cooking_steps: [ {
      description: '',
    } ],
    name: '',
    cooking_time_minutes: '',
  });

  const [ isSaving, setIsSaving ] = useState(false);

  const location = useHistory();

  const saveRecipe = async () => {
    setIsSaving(true);

    await fetch('http://localhost:3080/recipes', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: {
        'content-type': 'application/json'
      }
    });

    setIsSaving(false);

    location.goBack();
  }

  return (
    <>
      <div className="create-recipe_outer">
        <div className="create-recipe_container">
          <Header showBackArrow={true} title={'Create a new recipe'} />

          <div className="line"></div>

          <div className="create-recipe_container__inner__input">
            <label>Recipe name</label>
            <Input placeholder="Apple Crumble" onChange={(value: string) => { form.name = value; setForm({ ...form }) }} />
          </div>

          <div className="create-recipe_container__inner__input">
            <label>Cooking time (In minutes)</label>
            <Input placeholder="45" onChange={(value: string) => { form.cooking_time_minutes = value; setForm({ ...form }) }} />
          </div>

          <h1>Ingredients</h1>

          <div className="line"></div>

          <IngredientStepper form={form} setForm={(updatedRecipe: IRecipe) => setForm(updatedRecipe)} />

          <h1>Cooking steps</h1>

          <div className="line"></div>

          <CookingStepper form={form} setForm={(updatedRecipe: IRecipe) => setForm(updatedRecipe)} />

          <div className="create-recipe_container__inner__button-container">
            <Button type='fill' title="Save recipe" onClick={() => { saveRecipe() }} isLoadingConfig={{ value: isSaving, textToShow: 'Saving..' }} />
          </div>
        </div>
      </div>
    </>
  );
}
