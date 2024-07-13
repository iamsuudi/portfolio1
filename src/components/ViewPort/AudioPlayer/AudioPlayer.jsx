import { Avatar, Separator, Slider, Spinner } from "@radix-ui/themes";
import { useContext, useState, useRef } from "react";
import { AppContext } from "../../Window";
import {
	Cross1Icon,
	MinusIcon,
	PauseIcon,
	PlayIcon,
	StopIcon,
} from "@radix-ui/react-icons";
import Draggable from "../Drag";
import positioner from "../../../utils/positioner";
import { useEffect } from "react";

/* eslint react/prop-types: 0 */
function Audio({ src }) {
	const [playing, setPlaying] = useState(false);
	const [currentTime, setCurrentTime] = useState(0);
	const [duration, setDuration] = useState(0);
	const audioRef = useRef(null);

	const handlePlay = () => {
		audioRef.current.play();
		setPlaying(true);
	};

	const handlePause = () => {
		audioRef.current.pause();
		setPlaying(false);
	};

	const handleTimeUpdate = () => {
		setCurrentTime(audioRef.current.currentTime);
		setDuration(audioRef.current.duration);
	};

	useEffect(() => {
		const audioElement = audioRef.current;
		audioElement.addEventListener("timeupdate", handleTimeUpdate);

		return () => {
			audioElement.removeEventListener("timeupdate", handleTimeUpdate);
		};
	}, []);

	return (
		<div className="flex flex-col items-center w-full max-w-xl gap-10">
			<audio ref={audioRef} src={src} />
			<button
				onClick={playing ? handlePause : handlePlay}
				className="flex items-center justify-center p-2">
				{playing ? (
					<PauseIcon className="size-24" />
				) : (
					<PlayIcon className="size-24" />
				)}
			</button>
			<p className="flex flex-col w-full gap-2">
				<Slider value={[(currentTime * 100 / duration).toFixed(2)]} color="orange" />
				<span>
					{currentTime.toFixed(2)} / {duration.toFixed(2)}
				</span>
			</p>
		</div>
	);
}

export default function AudioPlayer({ drag }) {
	const { layer, setLayer, display, setDisplay } = useContext(AppContext);

	const [size, setSize] = useState({ width: "60rem", height: "40rem" });
	const [position, setPosition] = useState(positioner);

	const dragRef = useRef(null);

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 3000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<Draggable name={"AudioPlayer"} size={size} position={position}>
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
					<Avatar src="audio.png" className="size-5" />

					<p className="ml-auto font-bold">Audio Player</p>

					{/* Resizing / Closing */}
					<div className="flex items-center gap-3 ml-auto">
						<button
							className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 hover:bg-white/25"
							onClick={() => {
								const previousIndex =
									layer.indexOf("AudioPlayer");
								setLayer([
									"AudioPlayer",
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
										(app) => app.name !== "AudioPlayer"
									)
								);
								setLayer(layer.slice(0, layer.length - 1));
							}}>
							<Cross1Icon className="size-[10px] stroke-white" />
						</button>
					</div>
				</header>

				<Separator orientation={"horizontal"} size={"4"} />

				<div className="flex items-center justify-center w-full h-full p-10">
					{loading ? (
						<Spinner className="size-10" />
					) : (
					<Audio src={"Podcast Three.mp3"} />
					)}
				</div>
			</div>
		</Draggable>
	);
}
