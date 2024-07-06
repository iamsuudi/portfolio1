import HeaderBar from "./Heading/Heading";
import SideBar from "./Sidebar/SideBar";
import ViewPort from "./ViewPort/ViewPort";

/* eslint react/prop-types: 0 */
export default function Window({ children }) {
	return (
		<div
			style={{ backgroundImage: "url('242478.jpg')" }}
			id="window"
			className="w-[100dvw] h-[100dvh] relative flex flex-col"
		>
			<HeaderBar />
			<div className="flex w-full h-full">
				<ViewPort>{children}</ViewPort>
				<SideBar />
			</div>
		</div>
	);
}
