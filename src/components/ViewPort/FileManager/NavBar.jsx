import {
	ChevronLeftIcon,
	ChevronRightIcon,
	Cross1Icon,
	DesktopIcon,
	DotsVerticalIcon,
	MinusIcon,
	SlashIcon,
	StopIcon,
} from "@radix-ui/react-icons";
import { useContext } from "react";
import { PathContext } from "./RootFolder";
import { Fragment } from "react";
import { AppContext } from "../../Window";
import positioner from "../../../utils/positioner";

function FolderNavButton({ name, index }) {
	const { path, setPath, setHistory, history, pointer, setPointer } =
		useContext(PathContext);

	const changePath = (e) => {
		e.preventDefault();

		const nextPath = path.slice(0, index + 1);

		setPath(nextPath);

		setHistory([...history.slice(0, pointer + 1), nextPath]);
		setPointer(pointer + 1);
	};

	return (
		<button
			key={name}
			className="px-2 py-1 rounded hover:bg-white/15"
			onClick={changePath}>
			{name}
		</button>
	);
}

export default function FolderNavBar({
	handleDrag,
	size,
	setSize,
	setPosition,
}) {
	const { path, setPath, history, pointer, setPointer } =
		useContext(PathContext);
	const { layer, setLayer, display, setDisplay } = useContext(AppContext);

	return (
		<div
			className="flex w-full gap-5 px-4 py-3 hover:cursor-grabbing"
			onMouseDown={handleDrag}>
			{/* History Tracer */}
			<div className="flex gap-2">
				<button
					className={`p-2 rounded-md ${
						pointer > 0 && "hover:bg-white/15"
					}`}
					disabled={pointer === 0}
					onClick={() => {
						console.log("back");
						setPath(history[pointer - 1]);
						setPointer(pointer - 1);
						// setHistory(history.concat(history[pointer - 1]));
					}}>
					<ChevronLeftIcon />
				</button>
				<button
					className={`p-2 rounded-md ${
						pointer + 1 < history.length && "hover:bg-white/15"
					}`}
					disabled={pointer + 1 === history.length}
					onClick={() => {
						console.log("forward");
						setPath(history[pointer + 1]);
						setPointer(pointer + 1);
						// setHistory(history.concat(history[pointer + 1]));
					}}>
					<ChevronRightIcon />
				</button>
			</div>

			{/* Middle Nav */}
			<div className="flex items-center w-full gap-3 px-4 py-1 bg-white/15 max-w-[30rem] rounded-lg">
				<DesktopIcon className="" />
				<div className="flex items-center gap-1 font-bold">
					{path.map((p, i) => {
						if (i + 1 === path.length)
							return (
								<FolderNavButton key={p} name={p} index={i} />
							);
						return (
							<Fragment key={p}>
								<FolderNavButton name={p} index={i} />
								<SlashIcon className="size-4" />
							</Fragment>
						);
					})}
				</div>
				<button className="flex items-center justify-center w-6 h-6 ml-auto rounded hover:bg-white/15">
					<DotsVerticalIcon />
				</button>
			</div>

			{/* Resizing / Closing */}
			<div className="flex items-center gap-3 ml-auto">
				<button
					className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 hover:bg-white/25"
					onClick={() => {
						const previousIndex = layer.indexOf("FileManager");
						setLayer([
							"FileManager",
							...layer.slice(0, previousIndex),
							...layer.slice(previousIndex + 1),
						]);
					}}>
					<MinusIcon className="size-[10px] stroke-white" />
				</button>

				{/* Resize button */}
				<button
					className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 hover:bg-white/25"
					onClick={() => {
						const { width, height } = size;
						if (width === height && height === "100%") {
							console.log("reset size");
							setSize({
								width: "60rem",
								height: "40rem",
							});
							setPosition(positioner());
						} else {
							console.log("maximize size");
							setSize({
								width: "100%",
								height: "100%",
							});
							setPosition({ top: 0, left: 0 });
						}
					}}>
					<StopIcon className="size-[10px] stroke-white" />
				</button>

				{/* Exit button */}
				<button
					className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 hover:bg-white/25"
					onClick={() => {
						setDisplay(
							display.filter((app) => app.name !== "FileManager")
						);
						setLayer(layer.slice(0, layer.length - 1));
					}}>
					<Cross1Icon className="size-[10px] stroke-white" />
				</button>
			</div>
		</div>
	);
}
