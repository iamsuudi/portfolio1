import { useState, useRef } from "react";

export default function DraggableComponent({ drag }) {
	const [position, setPosition] = useState({ top: 0, left: 0 });
	const dragRef = useRef(null);

	return (
		<div
			className="absolute bg-red-300 border border-gray-400"
			style={{
				top: position.top,
				left: position.left,
				width: "60rem",
				height: "45rem",
			}}>
			<div
				className="p-2 text-white bg-blue-500 cursor-move"
				style={{ height: "5rem" }}
				onMouseDown={(e) => {
					drag(e, dragRef, position, setPosition);
				}}>
				Header (Drag me)
			</div>

			<div className="p-4" style={{ height: "40rem" }}>
				Body
			</div>
		</div>
	);
}
