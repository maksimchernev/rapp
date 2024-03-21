import cn from "shared/lib/classNames/classNames";
import styles from "./LanguageSwitcher.module.scss";
import Button from "shared/ui/Button";
import { ThemeButton } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";

interface ThemeSwitcherProps {
  className?: string;
}

export const LanguageSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { t, i18n } = useTranslation();

  return (
    <Button theme={ThemeButton.CLEAR} className={cn(styles.themeSwitcher, className)} onClick={() => i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru")}>
      {t("Язык")}
    </Button>
  );
};
