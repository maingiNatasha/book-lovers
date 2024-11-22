import React, { lazy, Suspense } from "react";
import { Routes, Route } from 'react-router-dom';
import Loader from "./components/loaders/Loader";
import classNames from "classnames";
import { SidebarProvider } from "./components/contexts/SidebarContext";
import { useTheme } from "./components/contexts/ThemeContext";

const Profile = lazy(() => import("./components/profile/Profile"));
const Home = lazy(() => import("./components/home/Home"));
const Categories = lazy(() => import("./components/categories/Categories"));
const Layout = lazy(() => import("./components/layouts/Layout"));

const App = () => {
	const { theme } = useTheme();

	const themeClasses = classNames(
		'min-h-screen',
		{
			'bg-gradient-to-r from-white via-purple-100 to-purple-200': theme === 'light',
            'bg-gradient-to-r from-[#160121] to-black text-white': theme === 'dark'
		}
	);

	return (
		<div className={themeClasses}>
			<SidebarProvider>
				<Suspense fallback={<Loader />}>
					<div>
						<Routes>
							{/* Parent route */}
							<Route path="/" element={<Layout />}>
								{/* Child routes */}
								<Route index element={<Home />} />
								<Route path="profile" element={<Profile />} />
								<Route path="categories" element={<Categories />} />
							</Route>
						</Routes>
					</div>
				</Suspense>
			</SidebarProvider>
		</div>
	);
};

export default App;
