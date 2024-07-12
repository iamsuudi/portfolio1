import { Avatar, Separator } from "@radix-ui/themes";
import { useContext, useState, useRef } from "react";
import { AppContext } from "../../Window";
import { Cross1Icon, MinusIcon, StopIcon } from "@radix-ui/react-icons";
import Draggable from "../Drag";
import positioner from "../../../utils/positioner";

export default function PDFReader({ drag }) {
	const { layer, setLayer, display, setDisplay, pdf } =
		useContext(AppContext);

	const [size, setSize] = useState({ width: "60rem", height: "40rem" });
	const [position, setPosition] = useState(positioner);

	const dragRef = useRef(null);
	const links = {
		"Resume.pdf": "Resume.pdf",
		"Martin Krause - The Complete Developer.pdf":
			"https://download.library.lol/main/4218000/a01eb641ddde34df8b4ae2e61da416d5/Martin%20Krause%20-%20The%20Complete%20Developer_%20Master%20the%20Full%20Stack%20with%20TypeScript%2C%20React%2C%20Next.js%2C%20MongoDB%2C%20and%20Docker-No%20Starch%20Press%20%282024%29.pdf",
		"You can't hurt me.pdf":
			"https://download.library.lol/main/4256000/9025735b50cd6999313321a773ec1884/David%20Goggins%20-%20Can%27t%20Hurt%20Me_%20Master%20Your%20Mind%20and%20Defy%20the%20Odds-Lioncrest%20Publishing%20%282018%29.pdf",
	};

	return (
		<Draggable name={"PDFReader"} size={size} position={position}>
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
					<Avatar src="pdf.png" className="size-5" />

					<p className="ml-auto font-bold">Pdf Reader</p>

					{/* Resizing / Closing */}
					<div className="flex items-center gap-3 ml-auto">
						<button
							className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 hover:bg-white/25"
							onClick={() => {
								const previousIndex =
									layer.indexOf("PDFReader");
								setLayer([
									"PDFReader",
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
										(app) => app.name !== "PDFReader"
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
					<iframe src={links[pdf]} className="w-full h-full" />
				</div>
			</div>
		</Draggable>
	);
}
