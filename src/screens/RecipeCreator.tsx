import { findByLabelText } from "@testing-library/react";
import React from "react";
import { useFieldArray, useForm } from "react-hook-form";

export default function RecipeCreator() {
  type RecipeFormValues = {
    media: string;
    ingredients: Ingredient[];
    preparation: string;
  };

  type Ingredient = {
    name: string;
    quantity: string;
    unitOfMeasurement: string;
  };

  const {
    control,
    register,
    handleSubmit,
    watch,
    reset,
    getValues,
    formState,
  } = useForm<RecipeFormValues>({
    defaultValues: {
      media: "",
      ingredients: [{ name: "", quantity: "", unitOfMeasurement: "g" }],
      preparation: "",
    },
  });
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control,
      name: "ingredients", // unique name for your Field Array
    }
  );

  const onSubmit = (data: RecipeFormValues) => {
    console.log(data);

    reset();
  };

  return (
    // <h1>PIKACHU</h1>
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="recipe-form">
        <input {...register("media")} type="text" placeholder="kép URL" />
        {fields.map((field, index) => (
          <div key={field.id} style={{ display: "flex", flexDirection: "row" }}>
            <input
              placeholder="Hozzávaló megnevezése"
              {...register(`ingredients.${index}.name`)}
              type="text"
            ></input>
            <input
              placeholder="mennyiség"
              {...register(`ingredients.${index}.quantity`)}
              type="text"
            ></input>
            <input
              placeholder="mértékegység"
              {...register(`ingredients.${index}.unitOfMeasurement`)}
              type="text"
            ></input>
            <button
              type="button"
              onClick={() => {
                remove(index);
                console.log(fields);
              }}
            >
              Eltávolít
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() =>
            append({
              name: "",
              quantity: "",
              unitOfMeasurement: "g",
            })
          }
        >
          Hozzávaló hozzáadása
        </button>
        <textarea {...register("preparation")} />
        <button disabled={formState.isSubmitting} type="submit">
          Beküld
        </button>
      </form>

      <h1>Előnézet</h1>
      <div>
        <div
          style={{
            height: "200px",
            width: "300px",
            backgroundImage: watch("media")
              ? `url(${watch("media")})`
              : "url(https://receptguru.cafeblog.hu/files/2017/05/panna-cotta.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        <h2>Hozzávalók</h2>
        <ul>
          {/* {fields.map((field) => (
            <div>
              {field.name} {field.quantity} {field.unitOfMeasurement}
            </div>
          ))} */}
          {watch("ingredients").map((field) => (
            <div key={Math.random()}>
              {field.name} {field.quantity} {field.unitOfMeasurement}
            </div>
          ))}
        </ul>
        <h2>Elkészítés</h2>
        {watch("preparation")}
      </div>
    </>
  );
}
