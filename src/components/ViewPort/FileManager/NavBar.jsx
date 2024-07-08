import {
	DesktopIcon,
	DotsVerticalIcon,
	SlashIcon,
} from "@radix-ui/react-icons";
import { useContext } from "react";
import { PathContext } from "./RootFolder";

export default function FolderNavBar() {
	const { path, setPath, setHistory, history, pointer, setPointer } =
		useContext(PathContext);

	return (
		<div className="flex items-center w-full gap-3 px-4 py-1 bg-white/15 max-w-[30rem] rounded-lg">
			<DesktopIcon className="" />
			<div className="flex items-center gap-1 font-bold">
				{path.map((p, i) => {
					if (i + 1 === path.length)
						return (
							<button
								key={p}
								className="px-2 py-1 rounded hover:bg-white/15"
								onClick={() => {
									const nextPath = path.slice(0, i + 1);

									setPath(nextPath);

									setHistory([
										...history.slice(0, pointer + 1),
										nextPath,
									]);
									setPointer(pointer + 1);
								}}
							>
								{p}
							</button>
						);
					return (
						<div key={p} className="flex items-center gap-1">
							<button
								className="px-2 py-1 rounded hover:bg-white/15"
								onClick={() => {
									const nextPath = path.slice(0, i + 1);

									setPath(nextPath);

									setHistory([
										...history.slice(0, pointer + 1),
										nextPath,
									]);
									setPointer(pointer + 1);
								}}
							>
								{p}
							</button>
							<SlashIcon className="size-4" />
						</div>
					);
				})}
			</div>
			<button className="flex items-center justify-center w-6 h-6 ml-auto rounded hover:bg-white/15">
				<DotsVerticalIcon />
			</button>
		</div>
	);
}
