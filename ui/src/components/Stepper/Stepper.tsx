import { IRecipe } from "../../interfaces/IRecipe";
import React from "react";

export abstract class Stepper extends React.Component<{ form: IRecipe, setForm: Function }> {
  abstract addNewRow(): void;
}
