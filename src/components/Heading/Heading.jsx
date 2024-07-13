import { useEffect, useState } from "react";
import { format } from "date-fns";
import { DropdownMenu, Separator } from "@radix-ui/themes";
import {
	DashboardIcon,
	LockClosedIcon,
	MoonIcon,
	PersonIcon,
	SpeakerLoudIcon,
} from "@radix-ui/react-icons";
import Calendar from "./calendar";
import NotificationPanel from "./NotificationPanel";
import MenuPanel from "./MenuPanel";
import { useContext } from "react";
import { AppContext } from "../Window";

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

export default function HeaderBar() {
	const { mode, setMode } = useContext(AppContext);

	return (
		<div className="flex items-center justify-between w-[100dvw] h-8 backdrop-blur-lg bg-black/30">
			<div className="flex items-center h-full rounded-2xl hover:bg-white/10">
				<button
					className="px-8 "
					onClick={() => {
						if (mode === "Recent") setMode("Normal");
						else setMode("Recent");
					}}>
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
					<DropdownMenu.Content className="fixed -right-[26rem] p-1 bg-black/80 backdrop-blur-lg">
						<div className="h-[26rem] w-[46rem] flex gap-3">
							<NotificationPanel />
							<Separator size={"4"} orientation={"vertical"} />
							<Calendar />
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
						<MenuPanel />
					</DropdownMenu.Content>
				</DropdownMenu.Root>
			</div>
		</div>
	);
}
