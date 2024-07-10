import { useContext } from "react";
import { PathContext } from "./RootFolder";

export default function SideButton({ dir }) {
	const { setPath, path, setHistory, history, pointer, setPointer } =
		useContext(PathContext);

	return (
		<button
			onClick={() => {
				setPath(dir.path);

				setHistory([...history.slice(0, pointer + 1), dir.path]);

				setPointer(pointer + 1);
			}}
			className={`flex items-stretch gap-3 px-4 py-2 rounded-lg hover:bg-white/5 ${
				path === dir.path ? "bg-white/15" : ""
			}`}>
			{dir.icon}
			<span>{dir.name}</span>
		</button>
	);
}
