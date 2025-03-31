export const cocktails = [
  {
    name: "El Cayman",
    glass: "Moscow mule glass",
    ingredients: [
      { name: "Mint leaves", amount: "5", unit: "leaves", action: "muddled" },
      { name: "Lime juice", amount: "1.0", unit: "oz" },
      { name: "Simple syrup", amount: "0.5", unit: "oz" },
      { name: "Ginger beer", amount: "", unit: "", action: "top off" },
      { name: "Sprite", amount: "", unit: "", action: "top off" }
    ],
    instructions: [
      "Muddle mint leaves in glass",
      "Add lime juice and simple syrup",
      "Fill with ice",
      "Top off with ginger beer and Sprite"
    ],
    garnish: ["Mint sprig", "Dehydrated lime wheel"]
  },
  {
    name: "El Condor",
    glass: "Big rock glass",
    ingredients: [
      { name: "Blackberries", amount: "2-4", unit: "" },
      { name: "Raspberry", amount: "", unit: "dash" },
      { name: "Rhubarb bitters", amount: "1", unit: "dash" },
      { name: "Lime juice", amount: "1.0", unit: "oz" },
      { name: "Grapefruit juice", amount: "1.0", unit: "oz" },
      { name: "Simple syrup", amount: "0.5", unit: "oz" },
      { name: "Sprite", amount: "", unit: "", action: "top off" }
    ],
    instructions: [
      "Muddle blackberries and raspberry",
      "Add lime juice, grapefruit juice, and simple syrup",
      "Shake and double strain",
      "Add pebble ice",
      "Top with Sprite"
    ],
    garnish: ["Rosemary sprig (swished in glass)"]
  },
  {
    name: "El Puma",
    glass: "Big rock glass",
    ingredients: [
      { name: "Passion fruit", amount: "2.0", unit: "oz" },
      { name: "Coconut syrup", amount: "1.0", unit: "oz" },
      { name: "Lime juice", amount: "1.0", unit: "oz" },
      { name: "Strawberry purée", amount: "0.5", unit: "oz" },
      { name: "Grenadine", amount: "0.5", unit: "oz" },
      { name: "Soda water", amount: "", unit: "", action: "top off" }
    ],
    instructions: [
      "Combine all ingredients in shaker",
      "Pour into glass with dirty ice",
      "Top off with soda water"
    ],
    garnish: ["Dehydrated orange on rim"]
  },
  {
    name: "Caipirinha",
    glass: "Big rock glass",
    ingredients: [
      { name: "Lime wedges", amount: "4", unit: "", action: "muddled" },
      { name: "Simple syrup", amount: "1.0", unit: "oz" },
      { name: "Cachaca", amount: "1.5", unit: "oz" },
      { name: "Flavor syrup", amount: "1.5", unit: "oz" },
      { name: "Soda water", amount: "", unit: "", action: "top off" }
    ],
    instructions: [
      "Muddle lime wedges in glass",
      "Add simple syrup, cachaca, and flavor syrup",
      "Top off with soda water"
    ],
    garnish: ["Dehydrated lime"]
  },
  {
    name: "Carajillo",
    glass: "Big rock glass",
    ingredients: [
      { name: "Licor 43", amount: "2.0", unit: "oz" },
      { name: "Espresso", amount: "2.0", unit: "oz" }
    ],
    instructions: [
      "Shake ingredients with shaking rock",
      "Add shaking rock into glass",
      "Strain cocktail into glass"
    ],
    garnish: ["Orange zest"]
  },
  {
    name: "Asadero en fuego",
    glass: "",
    ingredients: [
      { name: "Porter's rye whiskey", amount: "1.5", unit: "oz" },
      { name: "Sugar cube", amount: "1", unit: "" },
      { name: "Angostura bitters", amount: "3", unit: "dashes" },
      { name: "Luxardo cherry", amount: "1", unit: "" },
      { name: "Water", amount: "1", unit: "splash" }
    ],
    instructions: [
      "Combine all ingredients in glass",
      "Stir gently"
    ],
    garnish: []
  },
  {
    name: "Sangria Sin Alcohol",
    glass: "Pint glass",
    ingredients: [
      { name: "Fruit salad", amount: "4.0", unit: "oz" },
      { name: "Simple syrup", amount: "1.0", unit: "oz" },
      { name: "Sprite", amount: "", unit: "", action: "top off" }
    ],
    instructions: [
      "Add fruit salad and ice to glass",
      "Pour simple syrup",
      "Top off with Sprite"
    ],
    garnish: []
  },
  {
    name: "Pica piña",
    glass: "Hurricane glass",
    ingredients: [
      { name: "Apple juice", amount: "3.0", unit: "oz" },
      { name: "Pineapple juice", amount: "2.0", unit: "oz" },
      { name: "Lemon juice", amount: "1.0", unit: "oz" },
      { name: "Simple syrup", amount: "1.0", unit: "oz" },
      { name: "Chamoy", amount: "1", unit: "spoonful" }
    ],
    instructions: [
      "Combine all ingredients in glass",
      "Stir well"
    ],
    garnish: ["Tajin rim", "Regular straw"]
  },
  {
    name: "Campari Spritz",
    glass: "Wine glass",
    ingredients: [
      { name: "Campari", amount: "1.5", unit: "oz" },
      { name: "Orange juice", amount: "1.5", unit: "oz" },
      { name: "Prosecco", amount: "4.0", unit: "oz" }
    ],
    instructions: [
      "Build in glass over ice",
      "Stir gently"
    ],
    garnish: ["Dehydrated orange"]
  },
  {
    name: "The OG",
    glass: "Big rock glass",
    ingredients: [
      { name: "Lime wedges", amount: "4", unit: "", action: "muddled" },
      { name: "Blackberries", amount: "2-4", unit: "" },
      { name: "Raspberries", amount: "", unit: "" },
      { name: "Simple syrup", amount: "1.0", unit: "oz" },
      { name: "Cachaca", amount: "1.5", unit: "oz" },
      { name: "Soda water", amount: "", unit: "", action: "top off" }
    ],
    instructions: [
      "Muddle lime wedges and berries",
      "Add simple syrup and cachaca",
      "Top off with soda water"
    ],
    garnish: ["Dehydrated lime"]
  },
  {
    name: "Los Andes",
    glass: "Small rock glass",
    ingredients: [
      { name: "Amaretto Disaromo", amount: "0.75", unit: "oz" },
      { name: "Porter's rye whiskey", amount: "1.5", unit: "oz" },
      { name: "Egg white", amount: "1", unit: "" },
      { name: "Lemon juice", amount: "1.0", unit: "oz" },
      { name: "Simple syrup", amount: "1.0", unit: "oz" },
      { name: "Orange juice", amount: "", unit: "squirt" }
    ],
    instructions: [
      "Dry shake all ingredients (without ice)",
      "Add ice and shake again",
      "Strain into glass"
    ],
    garnish: [
      "Luxardo cherry",
      "Angostura aromatic bitters in line",
      "Lime dust"
    ]
  },
  {
    name: "Margarita al Humo",
    glass: "Small rock glass",
    ingredients: [
      { name: "Lunazul blanco", amount: "1.5", unit: "oz" },
      { name: "Bozal mezcal", amount: "0.5", unit: "oz" },
      { name: "Montezuma triple sec", amount: "0.5", unit: "oz" },
      { name: "Lime juice", amount: "0.5", unit: "oz" },
      { name: "Lemon juice", amount: "0.5", unit: "oz" },
      { name: "Honey syrup", amount: "1.0", unit: "oz" }
    ],
    instructions: [
      "Rim glass with black salt",
      "Shake all ingredients with ice",
      "Strain into prepared glass"
    ],
    garnish: ["Black salt rim", "Dehydrated lime"]
  },
  {
    name: "Margarita Elevada",
    glass: "Small rock glass",
    ingredients: [
      { name: "Lunazul reposado", amount: "1.5", unit: "oz" },
      { name: "Cointreau", amount: "1.0", unit: "oz" },
      { name: "Lemon juice", amount: "0.5", unit: "oz" },
      { name: "Lime juice", amount: "0.5", unit: "oz" },
      { name: "Honey syrup", amount: "1.0", unit: "oz" }
    ],
    instructions: [
      "Rim glass with mixed salt",
      "Shake all ingredients with ice",
      "Strain into prepared glass"
    ],
    garnish: ["Mixed salt rim", "Dehydrated orange"]
  },
  {
    name: "Sangria de mama",
    glass: "Pint glass",
    ingredients: [
      { name: "Fruit salad", amount: "4.0", unit: "oz" },
      { name: "Bacardi", amount: "1.0", unit: "oz" },
      { name: "Simple syrup", amount: "1.0", unit: "oz" },
      { name: "Paisano red wine", amount: "2.5", unit: "oz" },
      { name: "Sprite", amount: "", unit: "", action: "top off" }
    ],
    instructions: [
      "Combine fruit salad, Bacardi, simple syrup, and wine in glass",
      "Add ice",
      "Top off with Sprite"
    ],
    garnish: ["Fruit skewer"]
  },
  {
    name: "Un Manhattan",
    glass: "Coupe glass",
    ingredients: [
      { name: "Elijah Craig Bourbon", amount: "1.5", unit: "oz" },
      { name: "Sweet Vermouth", amount: "0.5", unit: "oz" },
      { name: "Angostura aromatic bitters", amount: "2", unit: "dashes" }
    ],
    instructions: [
      "Stir all ingredients with ice until chilled",
      "Strain into glass"
    ],
    garnish: ["Luxardo cherry on skewer"]
  },
  {
    name: "La Copa",
    glass: "Small rock glass",
    ingredients: [
      { name: "Pisco reservado", amount: "1.5", unit: "oz" },
      { name: "Lime juice", amount: "0.5", unit: "oz" },
      { name: "Lemon juice", amount: "0.5", unit: "oz" },
      { name: "Simple syrup", amount: "1.0", unit: "oz" },
      { name: "Egg white", amount: "1", unit: "" }
    ],
    instructions: [
      "Dry shake all ingredients (without ice)",
      "Add ice and shake again",
      "Strain into glass"
    ],
    garnish: [
      "Dehydrated lime",
      "Angostura aromatic bitters around lime",
      "Lime dust"
    ]
  }
];