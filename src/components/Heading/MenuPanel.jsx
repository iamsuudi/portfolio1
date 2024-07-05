import { Slider } from "@radix-ui/themes";
import {
	CameraIcon,
	ChevronRightIcon,
	GearIcon,
	LockClosedIcon,
	PersonIcon,
	SpeakerLoudIcon,
	SunIcon,
} from "@radix-ui/react-icons";
import { useState } from "react";

function MenuButton({ children }) {
	const [paint, setPaint] = useState(false);

	return (
		<button
			className={`flex items-center h-12 pl-4 text-sm rounded-full w-44 ${
				paint ? "bg-orange-500 bg-opacity-70" : "bg-white/10"
			}`}
			onClick={(e) => {
				e.preventDefault();
				setPaint(!paint);
			}}
		>
			{children}
		</button>
	);
}

function MenuPanel() {
	return (
		<div
			id="notification-panel"
			className="flex flex-col p-3 overflow-x-hidden overflow-y-scroll w-96 h-80"
		>
			<div className="flex items-center justify-between">
				<button className="flex items-center gap-2 px-4 py-2 text-sm rounded-full bg-white/15">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						className="size-5"
						viewBox="0 0 16 16"
					>
						<path d="M2 6h10v4H2z" />
						<path d="M2 4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm10 1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm4 3a1.5 1.5 0 0 1-1.5 1.5v-3A1.5 1.5 0 0 1 16 8" />
					</svg>
					<span>100%</span>
				</button>

				<div className="flex gap-3">
					<button className="flex items-center gap-2 p-2 text-sm rounded-full bg-white/15 hover:bg-white/30">
						<CameraIcon />
					</button>
					<button className="flex items-center gap-2 p-2 text-sm rounded-full bg-white/15 hover:bg-white/30">
						<GearIcon />
					</button>
					<button className="flex items-center gap-2 p-2 text-sm rounded-full bg-white/15 hover:bg-white/30">
						<LockClosedIcon />
					</button>
					<button className="flex items-center gap-2 p-2 text-sm rounded-full bg-white/15 hover:bg-white/30">
						<PersonIcon />
					</button>
				</div>
			</div>

			<div className="flex flex-col gap-4 my-auto">
				<div className="flex items-center gap-5">
					<SpeakerLoudIcon className="size-4" />
					<Slider
						radius="full"
						size={"1"}
						defaultValue={["90"]}
						color="orange"
					/>
				</div>
				<div className="flex items-center gap-5">
					<SunIcon className="size-4" />
					<Slider
						radius="full"
						size={"1"}
						defaultValue={["50"]}
						color="orange"
					/>
				</div>
			</div>

			<div className="flex flex-wrap justify-between gap-y-3">
				<MenuButton>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						className="size-5"
						viewBox="0 0 16 16"
					>
						<path d="M15.384 6.115a.485.485 0 0 0-.047-.736A12.44 12.44 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.52.52 0 0 0 .668.05A11.45 11.45 0 0 1 8 4c2.507 0 4.827.802 6.716 2.164.205.148.49.13.668-.049" />
						<path d="M13.229 8.271a.482.482 0 0 0-.063-.745A9.46 9.46 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.576 1.336c.206.132.48.108.653-.065m-2.183 2.183c.226-.226.185-.605-.1-.75A6.5 6.5 0 0 0 8 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.407.19.611.09A5.5 5.5 0 0 1 8 10c.868 0 1.69.201 2.42.56.203.1.45.07.61-.091zM9.06 12.44c.196-.196.198-.52-.04-.66A2 2 0 0 0 8 11.5a2 2 0 0 0-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 0 0 .707 0l.707-.707z" />
					</svg>
					<div className="flex flex-col mx-auto">
						<span className="font-bold">Wifi</span>
						<span className="text-xs">404! No Conn...</span>
					</div>
					<div className="py-4 pl-1 pr-4 rounded-r-full bg-white/15">
						<ChevronRightIcon />
					</div>
				</MenuButton>
				<MenuButton>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 16 16"
						className="size-5"
					>
						<path
							fillRule="evenodd"
							d="m8.543 3.948 1.316 1.316L8.543 6.58zm0 8.104 1.316-1.316L8.543 9.42zm-1.41-4.043L4.275 5.133l.827-.827L7.377 6.58V1.128l4.137 4.136L8.787 8.01l2.745 2.745-4.136 4.137V9.42l-2.294 2.274-.827-.827zM7.903 16c3.498 0 5.904-1.655 5.904-8.01 0-6.335-2.406-7.99-5.903-7.99S2 1.655 2 8.01C2 14.344 4.407 16 7.904 16Z"
						/>
					</svg>
					<div className="flex flex-col mx-auto">
						<span className="font-bold">Bluetooth</span>
					</div>
					<div className="py-4 pl-1 pr-4 rounded-r-full bg-white/15">
						<ChevronRightIcon />
					</div>
				</MenuButton>
				<MenuButton>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						className="size-5"
						viewBox="0 0 16 16"
					>
						<path d="M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2M3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707M2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8m9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5m.754-4.246a.39.39 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.39.39 0 0 0-.029-.518z" />
						<path
							fillRule="evenodd"
							d="M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.95 11.95 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0"
						/>
					</svg>
					<div className="mx-auto">
						<span className="font-bold">Power Mode</span>
					</div>
					<div className="py-4 pl-1 pr-4 rounded-r-full bg-white/15">
						<ChevronRightIcon />
					</div>
				</MenuButton>
				<MenuButton>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						className="size-5"
						viewBox="0 0 16 16"
					>
						<path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
					</svg>
					<div className="ml-5">
						<span className="font-bold">Night Light</span>
					</div>
				</MenuButton>
				<MenuButton>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						className="size-5"
						viewBox="0 0 16 16"
					>
						<path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-8 5v1H4.5a.5.5 0 0 0-.093.009A7 7 0 0 1 3.1 13zm0-1H2.255a7 7 0 0 1-.581-1H8zm-6.71-2a7 7 0 0 1-.22-1H8v1zM1 8q0-.51.07-1H8v1zm.29-2q.155-.519.384-1H8v1zm.965-2q.377-.54.846-1H8v1zm2.137-2A6.97 6.97 0 0 1 8 1v1z" />
					</svg>
					<div className="ml-5">
						<span className="font-bold">Dark Style</span>
					</div>
				</MenuButton>
				<MenuButton>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						className="size-5"
						viewBox="0 0 16 16"
					>
						<path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849" />
					</svg>
					<div className="ml-5">
						<span className="font-bold">Airplane Mode</span>
					</div>
				</MenuButton>
			</div>
		</div>
	);
}

export default MenuPanel;
