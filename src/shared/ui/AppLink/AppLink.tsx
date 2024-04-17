import cn from "shared/lib/classNames/classNames";
import cls from "./AppLink.module.scss";
import { Link, type LinkProps } from "react-router-dom";
import { type FC } from "react";

export enum AppLinkTheme {
	PRIMARY = "primary",
	SECONDARY = "secondary",
	RED = "red",
}

interface AppLinkProps extends LinkProps {
	className?: string;
	theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
	const { to, className, children, theme = AppLinkTheme.PRIMARY, ...other } = props;

	return (
		<Link to={to} className={cn(cls.AppLink, cls[theme], className)} {...other}>
			{children}
		</Link>
	);
};
