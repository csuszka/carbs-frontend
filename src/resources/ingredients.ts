export const allergens = [
  { id: 1, nameEnglish: "celery" },
  { id: 2, nameEnglish: "egg" },
  { id: 3, nameEnglish: "fish" },
  { id: 4, nameEnglish: "gluten" },
  { id: 5, nameEnglish: "lactose" },
  { id: 6, nameEnglish: "milk protein" },
  { id: 7, nameEnglish: "mustard" },
  { id: 8, nameEnglish: "peanut" },
  { id: 9, nameEnglish: "sesame" },
  { id: 10, nameEnglish: "shellfish" },
  { id: 11, nameEnglish: "soy" },
  { id: 12, nameEnglish: "tree nut" },
  { id: 13, nameEnglish: "wheat" },
];

export const foodGroups = [
  { id: 1, nameEnglish: "cereals" },
  { id: 2, nameEnglish: "condiments" },
  { id: 3, nameEnglish: "eggs" },
  { id: 4, nameEnglish: "fats" },
  { id: 5, nameEnglish: "fruits" },
  { id: 6, nameEnglish: "fungi" },
  { id: 7, nameEnglish: "milk" },
  { id: 8, nameEnglish: "meats" },
  { id: 9, nameEnglish: "no group" },
  { id: 10, nameEnglish: "nuts" },
  { id: 11, nameEnglish: "spices" },
  { id: 12, nameEnglish: "sweeteners" },
  { id: 13, nameEnglish: "vegetables" },
];

export type Allergen = typeof allergens[number];
export type FoodGroup = typeof foodGroups[number];

export enum ShouldCount {
  YES = 1,
  OVER200 = 2,
  NO = 3,
}

export function addIngredient(ingredient: Ingredient) {
  console.log("ADDING INGREDIENT");
  // ingredients.push(ingredient);
}

export type Ingredient = {
  id: number;
  nameHungarian: string;
  nameEnglish: string;
  carbohydrateContent: number;
  shouldCount: ShouldCount;
  absorbedSlowly: boolean;
  foodGroup: FoodGroup;
  allergens: Allergen[];
};

export type IngredientDB = {
  id: number;
  nameHungarian: string;
  nameEnglish: string;
  carbohydrateContent: number;
  shouldCount: 1 | 2 | 3;
  absorbedSlowly: boolean;
  foodGroup: number;
  allergens: number[];
};

export const ingredients: IngredientDB[] = [
  {
    id: 0,
    nameHungarian: "tojás",
    nameEnglish: "egg",
    carbohydrateContent: 0.7,
    shouldCount: 3,
    absorbedSlowly: true,
    foodGroup: 3,
    allergens: [2],
  },
  {
    id: 1,
    nameHungarian: "teljes kiőrlésű búzaliszt",
    nameEnglish: "wholegrain wheat flour",
    carbohydrateContent: 50,
    shouldCount: 1,
    absorbedSlowly: true,
    foodGroup: 1,
    allergens: [4, 13],
  },
  {
    id: 2,
    nameHungarian: "búza finomliszt",
    nameEnglish: "all-purpose flour",
    carbohydrateContent: 71,
    shouldCount: 1,
    absorbedSlowly: false,
    foodGroup: 1,
    allergens: [4, 13],
  },
  {
    id: 3,
    nameHungarian: "só",
    nameEnglish: "salt",
    carbohydrateContent: 0,
    shouldCount: 3,
    absorbedSlowly: true,
    foodGroup: 9,
    allergens: [],
  },
  {
    id: 4,
    nameHungarian: "élesztő",
    nameEnglish: "yeast",
    carbohydrateContent: 15,
    shouldCount: 2,
    absorbedSlowly: true,
    foodGroup: 6,
    allergens: [],
  },
  {
    id: 5,
    nameHungarian: "tejszín 20%-os",
    nameEnglish: "cream 20%",
    carbohydrateContent: 4,
    shouldCount: 3,
    absorbedSlowly: true,
    foodGroup: 7,
    allergens: [5, 6],
  },
  {
    id: 6,
    nameHungarian: "vaj",
    nameEnglish: "butter",
    carbohydrateContent: 0.5,
    shouldCount: 3,
    absorbedSlowly: true,
    foodGroup: 7,
    allergens: [5, 6],
  },
  {
    id: 7,
    nameHungarian: "víz",
    nameEnglish: "water",
    carbohydrateContent: 0,
    shouldCount: 3,
    absorbedSlowly: true,
    foodGroup: 9,
    allergens: [],
  },
  {
    id: 8,
    nameHungarian: "barna rizsliszt",
    nameEnglish: "brown rice flour",
    carbohydrateContent: 31,
    shouldCount: 3,
    absorbedSlowly: true,
    foodGroup: 1,
    allergens: [],
  },
  {
    id: 8,
    nameHungarian: "fekete bors",
    nameEnglish: "black pepper",
    carbohydrateContent: 38.7,
    shouldCount: 2,
    absorbedSlowly: true,
    foodGroup: 11,
    allergens: [],
  },
  {
    id: 9,
    nameHungarian: "kókuszzsír",
    nameEnglish: "coconut oil",
    carbohydrateContent: 0,
    shouldCount: 3,
    absorbedSlowly: true,
    foodGroup: 3,
    allergens: [3],
  },
  {
    id: 10,
    nameHungarian: "sztívia",
    nameEnglish: "stevia",
    carbohydrateContent: 0,
    shouldCount: 3,
    absorbedSlowly: true,
    foodGroup: 12,
    allergens: [],
  },
  {
    id: 11,
    nameHungarian: "mascarpone",
    nameEnglish: "mascarpone",
    carbohydrateContent: 0.7,
    shouldCount: 3,
    absorbedSlowly: true,
    foodGroup: 7,
    allergens: [5, 6],
  },
];
