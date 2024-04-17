import cn from "shared/lib/classNames/classNames";
import styles from "./Sidebar.module.scss";
import { useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import LanguageSwitcher from "widgets/LanguageSwitcher";

interface SidebarProps {
	className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
	const [collapsed, setCollapsed] = useState(false);

	const onToggle = () => {
		setCollapsed((p) => !p);
	};

	return (
		<div className={cn(styles.sidebar, className, { [styles.collapsed]: collapsed })}>
			<button onClick={onToggle}>toggle</button>
			<div className={styles.switchers}>
				<ThemeSwitcher />
				<LanguageSwitcher />
			</div>
		</div>
	);
};
