import React, { useContext, lazy, Suspense} from "react";
import Loader from "./components/Loader";
import { ThemeContext } from "./components/ThemeContext";
import Nav from "./components/navigation/Nav";

const PopularBooks = lazy(() => import("./components/PopularBooks"));

function App() {
	const { theme, toggleTheme } = useContext(ThemeContext);

	return (
		<Suspense fallback={<Loader />}>
			<Nav theme={theme} toggleTheme={toggleTheme} />
			{/* <PopularBooks /> */}
        </Suspense>
	);
};

export default App;
