import { Button } from "../../Button/Button";
import { IIngredient } from "../../../interfaces/IIngredient";
import { Input } from "../../Input/Input";
import { Stepper } from "../Stepper";

export class IngredientStepper extends Stepper {
  addNewRow() {
    this.props.form.ingredients.push({
      name: '',
      measurement: '',
    });

    this.props.setForm({ ...this.props.form });
  }

  render() {
    return this.props.form.ingredients?.map((_ingredient: IIngredient, index: number) => {
      return (
        <>
          <div className="create-recipe_container__inner">
            <div className="create-recipe_container__inner__input">
              <label>Ingredient Name</label>
              <Input placeholder="Apples" onChange={(value: string) => {
                const updatedArray = [ ...this.props.form.ingredients ];

                updatedArray[ index ].name = value;

                this.props.setForm(this.props.form);
              }} />
            </div>
            <div className="create-recipe_container__inner__input">
              <label>Amount</label>
              <Input placeholder="100g" onChange={(value: string) => {
                const updatedArray = [ ...this.props.form.ingredients ];

                updatedArray[ index ].measurement = value;

                this.props.setForm(this.props.form);
              }} />
            </div>
            <div className="create-recipe_container__inner__button-container">
              {
                index === this.props.form.ingredients?.length - 1
                  ? <Button type='fill' title="Add another ingredient" onClick={() => this.addNewRow()} />
                  : undefined
              }
            </div>
          </div>
        </>
      )
    })
  }
}
