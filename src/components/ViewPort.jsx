import { createContext, Fragment, useContext, useRef } from "react";

import { AppContext } from "./Window";

import { handleDrag, startDragging, stopDragging } from "../utils/dragHelpers";
import Recents from "./Recents";

export const DragContext = createContext();

function ViewPort() {
	const { display, mode, minimized } = useContext(AppContext);
	const containerRef = useRef(null);

	const drag = (e, dragRef, position, setPosition) => {
		startDragging(
			e,
			dragRef,
			position,
			setPosition,
			containerRef,
			stopDragging,
			handleDrag
		);
	};

	return (
		<div ref={containerRef} className="relative viewport">
			{mode === "Recent" ? (
				<Recents drag={drag} />
			) : (
				display.map((App) => {
					if (!minimized.includes(App.name))
						return (
							<Fragment key={App.name}>
								<App.component drag={drag} />
							</Fragment>
						);
				})
			)}
		</div>
	);
}

export default ViewPort;
