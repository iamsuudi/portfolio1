import { Separator } from "@radix-ui/themes";
import { useContext } from "react";
import { PathContext } from "./RootFolder";
import SideButton from "./SideButton";

export default function FolderSideBar() {
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
