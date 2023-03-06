export const allergens = [
  "celery",
  "egg",
  "fish",
  "gluten",
  "lactose",
  "milk protein",
  "mustard",
  "peanut",
  "sesame",
  "shellfish",
  "soy",
  "tree nut",
  "wheat",
];

export const foodGroups = [
  "cereals",
  "condiments",
  "eggs",
  "fats",
  "fruits",
  "fungi",
  "milk",
  "meats",
  "no group",
  "nuts",
  "spices",
  "sweeteners",
  "vegetables",
];

export type Allergen = typeof allergens[number];

export type FoodGroup = typeof foodGroups[number];

export function addIngredient(ingredient: Ingredient) {
  ingredients.push(ingredient);
}

export type Ingredient = {
  id: number;
  nameHungarian: string;
  nameEnglish: string;
  carbohydrateContent: number;
  shouldCount: "yes" | "no" | "no under 200g";
  absorbedSlowly: boolean;
  foodGroup: FoodGroup;
  allergens: Allergen[];
};

export const ingredients: Ingredient[] = [
  {
    id: 0,
    nameHungarian: "tojás",
    nameEnglish: "egg",
    carbohydrateContent: 0.7,
    shouldCount: "no",
    absorbedSlowly: true,
    foodGroup: "eggs",
    allergens: ["egg"],
  },
  {
    id: 1,
    nameHungarian: "teljes kiőrlésű búzaliszt",
    nameEnglish: "wholegrain wheat flour",
    carbohydrateContent: 50,
    shouldCount: "yes",
    absorbedSlowly: true,
    foodGroup: "cereals",
    allergens: ["gluten", "wheat"],
  },
  {
    id: 2,
    nameHungarian: "búza finomliszt",
    nameEnglish: "all-purpose flour",
    carbohydrateContent: 71,
    shouldCount: "yes",
    absorbedSlowly: false,
    foodGroup: "cereals",
    allergens: ["gluten", "wheat"],
  },
  {
    id: 3,
    nameHungarian: "só",
    nameEnglish: "salt",
    carbohydrateContent: 0,
    shouldCount: "no",
    absorbedSlowly: true,
    foodGroup: "no group",
    allergens: [],
  },
  {
    id: 4,
    nameHungarian: "élesztő",
    nameEnglish: "yeast",
    carbohydrateContent: 15,
    shouldCount: "no under 200g",
    absorbedSlowly: true,
    foodGroup: "fungi",
    allergens: [],
  },
  {
    id: 5,
    nameHungarian: "tejszín 20%-os",
    nameEnglish: "cream 20%",
    carbohydrateContent: 4,
    shouldCount: "no",
    absorbedSlowly: true,
    foodGroup: "milk",
    allergens: ["lactose", "milk protein"],
  },
  {
    id: 6,
    nameHungarian: "vaj",
    nameEnglish: "butter",
    carbohydrateContent: 0.5,
    shouldCount: "no",
    absorbedSlowly: true,
    foodGroup: "milk",
    allergens: ["lactose", "milk protein"],
  },
  {
    id: 7,
    nameHungarian: "víz",
    nameEnglish: "water",
    carbohydrateContent: 0,
    shouldCount: "no",
    absorbedSlowly: true,
    foodGroup: "no group",
    allergens: [],
  },
  {
    id: 8,
    nameHungarian: "barna rizsliszt",
    nameEnglish: "brown rice flour",
    carbohydrateContent: 31,
    shouldCount: "yes",
    absorbedSlowly: true,
    foodGroup: "cereals",
    allergens: [],
  },
  {
    id: 8,
    nameHungarian: "fekete bors",
    nameEnglish: "black pepper",
    carbohydrateContent: 38.7,
    shouldCount: "no under 200g",
    absorbedSlowly: true,
    foodGroup: "spices",
    allergens: [],
  },
  {
    id: 9,
    nameHungarian: "kókuszzsír",
    nameEnglish: "coconut oil",
    carbohydrateContent: 0,
    shouldCount: "no",
    absorbedSlowly: true,
    foodGroup: "eggs",
    allergens: ["egg"],
  },
  {
    id: 10,
    nameHungarian: "sztívia",
    nameEnglish: "stevia",
    carbohydrateContent: 0,
    shouldCount: "no",
    absorbedSlowly: true,
    foodGroup: "sweeteners",
    allergens: [],
  },
  {
    id: 11,
    nameHungarian: "mascarpone",
    nameEnglish: "mascarpone",
    carbohydrateContent: 0.7,
    shouldCount: "no",
    absorbedSlowly: true,
    foodGroup: "milk",
    allergens: ["lactose", "milk protein"],
  },
];
