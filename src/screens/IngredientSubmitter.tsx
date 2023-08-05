import React from "react";
// import { useTranslation, Trans } from "react-i18next";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  ingredients,
  Allergen,
  FoodGroup,
  addIngredient,
  Ingredient,
  foodGroups,
  allergens,
  ShouldCount,
} from "../resources/ingredients";

export default function IngredientSubmitter() {
  // const { t } = useTranslation();

  type IngredientFormValues = {
    id: string;
    nameHungarian: string;
    nameEnglish: string;
    carbohydrateContent: string;
    shouldCount: ShouldCount;
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
    foodGroup: yup
      .object()
      .shape({ id: yup.number(), nameEnglish: yup.string().required() })
      .required(),
    allergens: yup.array().min(1),
  });

  const { register, handleSubmit, reset, formState } =
    useForm<IngredientFormValues>({
      defaultValues: {
        nameHungarian: "",
        nameEnglish: "",
        carbohydrateContent: "",
        shouldCount: 1,
        absorbedSlowly: true,
        foodGroup: { id: 13, nameEnglish: "vegetables" },
        allergens: [],
      },
      //resolver: yupResolver(schema),
    });
  console.info("isValid", formState.isValid);
  console.info("errors", formState.errors);
  const onSubmit = (data: IngredientFormValues) => {
    console.log("onSubmit");
    const newIngredient: Ingredient = {
      id: lastIngredient.id + 1,
      nameHungarian: data.nameHungarian,
      nameEnglish: data.nameEnglish,
      carbohydrateContent: +data.carbohydrateContent,
      shouldCount: data.shouldCount,
      absorbedSlowly: data.absorbedSlowly,
      foodGroup: {
        id: data.foodGroup.id,
        nameEnglish: data.foodGroup.nameEnglish,
      },
      allergens: data.allergens,
    };
    console.log({ data, newIngredient });
    addIngredient(newIngredient);
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
          {foodGroups.map((group, index) => {
            const key = `food-group-${index}`;
            return (
              <div key={key}>
                <input
                  type="radio"
                  id={`food-group-${group.id}`}
                  value={group.nameEnglish}
                  {...register("foodGroup")}
                />
                <label htmlFor={`food-group-${group.id}`}>
                  {group.nameEnglish}
                </label>
              </div>
            );
          })}
        </div>

        <div>
          <legend>Allergének</legend>
          {allergens.map((allergen, index) => {
            const key = `allergens-${index}`;
            return (
              <div key={key}>
                <input
                  type="checkbox"
                  id={`allergens-${allergen.id}`}
                  value={allergen.nameEnglish}
                  {...register(`allergens`)}
                />
                <label htmlFor={`allergens-${allergen.id}`}>
                  {allergen.nameEnglish}
                </label>
              </div>
            );
          })}
        </div>

        <button disabled={formState.isSubmitting} type="submit">
          Beküld
        </button>
        <button
          disabled={formState.isSubmitting}
          type="button"
          onClick={() => {
            reset();
          }}
        >
          Mégsem
        </button>
      </form>
    </>
  );
}
