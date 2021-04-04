import { Button } from "../../Button/Button";
import { ICookingStep } from "../../../interfaces/ICookingStep";
import { Input } from "../../Input/Input";
import { Stepper } from "../Stepper";

export class CookingStepper extends Stepper {
  addNewRow() {
    this.props.form.cooking_steps.push({
      description: '',
    })

    this.props.setForm({ ...this.props.form });
  }

  render() {
    return this.props.form.cooking_steps?.map((_cookingStep: ICookingStep, index: number) => {
      return (
        <>
          <div className="create-recipe_container__inner">
            <div className="create-recipe_container__inner__input">
              <label>Step</label>
              <Input placeholder="Peel the apples" onChange={(value: string) => {
                const updatedArray = [ ...this.props.form.cooking_steps ];

                if (value) {
                  updatedArray[ index ].description = value;
                }

                this.props.setForm(this.props.form);
              }} />
            </div>
            <div className="create-recipe_container__inner__button-container">
              {
                index === this.props.form.cooking_steps?.length - 1
                  ? <Button type='fill' title="Add another step" onClick={() => this.addNewRow()} />
                  : undefined
              }
            </div>
          </div>
        </>
      )
    })
  }
}
