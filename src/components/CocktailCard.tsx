import { useState } from 'react';
import { GlassWater, ChevronDown } from 'lucide-react';

type Ingredient = {
  name: string;
  amount: string;
  unit: string;
  action?: string;
};

type Preparation = {
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

interface CocktailCardProps {
  cocktail: Cocktail;
}

export function CocktailCard({ cocktail }: CocktailCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [checkedIngredients, setCheckedIngredients] = useState<Set<number>>(new Set());

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded) {
      setCheckedIngredients(new Set()); // Clear all checked ingredients when expanding
    }
  };

  const toggleIngredient = (index: number) => {
    const newChecked = new Set(checkedIngredients);
    if (newChecked.has(index)) {
      newChecked.delete(index);
    } else {
      newChecked.add(index);
    }
    setCheckedIngredients(newChecked);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <div 
        className="p-6 cursor-pointer"
        onClick={handleExpand}
      >
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {cocktail.name} <span className="ml-2">{cocktail.preparation.icon}</span>
          </h3>
          <ChevronDown 
            className={`w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform ${isExpanded ? 'transform rotate-180' : ''}`}
          />
        </div>
        {cocktail.glass && (
          <div className="flex items-center mt-2 text-gray-600 dark:text-gray-300">
            <GlassWater className="w-4 h-4 mr-2" />
            <span className="text-md">{cocktail.glass}</span>
          </div>
        )}
      </div>

      {isExpanded && (
        <div className="px-6 pb-6">
          <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
            <h4 className="font-medium text-gray-900 dark:text-white mb-2">Ingredients</h4>
            <ul className="space-y-1">
              {cocktail.ingredients.map((ingredient, index) => (
                <li key={index} className="text-gray-600 dark:text-gray-300 text-xl flex items-center gap-2">
                  <label className="flex items-center gap-2 w-full cursor-pointer">
                    <input
                      type="checkbox"
                      id={`ingredient-${index}`}
                      checked={checkedIngredients.has(index)}
                      onChange={() => toggleIngredient(index)}
                      onClick={(e) => e.stopPropagation()}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <span>
                      <i><b>{ingredient.amount && `${ingredient.amount} `}</b></i>
                      {`${ingredient.unit} `}
                      {ingredient.name}
                      {ingredient.action && ` (${ingredient.action})`}
                    </span>
                  </label>
                </li>
              ))}
            </ul>

            <h4 className="font-medium text-gray-900 dark:text-white mt-4 mb-2">Instructions</h4>
            <ol className="list-decimal list-inside space-y-1">
              {cocktail.instructions.map((step, index) => (
                <li key={index} className="text-gray-600 dark:text-gray-300 text-xl">{step}</li>
              ))}
            </ol>

            {cocktail.garnish.length > 0 && (
              <>
                <h4 className="font-medium text-gray-900 dark:text-white mt-4 mb-2">Garnish</h4>
                <ul className="space-y-1">
                  {cocktail.garnish.map((item, index) => (
                    <li key={index} className="text-gray-600 dark:text-gray-300 text-xl">{item}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
