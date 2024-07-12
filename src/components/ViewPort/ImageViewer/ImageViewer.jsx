import { Avatar, Separator, Spinner } from "@radix-ui/themes";
import { useContext, useState, useRef } from "react";
import { AppContext } from "../../Window";
import { Cross1Icon, MinusIcon, StopIcon } from "@radix-ui/react-icons";
import Draggable from "../Drag";
import positioner from "../../../utils/positioner";
import { useEffect } from "react";

export default function ImageViewer({ drag }) {
	const { layer, setLayer, display, setDisplay } = useContext(AppContext);

	const [size, setSize] = useState({ width: "60rem", height: "40rem" });
	const [position, setPosition] = useState(positioner);

	const dragRef = useRef(null);

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 5000);
		
		return () => clearTimeout(timer);
	}, []);

	return (
		<Draggable name={"ImageViewer"} size={size} position={position}>
			<div
				className={`flex flex-col bg-black/60 backdrop-blur-sm rounded-xl text-sm w-full h-full overflow-hidden`}>
				<header
					onMouseDown={(e) => {
						drag(e, dragRef, position, setPosition);
					}}
					style={{
						height: "2.5rem",
						width: "full",
					}}
					className="flex items-center p-2 bg-black/50 hover:cursor-grabbing">
					<Avatar src="image.png" className="size-5" />

					<p className="ml-auto font-bold">Image Viewer</p>

					{/* Resizing / Closing */}
					<div className="flex items-center gap-3 ml-auto">
						<button
							className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 hover:bg-white/25"
							onClick={() => {
								const previousIndex =
									layer.indexOf("ImageViewer");
								setLayer([
									"ImageViewer",
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
										(app) => app.name !== "ImageViewer"
									)
								);
								setLayer(layer.slice(0, layer.length - 1));
							}}>
							<Cross1Icon className="size-[10px] stroke-white" />
						</button>
					</div>
				</header>

				<Separator orientation={"horizontal"} size={"4"} />

				<div className="flex items-center justify-center w-full h-full">
					{loading ? (
						<Spinner className="size-10" />
					) : (
						<img
							src="me.png"
							alt="My picture"
							className="object-contain w-full h-full aspect-square"
						/>
					)}
				</div>
			</div>
		</Draggable>
	);
}
