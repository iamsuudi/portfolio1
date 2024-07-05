import {
	addMonths,
	endOfMonth,
	format,
	isSameDay,
	startOfMonth,
	subMonths,
} from "date-fns";
import {
    CalendarIcon,
	CaretLeftIcon,
	CaretRightIcon,
} from "@radix-ui/react-icons";
import { useEffect, useState } from "react";

function Calendar() {
	const [date, setDate] = useState(new Date());
	const [firstDay, setFirstDay] = useState(startOfMonth(date));
	const [lastDay, setLastDay] = useState(endOfMonth(date));
	const [days, setDays] = useState([]);

	useEffect(() => {
		const collection = [];
		// if (firstDay.getDay())
		for (let i = 0; i < firstDay.getDay(); i += 1) {
			collection.push(<span className="w-7 h-7"></span>);
		}

		for (let i = 1; i <= lastDay.getDate(); i += 1) {
			collection.push(
				<Button
					day={i}
					today={i === date.getDate() && isSameDay(date, new Date())}
				/>
			);
		}

		setDays(collection);
	}, [lastDay, days, date, firstDay]);

	const Button = ({ day, today }) => {
		return (
			<button
				className={`flex items-center justify-center w-7 h-7 text-xs rounded-full ${
					today ? "bg-amber-600 bg-opacity-90" : "hover:bg-white/15"
				}`}
			>
				{day}
			</button>
		);
	};

	return (
		<>
			<div className="p-5 text-white/60">
				<div className="text-sm">{format(new Date(), "eeee")}</div>
				<div className="flex items-center gap-3 text-3xl">{format(new Date(), "LLLL d y")} <CalendarIcon className="size-7"/></div>
			</div>
			<div className="flex flex-col gap-4 px-4 py-2">
				<div className="flex justify-between px-1">
					<button
						className="flex items-center justify-center w-6 h-6 rounded-full hover:bg-white/15"
						onClick={() => {
							const newDate = subMonths(date, 1);
							setDate(newDate);
							setFirstDay(startOfMonth(newDate));
							setLastDay(endOfMonth(newDate));
						}}
					>
						<CaretLeftIcon />
					</button>
					{format(date, "LLLL")}
					<button
						className="flex items-center justify-center w-6 h-6 rounded-full hover:bg-white/15"
						onClick={() => {
							const newDate = addMonths(date, 1);
							setDate(newDate);
							setFirstDay(startOfMonth(newDate));
							setLastDay(endOfMonth(newDate));
						}}
					>
						<CaretRightIcon />
					</button>
				</div>
				<div className="flex justify-between text-xs text-white/50">
					<span className="flex items-start justify-center w-7 h-fit">
						S
					</span>
					<span className="flex items-start justify-center w-7 h-fit">
						M
					</span>
					<span className="flex items-start justify-center w-7 h-fit">
						T
					</span>
					<span className="flex items-start justify-center w-7 h-fit">
						W
					</span>
					<span className="flex items-start justify-center w-7 h-fit">
						T
					</span>
					<span className="flex items-start justify-center w-7 h-fit">
						F
					</span>
					<span className="flex items-start justify-center w-7 h-fit">
						S
					</span>
				</div>
				<div className="flex flex-wrap justify-start gap-[13px]">
					{days}
				</div>
			</div>
		</>
	);
}

export default Calendar;
