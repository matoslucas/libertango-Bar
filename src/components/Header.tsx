import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  isDark: boolean;
  onThemeToggle: () => void;
}

export function Header({ isDark, onThemeToggle }: HeaderProps) {
  return (
    <div className="flex justify-between items-center mb-8">
      <div className="text-center flex-1">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Cocktail Menu</h1>
        <p className="text-gray-600 dark:text-gray-300">Discover our handcrafted cocktail selection</p>
      </div>
      <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />
    </div>
  );
}
