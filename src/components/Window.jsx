import { createContext } from "react";
import HeaderBar from "./Heading/Heading";
import SideBar from "./Sidebar/SideBar";
import ViewPort from "./ViewPort";
import { useState } from "react";

export const AppContext = createContext();

/* eslint react/prop-types: 0 */
export default function Window() {
	const [display, setDisplay] = useState([]);
	const [layer, setLayer] = useState([]);
	const [pdf, setPdf] = useState();
	const [mode, setMode] = useState();
	const [minimized, setMinimized] = useState([]);
	const [notifications, setNotfications] = useState([
		{
			id: "1",
			avatar: "https://vivaldi.com/wp-content/uploads/cropped-favicon-32x32.png",
			header: "Download Complete",
			message: "Ubuntu 24.04 LTS (OS Image File)",
		},
		{
			id: "2",
			avatar: "discord.png",
			header: "Boot.dev (Backend Development Community)",
			message:
				"Migration from vercel to CF Pages underway...hoping for a zero downtime migration",
		},
		{
			id: "3",
			avatar: "https://www.apollographql.com/favicon/apple-icon-180x180.png",
			header: "Apollo Server",
			message: "Apollo server is ready on http://locahost:4000",
		},
		{
			id: "4",
			avatar: "vscode.png",
			header: "VS Code",
			message: "New update is available!",
		},
		{
			id: "5",
			avatar: "slack.png",
			header: "Slack",
			message: "You have 2 new pull requests!",
		},
		{
			id: "6",
			avatar: "https://cdn-icons-png.flaticon.com/512/3845/3845731.png",
			header: "Weather App ( 21°C )",
			message:
				"Light rain showers and gentle breeze (updated a few minutes ago)",
		},
		{
			id: "7",
			avatar: "https://static.licdn.com/aero-v1/sc/h/90y3av2ns08iojcadywbxioqh",
			header: "Linkedin",
			message: "You have 15 new notifications",
		},
		{
			id: "8",
			avatar: "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico",
			header: "Gmail Inbox",
			message: "You have a new message Lane Wagner",
		},
	]);

	const value = {
		display, // tracks which component to display for each app name
		setDisplay,
		layer, // tracks the z index of the components
		setLayer,
		pdf,
		setPdf,
		mode,
		setMode,
		notifications,
		setNotfications,
		minimized, // tracks the apps removed / minimzed from layers
		setMinimized,
	};

	return (
		<AppContext.Provider value={value}>
			<div
				style={{ backgroundImage: "url('242478.jpg')" }}
				id="window"
				className="w-[100dvw] h-[100dvh] relative flex flex-col">
				<HeaderBar />
				<div className="flex w-full h-full">
					<ViewPort />
					<SideBar />
				</div>
			</div>
		</AppContext.Provider>
	);
}
