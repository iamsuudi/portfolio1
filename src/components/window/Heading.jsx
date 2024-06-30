import { useEffect } from "react";
import { format } from "date-fns";
import { useState } from "react";
import {
    Avatar,
    Box,
    Card,
    Text,
    DropdownMenu,
    Flex,
    Separator,
    Switch,
} from "@radix-ui/themes";
import { Cross2Icon, SpeakerLoudIcon } from "@radix-ui/react-icons";

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
            avatar: "https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/62fddf0fde45a8baedcc7ee5_847541504914fd33810e70a0ea73177e%20(2)-1.png",
            header: "Boot.dev (Backend Development Community)",
            message:
                "Migration from vercel to CF Pages underway...hoping for a zero downtime migration",
        },
        {
            id: "3",
            avatar: "https://www.apollographql.com/docs/favicon-32x32.png?v=e03dad83eb16cf475a13342272058ebe",
            header: "Apollo Server",
            message: "Apollo server is ready on http://locahost:4000",
        },
        {
            id: "4",
            avatar: "https://code.visualstudio.com/favicon.ico",
            header: "VS Code",
            message: "New update is available!",
        },
        {
            id: "5",
            avatar: "https://a.slack-edge.com/80588/marketing/img/meta/favicon-32.png",
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
        <div className="flex items-center justify-between w-full backdrop-blur-lg bg-black/30">
            <div className="flex px-4 py-1 rounded-2xl hover:bg-white/10">
                <button className="">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={4}
                        stroke="currentColor"
                        className={`size-6`}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 12h14"
                        />
                    </svg>
                </button>
            </div>
            <div className="px-4 py-1 rounded-2xl hover:bg-white/10">
                <DropdownMenu.Root>
                    <DropdownMenu.Trigger>
                        <button className="text-sm border-none outline-none">
                            <DateFormatted />
                        </button>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content
                        color="gray"
                        className="fixed -right-[28dvw] p-1 bg-black/80 backdrop-blur-lg"
                    >
                        <div className="h-[45dvh] w-[45dvw] flex gap-3">
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
                            <div className="flex flex-col w-2/5 h-full border"></div>
                        </div>
                    </DropdownMenu.Content>
                </DropdownMenu.Root>
            </div>
            <div className="px-4 py-1 rounded-2xl hover:bg-white/10">
                <button className="flex items-center gap-3">
                    <span className="text-sm">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className={`size-5`}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                            />
                        </svg>
                    </span>
                    <span className="text-sm">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 -960 960 960"
                            fill="#e8eaed"
                            className="size-5"
                        >
                            <path d="M480-120 0-600q95-97 219.5-148.5T480-800q137 0 261 51t219 149L480-120ZM174-540q67-48 145-74t161-26q83 0 161 26t145 74l58-58q-79-60-172-91t-192-31q-99 0-192 31t-172 91l58 58Z" />
                        </svg>
                    </span>
                    <span className="text-sm">
                        <SpeakerLoudIcon />
                    </span>
                    <span className="flex items-center gap-2 text-sm">
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
                    </span>
                </button>
            </div>
        </div>
    );
}
