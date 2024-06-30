import WorkbenchIcon from "../../assets/WorkbenchIcon";
import NightIcon from "../../assets/NightIcon";
import WifiIcon from "../../assets/WifiIcon";
import SoundIcon from "../../assets/SoundIcon";
import BatteryIcon from "../../assets/BatteryIcon";
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
import { Cross2Icon } from "@radix-ui/react-icons";

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
                    radius="full"
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
    ]);

    return (
        <div className="flex items-center justify-between w-full backdrop-blur-lg bg-black/30">
            <div className="flex px-4 py-1 rounded-2xl hover:bg-white/10">
                <button className="">
                    <WorkbenchIcon stroke={5} />
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
                        className="fixed -right-[32dvw] p-1 bg-black/80 backdrop-blur-lg"
                    >
                        <div className="h-[30dvh] w-[50dvw] flex gap-3">
                            <div className="flex flex-col items-center justify-between w-3/5 h-full gap-3">
                                <div
                                    id="notification-panel"
                                    className="w-full h-[90%] overflow-y-scroll overflow-x-hidden"
                                >
                                    {notifications.map((notification) => {
                                        return (
                                            <Notification
                                                key={notification.id}
                                                notification={notification}
                                                remover={(id) =>
                                                    setNotfications(
                                                        notifications.filter(
                                                            (item) =>
                                                                item.id !== id
                                                        )
                                                    )
                                                }
                                            />
                                        );
                                    })}
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
                                    <button
                                        color="gray"
                                        className="px-3 py-1 text-sm rounded-md bg-white/15 hover:bg-white/10"
                                    >
                                        Clear
                                    </button>
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
                <button className="flex items-center gap-3 ">
                    <span className="text-sm">
                        <NightIcon size={4} stroke={2} />
                    </span>
                    <span className="text-sm">
                        <WifiIcon size={4} stroke={2} />
                    </span>
                    <span className="text-sm">
                        <SoundIcon size={4} stroke={2} />
                    </span>
                    <span className="flex items-center text-sm">
                        <BatteryIcon size={4} stroke={2} /> 53%
                    </span>
                </button>
            </div>
        </div>
    );
}
