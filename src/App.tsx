import React, { useState, useEffect } from 'react';
import { cocktails } from './data';
import { CocktailCard } from './components/CocktailCard';
import { SearchBar } from './components/SearchBar';
import { Header } from './components/Header';

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
        <Header isDark={isDark} onThemeToggle={() => setIsDark(!isDark)} />
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
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