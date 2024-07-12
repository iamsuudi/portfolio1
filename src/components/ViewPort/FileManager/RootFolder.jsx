import { createContext, useMemo, useState } from "react";
import {
	AvatarIcon,
	CountdownTimerIcon,
	DownloadIcon,
	FileTextIcon,
	GitHubLogoIcon,
	HomeIcon,
	ImageIcon,
	StarFilledIcon,
} from "@radix-ui/react-icons";
import { Separator } from "@radix-ui/themes";

import FolderNavBar from "./NavBar";
import FolderSideBar from "./SideBar";
import ChildFolders from "./Children";
import { useRef } from "react";
import Draggable from "../Drag";
import positioner from "../../../utils/positioner";

export const PathContext = createContext();

export function RootFolder({ drag }) {
	const [history, setHistory] = useState([["Home"]]);
	const [pointer, setPointer] = useState(0);
	const [path, setPath] = useState(history[0]);
	const [recent, setRecent] = useState([]);

	const [size, setSize] = useState({ width: "60rem", height: "40rem" });

	const [position, setPosition] = useState(positioner);
	const dragRef = useRef(null);

	const dirs = useMemo(
		() => [
			{
				pinned: true,
				path: ["Recent"],
				name: "Recent",
				icon: <CountdownTimerIcon className="" />,
				files: [],
				children: [],
			},
			{
				pinned: true,
				path: ["Starred"],
				name: "Starred",
				icon: <StarFilledIcon className="" />,
				children: [],
				files: [
					{
						pinned: false,
						path: ["Starred", "Wadeh Podcast.mp3"],
						name: "Wadeh Podcast.mp3",
						type: "file",
						icon: "audio",
					},
					{
						pinned: false,
						path: ["Starred", "You can't hurt me.pdf"],
						name: "You can't hurt me.pdf",
						type: "file",
						icon: "pdf",
					},
				],
			},
			{
				pinned: true,
				path: ["Home"],
				name: "Home",
				icon: <HomeIcon className="" />,
				files: [],
				children: [
					{
						pinned: false,
						path: ["Home", "Anaconda3"],
						name: "Anaconda3",
						files: [],
						children: [],
					},
					{
						pinned: false,
						path: ["Home", "AndroidStudioProjects"],
						name: "AndroidStudioProjects",
						files: [],
						children: [],
					},
					{
						pinned: false,
						path: ["Home", "Books"],
						name: "Books",
						files: [],
						children: [],
					},
					{
						pinned: false,
						path: ["Home", "Desktop"],
						name: "Desktop",
						files: [],
						children: [],
					},
					{
						pinned: true,
						path: ["Home", "Documents"],
						name: "Documents",
						icon: <FileTextIcon className="" />,
						children: [
							{
								pinned: false,
								path: ["Home", "Documents", "Certificates"],
								name: "Certificates",
								files: [],
								children: [
									{
										pinned: false,
										path: [
											"Home",
											"Documents",
											"Certificates",
											"Coursera",
										],
										name: "Coursera",
										files: [],
										children: [],
									},
									{
										pinned: false,
										path: [
											"Home",
											"Documents",
											"Certificates",
											"HackerRank",
										],
										name: "HackerRank",
										files: [],
										children: [],
									},
									{
										pinned: false,
										path: [
											"Home",
											"Documents",
											"Certificates",
											"Microsoft",
										],
										name: "Microsoft",
										files: [],
										children: [],
									},
									{
										pinned: false,
										path: [
											"Home",
											"Documents",
											"Certificates",
											"Udemy",
										],
										name: "Udemy",
										files: [],
										children: [],
									},
								],
							},
						],
						files: [
							{
								pinned: false,
								path: ["Home", "Documents", "Resume.pdf"],
								name: "Resume.pdf",
								type: "file",
								icon: "pdf",
							},
						],
					},
					{
						pinned: true,
						path: ["Home", "Downloads"],
						name: "Downloads",
						icon: <DownloadIcon className="" />,
						children: [
							{
								pinned: false,
								path: ["Home", "Downloads", "Telegram"],
								name: "Telegram",
								files: [],
								children: [
									{
										pinned: false,
										path: [
											"Home",
											"Downloads",
											"Telegram",
											"Audios",
										],
										name: "Audios",
										files: [],
										children: [],
									},
									{
										pinned: false,
										path: [
											"Home",
											"Downloads",
											"Telegram",
											"Documents",
										],
										name: "Documents",
										files: [],
										children: [],
									},
									{
										pinned: false,
										path: [
											"Home",
											"Downloads",
											"Telegram",
											"Pictures",
										],
										name: "Pictures",
										files: [],
										children: [],
									},
									{
										pinned: false,
										path: [
											"Home",
											"Downloads",
											"Telegram",
											"Videos",
										],
										name: "Videos",
										files: [],
										children: [],
									},
								],
							},
						],
						files: [
							{
								pinned: false,
								path: [
									"Home",
									"Downloads",
									"Martin Krause - The Complete Developer.pdf",
								],
								name: "Martin Krause - The Complete Developer.pdf",
								type: "file",
								icon: "pdf",
							},
						],
					},
					{
						pinned: false,
						path: ["Home", "IdeaProjects"],
						name: "IdeaProjects",
						files: [],
						children: [],
					},
					{
						pinned: false,
						path: ["Home", "Music"],
						name: "Music",
						files: [],
						children: [],
					},
					{
						pinned: true,
						path: ["Home", "Pictures"],
						name: "Pictures",
						icon: <ImageIcon className="" />,
						files: [
							{
								pinned: false,
								path: ["Home", "Downloads", "Abdulfetah.jpg"],
								name: "Abdulfetah.jpg",
								type: "file",
								icon: "image",
							},
						],
						children: [],
					},
					{
						pinned: false,
						path: ["Home", "Snap"],
						name: "Snap",
						files: [],
						children: [],
					},
					{
						pinned: false,
						path: ["Home", "Templates"],
						name: "Templates",
						files: [],
						children: [],
					},
					{
						pinned: false,
						path: ["Home", "Videos"],
						name: "Videos",
						files: [],
						children: [],
					},
				],
			},
			{
				pinned: true,
				path: ["Projects"],
				name: "Projects",
				icon: <GitHubLogoIcon className="" />,
				files: [],
				children: [],
			},
			{
				pinned: true,
				path: ["About"],
				name: "About",
				icon: <AvatarIcon className="" />,
				files: [],
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
		recent,
		setRecent,
	};

	const handleDrag = (e) => {
		drag(e, dragRef, position, setPosition);
	};

	return (
		<PathContext.Provider value={value}>
			<Draggable name={"FileManager"} size={size} position={position}>
				<div
					className={`flex bg-black/50 backdrop-blur-md rounded-xl w-full h-full`}>
					<FolderSideBar handleDrag={handleDrag} />

					<Separator
						size={"4"}
						color="gray"
						orientation={"vertical"}
					/>

					<div className="flex flex-col w-full text-sm">
						<FolderNavBar
							handleDrag={handleDrag}
							size={size}
							setSize={setSize}
							setPosition={setPosition}
						/>
						<Separator size={'4'} orientation={'horizontal'} mb={'3'}/>
						<ChildFolders />
					</div>
				</div>
			</Draggable>
		</PathContext.Provider>
	);
}
