import { useContext } from "react";
import { AppContext } from "../Window";

export default function Draggable({ name, size, position, children }) {
	const { layer, setLayer } = useContext(AppContext);

	return (
		<div
			style={{
				width: size.width,
				height: size.height,
				maxWidth: "100%",
				maxHeight: "100%",
				position: "absolute",
				top: position.top,
				left: position.left,
				zIndex: layer.indexOf(name),
			}}
			onClick={() => {
				const previousIndex = layer.indexOf(name);
				if (previousIndex + 1 !== layer.length)
					setLayer([
						...layer.slice(0, previousIndex),
						...layer.slice(previousIndex + 1),
						name,
					]);
			}}>
			{children}
		</div>
	);
}
