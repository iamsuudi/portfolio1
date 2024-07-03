import { useEffect } from "react";
import Window from "./components/window/Window";
import { useState } from "react";
import { Avatar } from "@radix-ui/themes";

function App() {
	const [viewPortIsLarge, setViewPortIsLarge] = useState(true);

	useEffect(() => {
		const checkViewPortSize = () => {
			const width = window.innerWidth;
			const height = window.innerHeight;

			if (width > 1300 && height > 900) setViewPortIsLarge(true);
			else setViewPortIsLarge(false);
		};

		checkViewPortSize();

		window.addEventListener("resize", checkViewPortSize);

		return () => window.removeEventListener("resize", checkViewPortSize);
	}, []);

	if (!viewPortIsLarge)
		return (
			<div className="w-[100dvw] h-[100dvh] flex justify-center items-center gap-10 flex-col p-5">
				<Avatar
					src="ubuntu.png"
					fallback="Ubuntu Logo"
					size={"9"}
					className="animate-bounce"
				/>
				<span
					className={`text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-500`}
				>
					Use Laptop or Desktop!
				</span>
			</div>
		);

	return <Window>{/* <h1>heading</h1> */}</Window>;
}

export default App;
