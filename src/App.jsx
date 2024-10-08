import { useEffect, useState } from "react";
import { Avatar, Progress } from "@radix-ui/themes";
import Window from "./components/Window";

function UnSupportedDevice() {
	return (
		<div className="w-[100dvw] h-[100dvh] flex justify-center items-center gap-10 flex-col p-5">
			<Avatar
				src="ubuntu.png"
				fallback="Gift Image"
				className="animate-bounce size-80"
			/>
			<span className={`text-xs font-bold text-center text-amber-600`}>
				Use Laptop or Desktop to open me
			</span>
		</div>
	);
}

function LoadingScreen() {
	return (
		<div className="w-[100dvw] h-[100dvh] flex justify-center items-center p-5">
			<div className="flex flex-col gap-5">
				<Avatar
					src="ubuntu.png"
					fallback="Ubuntu Logo"
					size={"9"}
					className=""
				/>
				<Progress
					duration="10s"
					color="orange"
					size={"2"}
					radius="full"
					variant="soft"
					className=""
				/>
				<span
					className={`text-xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-gray-700 via-gray-50 to-gray-700 bg-300% animate-gradient`}>
					Loading Ubuntu...
				</span>
			</div>
		</div>
	);
}

function App() {
	const [viewPortIsLarge, setViewPortIsLarge] = useState(true);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const checkViewPortSize = () => {
			const width = window.innerWidth;
			const height = window.innerHeight;

			if (width > 850 && height > 570) setViewPortIsLarge(true);
			else setViewPortIsLarge(false);
		};

		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 5000);

		checkViewPortSize();

		window.addEventListener("resize", checkViewPortSize);

		return () => {
			window.removeEventListener("resize", checkViewPortSize);
			clearTimeout(timer);
		};
	}, []);

	if (!viewPortIsLarge) return <UnSupportedDevice />;

	if (isLoading) return <LoadingScreen />;

	return <Window />;
}

export default App;
