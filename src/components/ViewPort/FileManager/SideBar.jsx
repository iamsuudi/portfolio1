import { Separator } from "@radix-ui/themes";
import { useContext, useEffect, useState } from "react";
import { PathContext } from "./RootFolder";
import SideButton from "./SideButton";
import { HamburgerMenuIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";

function Buttons() {
	const { dirs } = useContext(PathContext);
	const [pinned, setPinned] = useState([]);

	useEffect(() => {
		const targets = [];

		const traverse = (directory) => {
			if (directory.children.length > 0)
				for (let child of directory.children) {
					if (child.pinned) targets.push(child);
					traverse(child);
				}
		};

		for (let dir of dirs) {
			if (dir.pinned) {
				targets.push(dir);
			}
			traverse(dir);
		}

		setPinned(targets);
	}, [dirs]);

	return (
		<div className="flex flex-col gap-2 p-4">
			{pinned.map((dir) => {
				if (dir.name === "Projects") {
					return (
						<div key={dir.name} className="flex flex-col">
							<Separator
								size={"4"}
								orientation={"horizontal"}
								className="my-5"
							/>
							<SideButton dir={dir} />
						</div>
					);
				}
				return <SideButton key={dir.name} dir={dir} />;
			})}
		</div>
	);
}

export default function FolderSideBar({ handleDrag }) {
	return (
		<div className="flex flex-col text-sm w-60">
			<div
				className="flex items-center justify-between w-full p-4 hover:cursor-grabbing"
				onMouseDown={handleDrag}>
				<button className="flex items-center justify-center w-6 h-6 rounded-md hover:bg-white/15">
					<MagnifyingGlassIcon className="size-5" />
				</button>
				<span className="text-sm font-bold">Files</span>
				<button className="flex items-center justify-center w-6 h-6 rounded-md hover:bg-white/15">
					<HamburgerMenuIcon />
				</button>
			</div>

			<Buttons />
		</div>
	);
}
