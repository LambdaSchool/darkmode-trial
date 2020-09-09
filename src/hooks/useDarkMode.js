import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (isDarkMode) => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", isDarkMode);

  return [darkMode, setDarkMode];
};
