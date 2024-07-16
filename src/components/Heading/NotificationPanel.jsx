import Notification from "./Notification";
import { Switch } from "@radix-ui/themes";
import { useContext } from "react";
import { AppContext } from "../Window";

function NotificationPanel() {
	const { notifications, setNotfications } = useContext(AppContext);

	return (
		<div className="flex flex-col items-center justify-between w-full h-full gap-3">
			<div
				id="notification-panel"
				className="w-full h-[24rem] overflow-x-hidden overflow-y-scroll">
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
								className=" size-32">
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
						}}>
						Clear
					</button>
				)}
			</div>
		</div>
	);
}

export default NotificationPanel;
