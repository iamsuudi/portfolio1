import { Separator } from "@radix-ui/themes";
import { useContext } from "react";
import { PathContext } from "./RootFolder";
import SideButton from "./SideButton";
import { HamburgerMenuIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";

function Buttons() {
	const { dirs } = useContext(PathContext);
	return (
		<div className="flex flex-col gap-2 p-4">
			{dirs.map((dir) => {
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
				className="flex items-center justify-between w-full p-4 hover:cursor-grabbing hover:bg-black/30"
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
