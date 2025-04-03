export type Ingredient = {
  name: string;
  amount: string;
  unit: string;
  action?: string;
};

export type Preparation = {
  method: "build" | "stir" | "shake";
  icon: string;
};

export type Cocktail = {
  name: string;
  glass: string;
  preparation: Preparation;
  ingredients: Ingredient[];
  instructions: string[];
  garnish: string[];
};
