'use client';
import { useEffect, useState } from 'react';

export default function ThemeToggleButton() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;

    // Verifica se o tema já está salvo no localStorage
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
      // Aplica o tema salvo
      const isDark = savedTheme === 'dark';
      root.classList.toggle('dark', isDark);
      setIsDarkMode(isDark);
    } else {
      // Aplica o tema com base na preferência do sistema
      const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.classList.toggle('dark', isSystemDark);
      setIsDarkMode(isSystemDark);
    }
  }, []);

  function toggleTheme() {
    const root = window.document.documentElement;
    const newTheme = isDarkMode ? 'light' : 'dark';
    root.classList.toggle('dark', !isDarkMode);
    localStorage.setItem('theme', newTheme);
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div className="mt-10 text-center">
      <label className="inline-flex items-center mb-5 cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={isDarkMode}
          onChange={toggleTheme}
        />
        <div className="relative w-11 h-6 rounded-full peer peer-checked:bg-gray-700 bg-zinc-400 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600"></div>
        <span className="ms-3 text-sm font-medium text-slate-600 dark:text-slate-300 duration-300">
          {isDarkMode ? 'Tema Escuro' : 'Tema Escuro'}
        </span>
      </label>
    </div>
  );
}
