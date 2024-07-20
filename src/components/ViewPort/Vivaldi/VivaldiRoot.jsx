import { Avatar, DropdownMenu, Separator, TextField } from "@radix-ui/themes";
import { useContext, useState, useRef, useEffect } from "react";
import { AppContext } from "../../Window";
import {
	BookmarkIcon,
	CameraIcon,
	CheckIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
	CodeIcon,
	Component1Icon,
	CountdownTimerIcon,
	Cross1Icon,
	CrossCircledIcon,
	DownloadIcon,
	GearIcon,
	GlobeIcon,
	InputIcon,
	LetterCaseCapitalizeIcon,
	LightningBoltIcon,
	ListBulletIcon,
	LockClosedIcon,
	MinusIcon,
	MixIcon,
	Pencil2Icon,
	PlusIcon,
	ReloadIcon,
	SquareIcon,
	StopIcon,
	TriangleDownIcon,
	ViewVerticalIcon,
} from "@radix-ui/react-icons";
import Draggable from "../Drag";
import positioner from "../../../utils/positioner";
import { format } from "date-fns";

export default function VivaldiRoot({ drag }) {
	const { layer, setLayer, display, setDisplay } = useContext(AppContext);

	const [size, setSize] = useState({ width: "100%", height: "100%" });
	const [position, setPosition] = useState({ top: 0, left: 0 });

	const dragRef = useRef(null);

	const [loading, setLoading] = useState(true);
	const [date, setDate] = useState(new Date());

	const [isTabVisible, setisTabVisible] = useState(true);

	const [workspaces] = useState([
		{
			name: "Portfolio workspace",
			id: "workspace-1",
			tabs: [
				{ title: "Github - iamsuudi" },
				{ title: "Radix Components" },
				{ title: "Tailwindcss" },
				{ title: "Portfolio - Abdulfetah Suudi" },
			],
		},
		{
			name: "Members Only",
			id: "workspace-2",
			tabs: [
				{ title: "GSAP Animations" },
				{ title: "Zod" },
				{ title: "Shadcn Components" },
			],
		},
		{
			name: "The Odin Project",
			id: "workspace-3",
			tabs: [
				{ title: "Environmental Variables" },
				{ title: "Where's Waldo" },
				{ title: "Prisma" },
			],
		},
		{
			name: "HackerRank",
			id: "workspace-4",
			tabs: [],
		},
	]);

	const [currentWorkspace, setCurrentWorkspace] = useState(
		"Portfolio workspace"
	);
	const [currentTab, setCurrentTab] = useState(
		"Portfolio - Abdulfetah Suudi"
	);

	useEffect(() => {
		const loaderTimer = setTimeout(() => {
			setLoading(false);
		}, 1000);

		const dateTimer = setTimeout(() => {
			setDate(new Date());
		}, 1000);

		return () => {
			clearTimeout(loaderTimer);
			clearTimeout(dateTimer);
		};
	}, [loading]);

	return (
		<Draggable name={"Vivaldi"} size={size} position={position}>
			<div
				className={`flex flex-col bg-black/60 backdrop-blur-sm rounded-xl text-sm w-full h-full overflow-hidden`}>
				<header
					onMouseDown={(e) => {
						drag(e, dragRef, position, setPosition);
					}}
					style={{
						height: "3rem",
						width: "full",
					}}
					className="flex items-center gap-5 p-2 bg-black/40 hover:cursor-grabbing">
					<div className="flex items-center gap-5">
						<Avatar
							src="https://vivaldi.com/wp-content/uploads/cropped-favicon-270x270.png"
							className="size-5"
						/>

						<button
							className="flex items-center justify-center rounded w-7 h-7 hover:bg-white/10"
							onClick={() => setisTabVisible(!isTabVisible)}>
							<ViewVerticalIcon />
						</button>

						<div className="flex gap-1 ml-5">
							<button className="flex items-center justify-center rounded w-7 h-7 hover:bg-white/10">
								<ChevronLeftIcon className="size-5" />
							</button>
							<button className="flex items-center justify-center rounded w-7 h-7 hover:bg-white/10">
								<ChevronRightIcon className="size-5" />
							</button>
						</div>

						<button
							className="flex items-center justify-center rounded w-7 h-7 hover:bg-white/10"
							onClick={() => setLoading(true)}>
							<ReloadIcon />
						</button>
					</div>

					<TextField.Root
						placeholder="suudi.vercel.app"
						defaultValue={"suudi.vercel.app"}
						className="w-[60%] outline-none border-none">
						<TextField.Slot>
							<LightningBoltIcon />
							<LockClosedIcon />
						</TextField.Slot>
					</TextField.Root>

					{/* Resizing / Closing */}
					<div className="flex items-center gap-3 ml-auto">
						<button
							className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 hover:bg-white/25"
							onClick={() => {
								const previousIndex = layer.indexOf("Vivaldi");
								setLayer([
									"Vivaldi",
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
									setPosition(positioner());
								} else {
									// console.log("maximize size");
									setSize({
										width: "100%",
										height: "100%",
									});
									setPosition({ top: 0, left: 0 });
								}
							}}>
							<StopIcon className="size-[10px] stroke-white" />
						</button>
						<button
							className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 hover:bg-white/25"
							onClick={() => {
								setDisplay(
									display.filter(
										(app) => app.name !== "Vivaldi"
									)
								);
								setLayer(layer.slice(0, layer.length - 1));
							}}>
							<Cross1Icon className="size-[10px] stroke-white" />
						</button>
					</div>
				</header>

				<Separator orientation={"horizontal"} size={"4"} />

				<div className="flex flex-col w-full h-full">
					<div className="flex w-full h-full">
						{isTabVisible && (
							<aside className="flex flex-col gap-6 px-3 py-5">
								<BookmarkIcon className="size-5 hover:cursor-pointer stroke-white/5 hover:stroke-white/50" />
								<DownloadIcon className="size-5 hover:cursor-pointer stroke-white/5 hover:stroke-white/50" />
								<CountdownTimerIcon className="size-5 hover:cursor-pointer stroke-white/5 hover:stroke-white/50" />
								<Pencil2Icon className="size-5 hover:cursor-pointer stroke-white/5 hover:stroke-white/50" />
								<LetterCaseCapitalizeIcon className="size-5 hover:cursor-pointer stroke-white/5 hover:stroke-white/50" />
								<LightningBoltIcon className="size-5 hover:cursor-pointer stroke-white/5 hover:stroke-white/50" />

								<Avatar
									src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico"
									size={"1"}
									className="hover:cursor-pointer"
								/>
								<Avatar
									src="https://github.com/fluidicon.png"
									size={"1"}
									className="hover:cursor-pointer"
								/>
								<Avatar
									src="chatgpt.png"
									size={"1"}
									className="hover:cursor-pointer"
								/>
								<PlusIcon className="size-5 hover:cursor-pointer stroke-white/5 hover:stroke-white/50" />

								<GearIcon className="mt-auto size-5 hover:cursor-pointer stroke-white/5 hover:stroke-white/50" />
							</aside>
						)}

						<Separator orientation={"vertical"} size={"4"} />

						<div className="flex flex-col h-full gap-2 p-2 w-80 bg-black/20">
							<DropdownMenu.Root>
								<DropdownMenu.Trigger>
									<button className="flex items-center gap-3 px-2 py-3 rounded-md bg-white/10">
										<Component1Icon />
										<span className="">Workspaces</span>
										<TriangleDownIcon className="ml-auto opacity-70 size-5" />
									</button>
								</DropdownMenu.Trigger>
								<DropdownMenu.Content className="p-2 bg-black/50 backdrop-blur-lg">
									<div className="flex flex-col w-[13.5rem] gap-2">
										{workspaces.map((workspace) => {
											const selected =
												workspace.name ===
												currentWorkspace;
											return (
												<button
													key={workspace.id}
													className={`flex items-center justify-between px-2 py-1 rounded-lg hover:bg-white/10 ${
														selected && "bg-white/5"
													}`}
													onClick={() =>
														setCurrentWorkspace(
															workspace.name
														)
													}>
													<div className="flex flex-col">
														<span className="font-bold text-white/70">
															{workspace.name}
														</span>
														<span className="text-xs text-white/70 text-start">
															{
																workspace.tabs
																	.length
															}{" "}
															tabs
														</span>
													</div>
													{selected ? (
														<CheckIcon className=" size-5 stroke-orange-400" />
													) : (
														<ListBulletIcon className="" />
													)}
												</button>
											);
										})}
									</div>
								</DropdownMenu.Content>
							</DropdownMenu.Root>
							<Separator orientation={"horizontal"} size={"4"} />
							{workspaces
								.find(
									(workspace) =>
										workspace.name === currentWorkspace
								)
								.tabs.map((tab) => {
									const selected = tab.title === currentTab;
									return (
										<button
											key={tab}
											onClick={() =>
												setCurrentTab(tab.title)
											}
											className={`flex items-center gap-3 p-2 w-60 h-9 rounded-lg ${
												selected && "bg-white/5"
											} hover:bg-white/10`}>
											<GlobeIcon />
											<span className="w-56 h-6 overflow-hidden overflow-y-hidden text-ellipsis text-start">
												{tab.title}
											</span>
										</button>
									);
								})}
						</div>

						<Separator orientation={"vertical"} size={"4"} />

						<div className="flex items-center justify-center w-full h-full">
							{!loading &&
							currentTab === "Portfolio - Abdulfetah Suudi" ? (
								<iframe
									src={window.location.href}
									className="w-full h-full"
								/>
							) : (
								<div className="flex flex-col items-center gap-5">
									<CrossCircledIcon className="opacity-40 size-40" />
									<span className="text-lg text-gray-300">
										We can&apos;t perform request to this
										origin
									</span>
								</div>
							)}
						</div>
					</div>

					<Separator orientation={"horizontal"} size={"4"} />

					<aside className="flex items-center gap-6 px-3 py-1">
						<InputIcon className="size-3 hover:cursor-pointer stroke-white/5 hover:stroke-white/50" />
						<MixIcon className="size-3 hover:cursor-pointer stroke-white/5 hover:stroke-white/50" />
						<CameraIcon className="ml-auto size-3 hover:cursor-pointer stroke-white/5 hover:stroke-white/50" />
						<SquareIcon className="size-3 hover:cursor-pointer stroke-white/5 hover:stroke-white/50" />
						<CodeIcon className="size-3 hover:cursor-pointer stroke-white/5 hover:stroke-white/50" />
						<span className="ml-auto">
							{format(date, "hh:mm aa")}
						</span>
					</aside>
				</div>
			</div>
		</Draggable>
	);
}
