import { useContext } from "react";
import { PathContext } from "./RootFolder";

export default function SideButton({ dir }) {
	const { setPath } = useContext(PathContext);

	return (
		<button
			onClick={() => setPath(dir.path)}
			className="flex items-stretch gap-3 px-4 py-2 rounded-lg hover:bg-white/15"
		>
			{dir.icon}
			<span>{dir.name}</span>
		</button>
	);
}
