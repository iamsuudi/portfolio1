import { createContext, Fragment, useContext, useEffect } from "react";

import { AppContext } from "../Window";

export const LayerContext = createContext();

function ViewPort() {
	const { display } = useContext(AppContext);

	useEffect(() => {}, [display]);

	return (
		<div className="relative viewport">
			{display.map((app) => {
				return <Fragment key={app.name}>{app.component}</Fragment>;
			})}
		</div>
	);
}

export default ViewPort;
