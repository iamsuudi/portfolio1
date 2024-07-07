import { useContext } from "react";
import { Avatar } from "@radix-ui/themes";
import { PathContext } from "./RootFolder";

function Folder({ dir }) {
	const { setPath } = useContext(PathContext);

	return (
		<button
			onClick={() => setPath(dir.path)}
			className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/10"
		>
			<Avatar src="folder.png" fallback="Icon" size={"4"} />
			<span className="text-sm">{dir.name}</span>
		</button>
	);
}

export default function ChildFolders() {
	const { children, setPath } = useContext(PathContext);

	return (
		<div
			id="directories"
			className="flex flex-col w-full h-full gap-1 overflow-y-scroll"
		>
			{children.length > 0 &&
				children.map((dir) => {
					return (
						<Folder
							key={dir.path.toString()}
							dir={dir}
							setPath={setPath}
						/>
					);
				})}
			{children.length === 0 && (
				<div className="flex flex-col items-center justify-center w-full h-full">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={0.5}
						stroke="gray"
						className="size-40"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
						/>
					</svg>

					<span className="text-xl font-bold">Folder is Empty</span>
				</div>
			)}
		</div>
	);
}
