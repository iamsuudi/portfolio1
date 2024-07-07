import { createContext, useMemo, useEffect, useState } from "react";
import {
	AvatarIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
	CountdownTimerIcon,
	Cross1Icon,
	DownloadIcon,
	FileTextIcon,
	GitHubLogoIcon,
	HamburgerMenuIcon,
	HomeIcon,
	MagnifyingGlassIcon,
	MinusIcon,
	StarFilledIcon,
	StopIcon,
} from "@radix-ui/react-icons";
import { Separator } from "@radix-ui/themes";

import FolderNavBar from "./NavBar";
import FolderSideBar from "./SideBar";
import ChildFolders from "./Children";

export const PathContext = createContext();

export function RootFolder() {
	const [history, setHistory] = useState([["Home"]]);
	const [pointer, setPointer] = useState(0);
	const [path, setPath] = useState(history[0]);
	const [children, setChildren] = useState([]);

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

	useEffect(() => {
		function pathResolver(paths, directories) {
			const currentDir = directories.find((d) => d.name === paths[0]);

			const childDirs = currentDir.children;

			if (paths.length === 1) return childDirs;

			return pathResolver(paths.slice(1), childDirs);
		}

		function recentResolver() {
			const recentFolders = [];

			const resolver = (paths, directories) => {
				const currentDir = directories.find((d) => d.name === paths[0]);

				if (paths.length === 1) return currentDir;

				return resolver(paths.slice(1), currentDir.children);
			};

			for (let path of history) {
				const folder = resolver(path, dirs);
				const previousIndex = recentFolders.indexOf(folder);

				if (previousIndex !== -1) {
					recentFolders.splice(previousIndex, 1);
				}

				if (!["Recent", "Home"].includes(folder.name))
					recentFolders.push(folder);
			}

			return recentFolders.reverse();
		}

		const isRecentDir = path[path.length - 1] === "Recent";

		const result = isRecentDir
			? recentResolver()
			: pathResolver(path, dirs);

		setChildren(result);
	}, [path, dirs, history]);

	const value = {
		path,
		setPath,
		dirs,
		children,
		history,
		setHistory,
		pointer,
		setPointer,
	};

	return (
		<PathContext.Provider value={value}>
			<div className="flex w-full h-[500px] bg-black/60 backdrop-blur-sm">
				<div className="flex flex-col gap-8 p-4 text-sm w-60">
					<div className="flex items-center justify-between w-full ">
						<button className="flex items-center justify-center w-6 h-6 rounded-md hover:bg-white/15">
							<MagnifyingGlassIcon className="size-5" />
						</button>
						<span className="text-sm font-bold">Files</span>
						<button className="flex items-center justify-center w-6 h-6 rounded-md hover:bg-white/15">
							<HamburgerMenuIcon />
						</button>
					</div>

					<FolderSideBar />
				</div>

				<Separator size={"4"} color="gray" orientation={"vertical"} />

				<div className="flex flex-col w-full gap-10 px-4 py-3 text-sm">
					<div className="flex w-full gap-5">
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
								}}
							>
								<ChevronLeftIcon />
							</button>
							<button
								className={`p-2 rounded-md ${
									pointer + 1 < history.length &&
									"hover:bg-white/15"
								}`}
								disabled={pointer + 1 === history.length}
								onClick={() => {
									console.log("forward");
									setPath(history[pointer + 1]);
									setPointer(pointer + 1);
								}}
							>
								<ChevronRightIcon />
							</button>
						</div>

						<FolderNavBar />

						<div className="flex items-center gap-3 ml-auto">
							<button className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 hover:bg-white/25">
								<MinusIcon className="size-[10px] stroke-white" />
							</button>
							<button className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 hover:bg-white/25">
								<StopIcon className="size-[10px] stroke-white" />
							</button>
							<button className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 hover:bg-white/25">
								<Cross1Icon className="size-[10px] stroke-white" />
							</button>
						</div>
					</div>

					<ChildFolders />
				</div>
			</div>
		</PathContext.Provider>
	);
}
