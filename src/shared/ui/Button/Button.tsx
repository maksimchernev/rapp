import cn from "shared/lib/classNames/classNames";
import styles from "./Button.module.scss";
import { type ButtonHTMLAttributes, type FC } from "react";

export enum ThemeButton {
	CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
	const { className, children, theme, ...other } = props;

	return (
		<button className={cn(styles.button, styles[theme])} {...other}>
			{children}
		</button>
	);
};
