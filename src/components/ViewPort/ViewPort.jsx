import { createContext, Fragment, useContext, useEffect } from "react";

import { AppContext } from "../Window";

export const LayerContext = createContext();

function ViewPort() {
	const { display } = useContext(AppContext);

	useEffect(() => {}, [display]);

	return (
		<div className="relative border viewport">
			{display.map((app) => {
				return <Fragment key={app.name}>{app.component}</Fragment>;
			})}
			<div className="bg-white h-60 w-60"></div>
		</div>
	);
}

export default ViewPort;
