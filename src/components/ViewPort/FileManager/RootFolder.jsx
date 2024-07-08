import { createContext, useMemo, useState } from "react";
import {
	AvatarIcon,
	CountdownTimerIcon,
	DownloadIcon,
	FileTextIcon,
	GitHubLogoIcon,
	HomeIcon,
	StarFilledIcon,
} from "@radix-ui/react-icons";
import { Separator } from "@radix-ui/themes";

import FolderNavBar from "./NavBar";
import FolderSideBar from "./SideBar";
import ChildFolders from "./Children";
import { useRef } from "react";
import Draggable from "../Drag";

export const PathContext = createContext();

export function RootFolder({ drag }) {
	const [history, setHistory] = useState([["Home"]]);
	const [pointer, setPointer] = useState(0);
	const [path, setPath] = useState(history[0]);

	const [size, setSize] = useState({ width: "60rem", height: "40rem" });

	const [position, setPosition] = useState({ top: 0, left: 0 });
	const dragRef = useRef(null);

	const dirs = useMemo(
		() => [
			{
				path: ["Recent"],
				name: "Recent",
				icon: <CountdownTimerIcon className="" />,
				children: [],
			},
			{
				path: ["Starred"],
				name: "Starred",
				icon: <StarFilledIcon className="" />,
				children: [],
			},
			{
				path: ["Home"],
				name: "Home",
				icon: <HomeIcon className="" />,
				children: [
					{
						path: ["Home", "Anaconda3"],
						name: "Anaconda3",
						children: [],
					},
					{
						path: ["Home", "AndroidStudioProjects"],
						name: "AndroidStudioProjects",
						children: [],
					},
					{
						path: ["Home", "Books"],
						name: "Books",
						children: [],
					},
					{
						path: ["Home", "Desktop"],
						name: "Desktop",
						children: [],
					},
					{
						path: ["Home", "Documents"],
						name: "Documents",
						children: [],
					},
					{
						path: ["Home", "Downloads"],
						name: "Downloads",
						children: [],
					},
					{
						path: ["Home", "IdeaProjects"],
						name: "IdeaProjects",
						children: [],
					},
					{
						path: ["Home", "Music"],
						name: "Music",
						children: [],
					},
					{
						path: ["Home", "Pictures"],
						name: "Pictures",
						children: [],
					},
					{
						path: ["Home", "Snap"],
						name: "Snap",
						children: [],
					},
					{
						path: ["Home", "Templates"],
						name: "Templates",
						children: [],
					},
					{
						path: ["Home", "Videos"],
						name: "Videos",
						children: [],
					},
				],
			},
			{
				path: ["Home", "Documents"],
				name: "Documents",
				icon: <FileTextIcon className="" />,
				children: [],
			},
			{
				path: ["Home", "Downloads"],
				name: "Downloads",
				icon: <DownloadIcon className="" />,
				children: [],
			},
			{
				path: ["Projects"],
				name: "Projects",
				icon: <GitHubLogoIcon className="" />,
				children: [],
			},
			{
				path: ["About"],
				name: "About",
				icon: <AvatarIcon className="" />,
				children: [],
			},
		],
		[]
	);

	const value = {
		path,
		setPath,
		dirs,
		history,
		setHistory,
		pointer,
		setPointer,
	};

	const handleDrag = (e) => {
		drag(e, dragRef, position, setPosition);
	};

	return (
		<PathContext.Provider value={value}>
			<Draggable name={"FileManager"} size={size} position={position}>
				<div
					className={`flex bg-black/60 backdrop-blur-sm rounded-xl w-full h-full`}>
					<FolderSideBar handleDrag={handleDrag} />

					<Separator
						size={"4"}
						color="gray"
						orientation={"vertical"}
					/>

					<div className="flex flex-col w-full gap-5 text-sm">
						<FolderNavBar
							handleDrag={handleDrag}
							size={size}
							setSize={setSize}
							setPosition={setPosition}
						/>
						<ChildFolders />
					</div>
				</div>
			</Draggable>
		</PathContext.Provider>
	);
}
