import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import {
  ingredients,
  Allergen,
  FoodGroup,
  addIngredient,
  Ingredient,
  foodGroups,
  allergens,
} from "../resources/ingredients";

export default function IngredientSubmitter() {
  type IngredientFormValues = {
    id: string;
    nameHungarian: string;
    nameEnglish: string;
    carbohydrateContent: string;
    shouldCount: "yes" | "no" | "no under 200g";
    absorbedSlowly: boolean;
    foodGroup: FoodGroup;
    allergens: Allergen[];
  };

  const lastIngredient = ingredients[ingredients.length - 1];

  let schema = yup.object().shape({
    nameHungarian: yup.string().required(),
    nameEnglish: yup.string().required(),
    carbohydrateContent: yup.string().required(),
    shouldCount: yup.string().required(),
    absorbedSlowly: yup.boolean().required(),
    foodGroup: yup.string().required(),
    allergens: yup.array().min(1),
  });

  const { control, register, handleSubmit, watch, reset, formState } =
    useForm<IngredientFormValues>({
      defaultValues: {
        nameHungarian: "",
        nameEnglish: "",
        carbohydrateContent: "",
        shouldCount: "yes",
        absorbedSlowly: true,
        foodGroup: "vegetables",
        allergens: [],
      },
    });

  const onSubmit = (data: IngredientFormValues) => {
    const newIngredient: Ingredient = {
      id: lastIngredient.id + 1,
      nameHungarian: data.nameHungarian,
      nameEnglish: data.nameEnglish,
      carbohydrateContent: +data.carbohydrateContent,
      shouldCount: data.shouldCount,
      absorbedSlowly: data.absorbedSlowly,
      foodGroup: data.foodGroup,
      allergens: data.allergens,
    };
    console.log({ data, newIngredient });
    // addIngredient(newIngredient);
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
        className="ingredient-submitter-form"
      >
        <input
          {...register("nameHungarian")}
          type="text"
          placeholder="magyar név"
        />
        <input
          {...register("nameEnglish")}
          type="text"
          placeholder="angol név"
        />
        <input
          {...register("carbohydrateContent")}
          type="text"
          placeholder="szénhidráttartalom"
        />
        <div>
          <legend>Számolandó?</legend>

          <div>
            <input
              type="radio"
              id="should-count-yes"
              value="yes"
              {...register("shouldCount")}
            />
            <label htmlFor="should-count-yes">Igen</label>
          </div>

          <div>
            <input
              type="radio"
              id="should-count-no"
              value="no"
              {...register("shouldCount")}
            />
            <label htmlFor="should-count-no">Nem</label>
          </div>

          <div>
            <input
              type="radio"
              id="should-count-maybe"
              value="no under 200g"
              {...register("shouldCount")}
            />
            <label htmlFor="should-count-maybe">Csak 200g felett</label>
          </div>
        </div>
        <div>
          <legend>Lassú felszívódású?</legend>

          <div>
            <input
              type="radio"
              id="absorbed-slowly-yes"
              value="yes"
              {...register("absorbedSlowly")}
            />
            <label htmlFor="should-count-yes">Igen</label>
          </div>

          <div>
            <input
              type="radio"
              id="absorbed-slowly-no"
              value="no"
              {...register("absorbedSlowly")}
            />
            <label htmlFor="should-count-no">Nem</label>
          </div>
        </div>

        <div>
          <legend>Csoport</legend>
          {foodGroups.map((group) => {
            return (
              <div>
                <input
                  type="radio"
                  id={`food-group-${group}`}
                  value={group}
                  {...register("foodGroup")}
                />
                <label htmlFor={`food-group-${group}`}>{group}</label>
              </div>
            );
          })}
        </div>

        <div>
          <legend>Allergének</legend>
          {allergens.map((allergen) => {
            return (
              <div>
                <input
                  type="checkbox"
                  id={`allergens-${allergen}`}
                  value={allergen}
                  {...register(`allergens`)}
                />
                <label htmlFor={`allergens-${allergen}`}>{allergen}</label>
              </div>
            );
          })}
        </div>

        <button disabled={formState.isSubmitting} type="submit">
          Beküld
        </button>
        <button disabled={formState.isSubmitting} type="button">
          Mégsem
        </button>
      </form>
    </>
  );
}
