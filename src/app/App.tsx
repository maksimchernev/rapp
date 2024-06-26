import cn from "shared/lib/classNames/classNames";
import "./styles/index.scss";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar";
import Sidebar from "widgets/Sidebar";
import { Suspense } from "react";

const App = (): JSX.Element => {
	const { theme } = useTheme();

	return (
		<div className={cn("app", theme)}>
			<Suspense fallback="">
				<Navbar />
				<div className="content-page">
					<Sidebar />
					<AppRouter />
				</div>
			</Suspense>
		</div>
	);
};

export default App;
