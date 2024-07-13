import { useContext } from "react";
import { AppContext } from "./Window";
import { Fragment } from "react";

export default function Recents({ drag }) {
	const { display } = useContext(AppContext);

	return (
		<div
			className={`bg-black/5 backdrop-blur-sm w-full h-full flex items-center justify-center`}>
			<div
				id="recents"
				style={{
					backgroundImage: "url('242478.jpg')",
					backgroundPosition: "center",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
				}}
				className={`bg-transparent w-[70%] h-[70%] rounded-3xl overflow-y-scroll overflow-x-hidden p-10 flex justify-between flex-wrap`}>
				{display.map((App) => {
					return (
						<Fragment key={App.name}>
							<App.component drag={drag} />
						</Fragment>
					);
				})}
			</div>
		</div>
	);
}
