import { createContext, Fragment, useContext, useRef } from "react";

import { AppContext } from "../Window";

import {
	handleDrag,
	startDragging,
	stopDragging,
} from "../../utils/dragHelpers";

export const DragContext = createContext();

function ViewPort() {
	const { display } = useContext(AppContext);
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
			{display.map((App) => {
				return (
					<Fragment key={App.name}>
						<App.component drag={drag} />
					</Fragment>
				);
			})}
			{/* <DraggableComponent drag={drag} /> */}
		</div>
	);
}

export default ViewPort;
