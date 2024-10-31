import React, { useContext, lazy, Suspense} from "react";
import { Routes, Route } from 'react-router-dom';
import Loader from "./components/Loader";
import { ThemeContext } from "./components/ThemeContext";
import classNames from "classnames";

const Profile = lazy(() => import("./components/profile/Profile"));
const Home = lazy(() => import("./components/home/Home"));
const Categories = lazy(() => import("./components/categories/Categories"));
const Layout = lazy(() => import("./components/Layout"));

function App() {
	const { theme, toggleTheme } = useContext(ThemeContext);
	const themeClasses = classNames(
		'min-h-screen',
		{
			'bg-gradient-to-r from-white via-purple-100 to-purple-200': theme === 'light',
            'bg-gradient-to-r from-[#160121] to-black text-white': theme === 'dark'
		}
	);

	return (
		<div className={themeClasses}>
			<Suspense fallback={<Loader />}>
				<div>
					<Routes>
						{/* Parent route */}
					    <Route path="/" element={<Layout theme={theme} toggleTheme={toggleTheme}  />}>
							{/* Child routes */}
							<Route index element={<Home />} />
							<Route path="profile" element={<Profile />} />
							<Route path="categories" element={<Categories />} />
						</Route>
                    </Routes>
				</div>
			</Suspense>
		</div>
	);
};

export default App;
