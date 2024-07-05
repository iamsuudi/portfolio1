import { useState } from "react";
import Notification from "./Notification";
import { Switch } from "@radix-ui/themes";

function NotificationPanel() {
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

	return (
		<div className="flex flex-col items-center justify-between w-3/5 h-full gap-3">
			<div
				id="notification-panel"
				className="w-full h-full overflow-x-hidden overflow-y-scroll"
			>
				{notifications.length > 0 ? (
					notifications.map((notification) => {
						return (
							<Notification
								key={notification.id}
								notification={notification}
								remover={(id) =>
									setNotfications(
										notifications.filter(
											(item) => item.id !== id
										)
									)
								}
							/>
						);
					})
				) : (
					<div className="flex flex-col items-center justify-center w-full h-full">
						<span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.0}
								stroke="gray"
								className=" size-32"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
								/>
							</svg>
						</span>
						<p className="font-normal text-gray-400 text-md">
							No Notifications!
						</p>
					</div>
				)}
			</div>
			<div className="flex items-center justify-between w-full shadow-2xl">
				<div className="flex items-center gap-2 text-sm">
					<span className="text-sm">Do Not Disturb</span>
					<Switch
						className="border-none outline-none hover:cursor-pointer"
						size={"1"}
						color="orange"
						onClick={(e) => {
							// e.preventDefault();
							console.log(e.target);
						}}
					/>
				</div>
				{notifications.length > 0 && (
					<button
						color="gray"
						className="px-3 py-1 text-sm rounded-md bg-white/15 hover:bg-white/10"
						onClick={() => {
							setNotfications([]);
						}}
					>
						Clear
					</button>
				)}
			</div>
		</div>
	);
}

export default NotificationPanel;
