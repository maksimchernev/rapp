import { classNames } from "shared/lib/classNames/classNames";
import styles from "./ThemeSwitcher.module.scss";
import { useTheme } from "app/providers/ThemeProvider";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { toggleTheme } = useTheme();

  return (
    <button className={classNames(styles.themeSwitcher, {}, [className])} onClick={toggleTheme}>
      TOGGLE
    </button>
  );
};
