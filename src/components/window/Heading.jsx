import { useEffect, useState } from "react";
import {
	format,
} from "date-fns";
import {
	Avatar,
	Box,
	Card,
	Text,
	DropdownMenu,
	Flex,
	Separator,
	Switch,
	Slider,
} from "@radix-ui/themes";
import {
	CameraIcon,
	ChevronRightIcon,
	Cross2Icon,
	DashboardIcon,
	GearIcon,
	LockClosedIcon,
	MoonIcon,
	PersonIcon,
	SpeakerLoudIcon,
	SunIcon,
} from "@radix-ui/react-icons";
import Calendar from "../calendar";


function Notification({ notification, remover }) {
	return (
		<Card
			className="my-2 drop-shadow-sm outline-transparent hover:cursor-pointer hover:bg-white/5"
			size={"1"}
		>
			<Flex gap="3" align="center">
				<Avatar
					size="2"
					src={notification.avatar}
					// radius="full"
					fallback="T"
				/>
				<Box>
					<Text as="div" size="1" weight="bold">
						{notification.header}
					</Text>
					<Text as="div" size="1" color="gray">
						{notification.message}
					</Text>
				</Box>
				<button
					className="p-1 ml-auto rounded-full hover:bg-white/5 backdrop-blur-md"
					onClick={() => {
						remover(notification.id);
					}}
				>
					<Cross2Icon />
				</button>
			</Flex>
		</Card>
	);
}

function DateFormatted() {
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		const checker = setInterval(() => {
			setTime(new Date());
		}, 1000);
		return () => clearInterval(checker);
	}, [time]);

	return <span>{format(time, "MMM d HH:mm")}</span>;
}

function MenuButton({ children }) {
	const [paint, setPaint] = useState(false);

	return (
		<button
			className={`flex items-center h-12 pl-4 text-sm rounded-full w-44 ${
				paint ? "bg-orange-500 bg-opacity-70" : "bg-white/10"
			}`}
			onClick={(e) => {
				e.preventDefault();
				setPaint(!paint);
			}}
		>
			{children}
		</button>
	);
}

export default function HeaderBar() {
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
			id: "7",
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
		<div className="flex items-center justify-between w-full backdrop-blur-lg bg-black/30">
			<div className="flex items-center h-full px-8 rounded-2xl hover:bg-white/10">
				<button className="">
					<DashboardIcon />
				</button>
			</div>

			<div className="px-4 py-1 rounded-2xl hover:bg-white/10">
				<DropdownMenu.Root>
					<DropdownMenu.Trigger>
						<button className="text-sm border-none outline-none">
							<DateFormatted />
						</button>
					</DropdownMenu.Trigger>
					<DropdownMenu.Content className="fixed -right-[28dvw] p-1 bg-black/80 backdrop-blur-lg">
						<div className="h-[26rem] w-[50rem] flex gap-3">
							<div className="flex flex-col items-center justify-between w-3/5 h-full gap-3">
								<div
									id="notification-panel"
									className="w-full h-[90%] overflow-y-scroll overflow-x-hidden"
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
																(item) =>
																	item.id !==
																	id
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
										<span className="text-sm">
											Do Not Disturb
										</span>
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
							<Separator
								orientation={"vertical"}
								size={"4"}
								className=""
							/>
							<div className="flex flex-col w-2/5 h-full">
								<Calendar />
							</div>
						</div>
					</DropdownMenu.Content>
				</DropdownMenu.Root>
			</div>

			<div className="h-full px-4 rounded-2xl hover:bg-white/10">
				<DropdownMenu.Root>
					<DropdownMenu.Trigger>
						<button className="flex items-center h-full gap-4 outline-none">
							<span className="">
								<MoonIcon />
							</span>
							<span className="">
								<SpeakerLoudIcon />
							</span>
							<span className="">
								<LockClosedIcon />
							</span>
							<span className="">
								<PersonIcon />
							</span>
						</button>
					</DropdownMenu.Trigger>
					<DropdownMenu.Content className="fixed rounded-xl -right-14 backdrop-blur-sm bg-black/70">
						<div
							id="notification-panel"
							className="flex flex-col p-3 overflow-x-hidden overflow-y-scroll w-96 h-80"
						>
							<div className="flex items-center justify-between">
								<button className="flex items-center gap-2 px-4 py-2 text-sm rounded-full bg-white/15">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="currentColor"
										className="size-5"
										viewBox="0 0 16 16"
									>
										<path d="M2 6h10v4H2z" />
										<path d="M2 4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm10 1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm4 3a1.5 1.5 0 0 1-1.5 1.5v-3A1.5 1.5 0 0 1 16 8" />
									</svg>
									<span>100%</span>
								</button>
								<div className="flex gap-3">
									<button className="flex items-center gap-2 p-2 text-sm rounded-full bg-white/15 hover:bg-white/30">
										<CameraIcon />
									</button>
									<button className="flex items-center gap-2 p-2 text-sm rounded-full bg-white/15 hover:bg-white/30">
										<GearIcon />
									</button>
									<button className="flex items-center gap-2 p-2 text-sm rounded-full bg-white/15 hover:bg-white/30">
										<LockClosedIcon />
									</button>
									<button className="flex items-center gap-2 p-2 text-sm rounded-full bg-white/15 hover:bg-white/30">
										<PersonIcon />
									</button>
								</div>
							</div>
							<div className="flex flex-col gap-4 my-auto">
								<div className="flex items-center gap-5">
									<SpeakerLoudIcon className="size-4" />
									<Slider
										radius="full"
										size={"1"}
										defaultValue={["90"]}
										color="orange"
									/>
								</div>
								<div className="flex items-center gap-5">
									<SunIcon className="size-4" />
									<Slider
										radius="full"
										size={"1"}
										defaultValue={["50"]}
										color="orange"
									/>
								</div>
							</div>
							<div className="flex flex-wrap justify-between gap-y-3">
								<MenuButton>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="currentColor"
										className="size-5"
										viewBox="0 0 16 16"
									>
										<path d="M15.384 6.115a.485.485 0 0 0-.047-.736A12.44 12.44 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.52.52 0 0 0 .668.05A11.45 11.45 0 0 1 8 4c2.507 0 4.827.802 6.716 2.164.205.148.49.13.668-.049" />
										<path d="M13.229 8.271a.482.482 0 0 0-.063-.745A9.46 9.46 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.576 1.336c.206.132.48.108.653-.065m-2.183 2.183c.226-.226.185-.605-.1-.75A6.5 6.5 0 0 0 8 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.407.19.611.09A5.5 5.5 0 0 1 8 10c.868 0 1.69.201 2.42.56.203.1.45.07.61-.091zM9.06 12.44c.196-.196.198-.52-.04-.66A2 2 0 0 0 8 11.5a2 2 0 0 0-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 0 0 .707 0l.707-.707z" />
									</svg>
									<div className="flex flex-col mx-auto">
										<span className="font-bold">Wifi</span>
										<span className="text-xs">
											404! No Conn...
										</span>
									</div>
									<div className="py-4 pl-1 pr-4 rounded-r-full bg-white/15">
										<ChevronRightIcon />
									</div>
								</MenuButton>
								<MenuButton>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="currentColor"
										viewBox="0 0 16 16"
										className="size-5"
									>
										<path
											fillRule="evenodd"
											d="m8.543 3.948 1.316 1.316L8.543 6.58zm0 8.104 1.316-1.316L8.543 9.42zm-1.41-4.043L4.275 5.133l.827-.827L7.377 6.58V1.128l4.137 4.136L8.787 8.01l2.745 2.745-4.136 4.137V9.42l-2.294 2.274-.827-.827zM7.903 16c3.498 0 5.904-1.655 5.904-8.01 0-6.335-2.406-7.99-5.903-7.99S2 1.655 2 8.01C2 14.344 4.407 16 7.904 16Z"
										/>
									</svg>
									<div className="flex flex-col mx-auto">
										<span className="font-bold">
											Bluetooth
										</span>
									</div>
									<div className="py-4 pl-1 pr-4 rounded-r-full bg-white/15">
										<ChevronRightIcon />
									</div>
								</MenuButton>
								<MenuButton>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="currentColor"
										className="size-5"
										viewBox="0 0 16 16"
									>
										<path d="M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2M3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707M2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8m9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5m.754-4.246a.39.39 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.39.39 0 0 0-.029-.518z" />
										<path
											fillRule="evenodd"
											d="M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.95 11.95 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0"
										/>
									</svg>
									<div className="mx-auto">
										<span className="font-bold">
											Power Mode
										</span>
									</div>
									<div className="py-4 pl-1 pr-4 rounded-r-full bg-white/15">
										<ChevronRightIcon />
									</div>
								</MenuButton>
								<MenuButton>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="currentColor"
										className="size-5"
										viewBox="0 0 16 16"
									>
										<path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
									</svg>
									<div className="ml-5">
										<span className="font-bold">
											Night Light
										</span>
									</div>
								</MenuButton>
								<MenuButton>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="currentColor"
										className="size-5"
										viewBox="0 0 16 16"
									>
										<path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-8 5v1H4.5a.5.5 0 0 0-.093.009A7 7 0 0 1 3.1 13zm0-1H2.255a7 7 0 0 1-.581-1H8zm-6.71-2a7 7 0 0 1-.22-1H8v1zM1 8q0-.51.07-1H8v1zm.29-2q.155-.519.384-1H8v1zm.965-2q.377-.54.846-1H8v1zm2.137-2A6.97 6.97 0 0 1 8 1v1z" />
									</svg>
									<div className="ml-5">
										<span className="font-bold">
											Dark Style
										</span>
									</div>
								</MenuButton>
								<MenuButton>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="currentColor"
										className="size-5"
										viewBox="0 0 16 16"
									>
										<path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849" />
									</svg>
									<div className="ml-5">
										<span className="font-bold">
											Airplane Mode
										</span>
									</div>
								</MenuButton>
							</div>
						</div>
					</DropdownMenu.Content>
				</DropdownMenu.Root>
			</div>
		</div>
	);
}
