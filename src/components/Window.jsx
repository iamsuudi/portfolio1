import { createContext } from "react";
import HeaderBar from "./Heading/Heading";
import SideBar from "./Sidebar/SideBar";
import ViewPort from "./ViewPort/ViewPort";
import { useState } from "react";

export const AppContext = createContext();

/* eslint react/prop-types: 0 */
export default function Window() {
	const [display, setDisplay] = useState([]);
	const [layer, setLayer] = useState([]);
	const [pdf, setPdf] = useState();
	const [mode, setMode] = useState();

	const value = {
		display,
		setDisplay,
		layer,
		setLayer,
		pdf,
		setPdf,
		mode,
		setMode,
	};

	return (
		<AppContext.Provider value={value}>
			<div
				style={{ backgroundImage: "url('242478.jpg')" }}
				id="window"
				className="w-[100dvw] h-[100dvh] relative flex flex-col">
				<HeaderBar />
				<div className="flex w-full h-full">
					<ViewPort />
					<SideBar />
				</div>
			</div>
		</AppContext.Provider>
	);
}
