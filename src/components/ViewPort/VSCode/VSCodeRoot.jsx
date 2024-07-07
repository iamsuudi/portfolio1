import { Avatar, Separator } from "@radix-ui/themes";
import { useContext } from "react";
import { useState } from "react";
import { AppContext } from "../../Window";
import {
	BellIcon,
	CaretRightIcon,
	CheckIcon,
	CodeIcon,
	Cross1Icon,
	CrossCircledIcon,
	CubeIcon,
	DesktopIcon,
	DotsHorizontalIcon,
	ExclamationTriangleIcon,
	FileIcon,
	GearIcon,
	LightningBoltIcon,
	MagnifyingGlassIcon,
	MinusIcon,
	MixerVerticalIcon,
	PersonIcon,
	PlayIcon,
	RocketIcon,
	StopIcon,
} from "@radix-ui/react-icons";

export default function VSCodeRoot() {
	const [size, setSize] = useState({ width: "60rem", height: "40rem" });
	const { layer, setLayer, display, setDisplay } = useContext(AppContext);

	return (
		<div
			style={{
				width: size.width,
				height: size.height,
				maxWidth: "100%",
				maxHeight: "100%",
				position: "absolute",
				zIndex: layer.indexOf("VSCode"),
			}}
			className={`flex flex-col bg-black/60 backdrop-blur-md rounded-t-xl text-sm`}>
			<header className="flex items-center w-full p-2 h-fit backdrop-blur-sm">
				<Avatar src="vscode.png" className="size-5" />

				<p className="ml-auto font-bold">Visual Studio Code</p>

				{/* Resizing / Closing */}
				<div className="flex items-center gap-3 ml-auto">
					<button
						className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 hover:bg-white/25"
						onClick={() => {
							const previousIndex = layer.indexOf("VSCode");
							setLayer([
								"VSCode",
								...layer.slice(0, previousIndex),
								...layer.slice(previousIndex + 1),
							]);
						}}>
						<MinusIcon className="size-[10px] stroke-white" />
					</button>
					<button
						className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 hover:bg-white/25"
						onClick={() => {
							const { width, height } = size;
							if (width === height && height === "100%") {
								// console.log("reset size");
								setSize({
									width: "60rem",
									height: "40rem",
								});
							} else {
								// console.log("maximize size");
								setSize({
									width: "100%",
									height: "100%",
								});
							}
						}}>
						<StopIcon className="size-[10px] stroke-white" />
					</button>
					<button
						className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 hover:bg-white/25"
						onClick={() => {
							setDisplay(
								display.filter((app) => app.name !== "VSCode")
							);
							setLayer(layer.slice(0, layer.length - 1));
						}}>
						<Cross1Icon className="size-[10px] stroke-white" />
					</button>
				</div>
			</header>

			{/* <Separator orientation={"horizontal"} size={"4"} /> */}

			<aside className="flex w-full gap-3 px-2 py-1">
				<span className="hover:cursor-pointer text-white/80 hover:text-white">
					File
				</span>
				<span className="hover:cursor-pointer text-white/80 hover:text-white">
					Edit
				</span>
				<span className="hover:cursor-pointer text-white/80 hover:text-white">
					Selection
				</span>
				<span className="hover:cursor-pointer text-white/80 hover:text-white">
					View
				</span>
				<span className="hover:cursor-pointer text-white/80 hover:text-white">
					Go
				</span>
				<span className="hover:cursor-pointer text-white/80 hover:text-white">
					Run
				</span>
				<span className="hover:cursor-pointer text-white/80 hover:text-white">
					Terminal
				</span>
				<span className="hover:cursor-pointer text-white/80 hover:text-white">
					Help
				</span>
			</aside>

			<Separator orientation={"horizontal"} size={"4"} />

			<div className="flex w-full h-full">
				<div className="w-full h-full"></div>
				<Separator orientation={"vertical"} size={"4"} />
				<div className="h-full w-80">
					<div className="flex items-start justify-between h-full">
						<div className="flex flex-col w-full gap-5 py-2">
							<div className="flex items-center justify-between px-4">
								<p>Explorer</p>
								<button className="flex items-center justify-center w-6 h-5 rounded-md hover:bg-white/15">
									<DotsHorizontalIcon />
								</button>
							</div>
							<div className="flex flex-col gap-2 text-xs">
								<button className="flex font-bold">
									<CaretRightIcon />
									<span>PORTFOLIO</span>
								</button>
								<button className="flex font-bold">
									<CaretRightIcon />
									<span>OUTLINE</span>
								</button>
								<button className="flex font-bold">
									<CaretRightIcon />
									<span>TIMELINE</span>
								</button>
							</div>
						</div>
						<div className="flex justify-start h-full">
							<Separator orientation={"vertical"} size={"4"} />
							<aside className="flex flex-col gap-6 px-3 py-5">
								<FileIcon className="size-5 hover:cursor-pointer stroke-white/5 hover:stroke-white/50" />
								<MagnifyingGlassIcon className="size-5 hover:cursor-pointer stroke-white/5 hover:stroke-white/50" />
								<MixerVerticalIcon className="size-5 hover:cursor-pointer stroke-white/5 hover:stroke-white/50" />
								<PlayIcon className="size-5 hover:cursor-pointer stroke-white/5 hover:stroke-white/50" />
								<CubeIcon className="size-5 hover:cursor-pointer stroke-white/5 hover:stroke-white/50" />
								<LightningBoltIcon className="size-5 hover:cursor-pointer stroke-white/5 hover:stroke-white/50" />

								<PersonIcon className="mt-auto size-5 hover:cursor-pointer stroke-white/5 hover:stroke-white/50" />
								<GearIcon className="size-5 hover:cursor-pointer stroke-white/5 hover:stroke-white/50" />
							</aside>
						</div>
					</div>
				</div>
			</div>

			<Separator orientation={"horizontal"} size={"4"} />

			<aside className="flex items-stretch gap-2">
				<button className="p-1" style={{ background: "#0078b9" }}>
					<DesktopIcon className=" size-3 hover:stroke-white/50" />
				</button>
				<button className="flex items-center gap-1 px-2 hover:bg-white/15">
					<RocketIcon className="size-3" />
					<span className="text-xs">LaunchPad</span>
				</button>
				<button className="flex items-center gap-1 px-2 hover:bg-white/15">
					<CrossCircledIcon className="size-3" />
					<span className="text-xs">0</span>
				</button>
				<button className="flex items-center gap-1 px-2 hover:bg-white/15">
					<ExclamationTriangleIcon className="size-3" />
					<span className="text-xs">0</span>
				</button>

				<button className="flex items-center gap-1 px-2 ml-auto hover:bg-white/15">
					<CodeIcon className="size-3" />
					<span className="text-xs">Typescript</span>
				</button>
				<button className="flex items-center gap-1 px-2 hover:bg-white/15">
					<CheckIcon className="size-3" />
					<span className="text-xs">Prettier</span>
				</button>
				<button className="flex items-center gap-1 px-2 hover:bg-white/15">
					<BellIcon className="size-3" />
					<span className="text-xs"></span>
				</button>
			</aside>
		</div>
	);
}
