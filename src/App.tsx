import React, { useState, useEffect } from 'react';
import { Search, GlassWater, ChevronDown, Sun, Moon } from 'lucide-react';
import { cocktails } from './data';

type Cocktail = {
  name: string;
  glass: string;
  ingredients: {
    name: string;
    amount: string;
    unit: string;
    action?: string;
  }[];
  instructions: string[];
  garnish: string[];
};

function CocktailCard({ cocktail }: { cocktail: Cocktail }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <div 
        className="p-6 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{cocktail.name}</h3>
          <ChevronDown 
            className={`w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform ${isExpanded ? 'transform rotate-180' : ''}`}
          />
        </div>
        {cocktail.glass && (
          <div className="flex items-center mt-2 text-gray-600 dark:text-gray-300">
            <GlassWater className="w-4 h-4 mr-2" />
            <span className="text-sm">{cocktail.glass}</span>
          </div>
        )}
      </div>

      {isExpanded && (
        <div className="px-6 pb-6">
          <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
            <h4 className="font-medium text-gray-900 dark:text-white mb-2">Ingredients</h4>
            <ul className="space-y-1">
              {cocktail.ingredients.map((ingredient, index) => (
                <li key={index} className="text-gray-600 dark:text-gray-300 text-sm">
                  {ingredient.amount && `${ingredient.amount} ${ingredient.unit} `}
                  {ingredient.name}
                  {ingredient.action && ` (${ingredient.action})`}
                </li>
              ))}
            </ul>

            <h4 className="font-medium text-gray-900 dark:text-white mt-4 mb-2">Instructions</h4>
            <ol className="list-decimal list-inside space-y-1">
              {cocktail.instructions.map((step, index) => (
                <li key={index} className="text-gray-600 dark:text-gray-300 text-sm">{step}</li>
              ))}
            </ol>

            {cocktail.garnish.length > 0 && (
              <>
                <h4 className="font-medium text-gray-900 dark:text-white mt-4 mb-2">Garnish</h4>
                <ul className="space-y-1">
                  {cocktail.garnish.map((item, index) => (
                    <li key={index} className="text-gray-600 dark:text-gray-300 text-sm">{item}</li>
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

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add('dark');
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const filteredCocktails = cocktails.filter(cocktail =>
    cocktail.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div className="text-center flex-1">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Cocktail Menu</h1>
            <p className="text-gray-600 dark:text-gray-300">Discover our handcrafted cocktail selection</p>
          </div>
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>

        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
          <input
            type="text"
            placeholder="Search cocktails..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid gap-4">
          {filteredCocktails.map((cocktail, index) => (
            <CocktailCard key={index} cocktail={cocktail} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;