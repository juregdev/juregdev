
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

const document = window.document.querySelector('html') as HTMLElement;

type ThemeProps = 'light' | 'dark';


interface ThemeContextProps {
  dataTheme: ThemeProps,
  handleThemeChange: (data: boolean) => void
}

const ThemeData = createContext<ThemeContextProps>({} as ThemeContextProps)

interface contextThemeProps {
  children: ReactNode
}

export function ContextTheme({ children }: contextThemeProps) {
  let theme = localStorage.getItem('filipebarrog:theme') as ThemeProps;
  const [dataTheme, setDataTheme] = useState<ThemeProps>(theme)


  function currentTheme(data: ThemeProps) {
    if (data === 'dark' || (!('filipebarrog:theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      localStorage.setItem('filipebarrog:theme', 'dark')
      setDataTheme('dark');
      document.classList.remove('light')
      document.classList.add('dark')
    } else {
      localStorage.setItem('filipebarrog:theme', 'light');
      setDataTheme('light');
      document.classList.remove('dark')
      document.classList.add('light')
    }
  }

  function handleThemeChange(data: boolean) {
    if (data) { setDataTheme('dark'); currentTheme('dark') } else { setDataTheme('light'); currentTheme('light') }
  }
  useEffect(() => {

    theme == 'dark' ? currentTheme('dark') : currentTheme('light')
  }, [])

  return (
    <ThemeData.Provider value={{ dataTheme, handleThemeChange }}>
      {children}
    </ThemeData.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeData)
}