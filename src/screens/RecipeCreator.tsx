import React from "react";
import { useFieldArray, useForm } from "react-hook-form";

export default function RecipeCreator() {
  type RecipeFormValues = {
    media: string;
    title: string;
    ingredients: Ingredient[];
    preparation: string;
  };

  type Ingredient = {
    name: string;
    quantity: string;
    unitOfMeasurement: string;
  };

  const { control, register, handleSubmit, watch, reset, formState } =
    useForm<RecipeFormValues>({
      defaultValues: {
        title: "",
        media: "",
        ingredients: [{ name: "", quantity: "", unitOfMeasurement: "g" }],
        preparation: "",
      },
    });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "ingredients",
  });

  const onSubmit = (data: RecipeFormValues) => {
    console.log(data);

    reset();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        onKeyDown={(event: React.KeyboardEvent) => {
          if (event.code === "Enter") {
            event.preventDefault();
          }
        }}
        className="recipeform"
      >
        <input {...register("media")} type="text" placeholder="Kép URL" />
        <input {...register("title")} type="text" placeholder="Recept cím" />
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
        <h1>{watch("title")}</h1>
        <div className="recipe-essentials">
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
          />
          <div>
            <h2>Hozzávalók</h2>
            <ul>
              {watch("ingredients").map((field) => (
                <div key={Math.random()}>
                  {field.name} {field.quantity} {field.unitOfMeasurement}
                </div>
              ))}
            </ul>
          </div>
        </div>
        <h2>Elkészítés</h2>
        {watch("preparation").replace("\n", "\r\n")}
      </div>
    </>
  );
}
