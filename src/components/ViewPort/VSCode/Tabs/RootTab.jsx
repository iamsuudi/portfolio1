import { themes } from "prism-react-renderer";
import { Highlight } from "prism-react-renderer";

const codeBlock = `
    import { Avatar, Separator } from "@radix-ui/themes";
    import { useContext, useState, useRef } from "react";
    import { AppContext } from "../../Window";
    import {
        BellIcon,
        CaretRightIcon,
        CheckIcon,
        CodeIcon,
        Cross1Icon,
        Cross2Icon,
        CrossCircledIcon,
        CubeIcon,
        DesktopIcon,
        DotsHorizontalIcon,
        ExclamationTriangleIcon,
        FileIcon,
        GearIcon,
        LightningBoltIcon,
        MagnifyingGlassIcon,
        MinusIcon,
        MixerVerticalIcon,
        PersonIcon,
        PlayIcon,
        RocketIcon,
        StopIcon,
    } from "@radix-ui/react-icons";
    import Draggable from "../Drag";
    import { useEffect } from "react";
    import positioner from "../../../utils/positioner";
    import RootTab from "./Tabs/RootTab";
    import DraggableTab from "./Tabs/DraggableTab";
    import DraggHelperTab from "./Tabs/DragHelperTab";

    export default function VSCodeRoot({ drag }) {
        const { layer, setLayer, display, setDisplay } = useContext(AppContext);

        const [size, setSize] = useState({ width: "60rem", height: "40rem" });
        const [position, setPosition] = useState(positioner);
        const [items, setItems] = useState([
            {
                trigger: "VSCodeRoot.jsx",
                content: <RootTab />,
            },
            {
                trigger: "Draggable.jsx",
                content: <DraggableTab />,
            },
            {
                trigger: "DragHelper.jsx",
                content: <DraggHelperTab />,
            },
        ]);
        const [selected, setSelected] = useState();

        const dragRef = useRef(null);

        useEffect(() => {
            setSelected(items.at(0)?.trigger);
        }, [items]);

        return (
            <Draggable name={"VSCode"} size={size} position={position}>
                <div
                    className={'flex flex-col bg-black/60 backdrop-blur-sm rounded-t-xl text-sm w-full h-full overflow-hidden'}>
                    <header
                        onMouseDown={(e) => {
                            drag(e, dragRef, position, setPosition);
                        }}
                        style={{
                            height: "2.5rem",
                            width: "full",
                        }}
                        className="flex items-center p-2 bg-black/50 hover:cursor-grabbing">
                        <Avatar src="vscode.png" className="size-5" />

                        <p className="ml-auto font-bold">Visual Studio Code</p>

                        {/* Resizing / Closing */}
                        <div className="flex items-center gap-3 ml-auto">
                            <button
                                className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 hover:bg-white/25"
                                onClick={() => {
                                    const previousIndex = layer.indexOf("VSCode");
                                    setLayer([
                                        "VSCode",
                                        ...layer.slice(0, previousIndex),
                                        ...layer.slice(previousIndex + 1),
                                    ]);
                                }}>
                                <MinusIcon className="size-[10px] stroke-white" />
                            </button>
                            <button
                                className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 hover:bg-white/25"
                                onClick={() => {
                                    const { width, height } = size;
                                    if (width === height && height === "100%") {
                                        // console.log("reset size");
                                        setSize({
                                            width: "60rem",
                                            height: "40rem",
                                        });
                                        setPosition(positioner());
                                    } else {
                                        // console.log("maximize size");
                                        setSize({
                                            width: "100%",
                                            height: "100%",
                                        });
                                        setPosition({ top: 0, left: 0 });
                                    }
                                }}>
                                <StopIcon className="size-[10px] stroke-white" />
                            </button>
                            <button
                                className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 hover:bg-white/25"
                                onClick={() => {
                                    setDisplay(
                                        display.filter(
                                            (app) => app.name !== "VSCode"
                                        )
                                    );
                                    setLayer(layer.slice(0, layer.length - 1));
                                }}>
                                <Cross1Icon className="size-[10px] stroke-white" />
                            </button>
                        </div>
                    </header>
                    <Separator orientation={"horizontal"} size={"4"} />
                    <aside
                        className="flex w-full gap-5 px-2 py-1"
                        style={{ height: "2rem" }}>
                        <span className="hover:cursor-pointer text-white/80 hover:text-white">
                            File
                        </span>
                        <span className="hover:cursor-pointer text-white/80 hover:text-white">
                            Edit
                        </span>
                        <span className="hover:cursor-pointer text-white/80 hover:text-white">
                            Selection
                        </span>
                        <span className="hover:cursor-pointer text-white/80 hover:text-white">
                            View
                        </span>
                        <span className="hover:cursor-pointer text-white/80 hover:text-white">
                            Go
                        </span>
                        <span className="hover:cursor-pointer text-white/80 hover:text-white">
                            Run
                        </span>
                        <span className="hover:cursor-pointer text-white/80 hover:text-white">
                            Terminal
                        </span>
                        <span className="hover:cursor-pointer text-white/80 hover:text-white">
                            Help
                        </span>
                    </aside>

                    <Separator orientation={"horizontal"} size={"4"} />

                    <div className="flex w-full h-full overflow-hidden">
                        <div className="flex w-full h-full gap-10 overflow-hidden">
                            <div className="flex flex-col w-full">
                                <div className="flex">
                                    {items.map((item) => {
                                        return (
                                            <button
                                                key={item.trigger}
                                                className={'flex gap-2 p-1 px-3 text-white/60'}
                                                onClick={() => {
                                                    setSelected(item.trigger);
                                                }}>
                                                <span>{item.trigger}</span>
                                                <span
                                                    className="flex items-center p-1 rounded-full bg-white/15 hover:cursor-pointer"
                                                    onClick={() =>
                                                        setItems(
                                                            items.filter(
                                                                (i) =>
                                                                    i.trigger !==
                                                                    item.trigger
                                                            )
                                                        )
                                                    }>
                                                    <Cross2Icon className="size-3" />
                                                </span>
                                            </button>
                                        );
                                    })}
                                </div>

                                <Separator orientation={"horizontal"} size={"4"} />

                                <div
                                    id="vscode"
                                    className={' max-w-full overflow-y-scroll py-3 font-mono font-normal h-full'}>
                                    {
                                        items?.find(
                                            (item) => item.trigger === selected
                                        )?.content
                                    }
                                </div>
                            </div>
                        </div>

                        <Separator orientation={"vertical"} size={"4"} />
                        <div className="h-full overflow-hidden w-80">
                            <div className="flex items-start justify-between h-full">
                                <div className="flex flex-col w-full gap-5 py-2">
                                    <div className="flex items-center justify-between px-4">
                                        <p>Explorer</p>
                                        <button className="flex items-center justify-center w-6 h-5 rounded-md hover:bg-white/15">
                                            <DotsHorizontalIcon />
                                        </button>
                                    </div>
                                    <div className="flex flex-col gap-2 text-xs">
                                        <button className="flex font-bold">
                                            <CaretRightIcon />
                                            <span>PORTFOLIO</span>
                                        </button>
                                        <button className="flex font-bold">
                                            <CaretRightIcon />
                                            <span>OUTLINE</span>
                                        </button>
                                        <button className="flex font-bold">
                                            <CaretRightIcon />
                                            <span>TIMELINE</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex justify-start h-full">
                                    <Separator
                                        orientation={"vertical"}
                                        size={"4"}
                                    />
                                    <aside className="flex flex-col gap-6 px-3 py-5">
                                        <FileIcon className="size-5 hover:cursor-pointer stroke-white/5 hover:stroke-white/50" />
                                        <MagnifyingGlassIcon className="size-5 hover:cursor-pointer stroke-white/5 hover:stroke-white/50" />
                                        <MixerVerticalIcon className="size-5 hover:cursor-pointer stroke-white/5 hover:stroke-white/50" />
                                        <PlayIcon className="size-5 hover:cursor-pointer stroke-white/5 hover:stroke-white/50" />
                                        <CubeIcon className="size-5 hover:cursor-pointer stroke-white/5 hover:stroke-white/50" />
                                        <LightningBoltIcon className="size-5 hover:cursor-pointer stroke-white/5 hover:stroke-white/50" />

                                        <PersonIcon className="mt-auto size-5 hover:cursor-pointer stroke-white/5 hover:stroke-white/50" />
                                        <GearIcon className="size-5 hover:cursor-pointer stroke-white/5 hover:stroke-white/50" />
                                    </aside>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Separator orientation={"horizontal"} size={"4"} />
                    <aside
                        className="flex items-stretch gap-2"
                        style={{ height: "1.5rem" }}>
                        <button className="p-1" style={{ background: "#0078b9" }}>
                            <DesktopIcon className=" size-3 hover:stroke-white/50" />
                        </button>
                        <button className="flex items-center gap-1 px-2 hover:bg-white/15">
                            <RocketIcon className="size-3" />
                            <span className="text-xs">LaunchPad</span>
                        </button>
                        <button className="flex items-center gap-1 px-2 hover:bg-white/15">
                            <CrossCircledIcon className="size-3" />
                            <span className="text-xs">0</span>
                        </button>
                        <button className="flex items-center gap-1 px-2 hover:bg-white/15">
                            <ExclamationTriangleIcon className="size-3" />
                            <span className="text-xs">0</span>
                        </button>

                        <button className="flex items-center gap-1 px-2 ml-auto hover:bg-white/15">
                            <CodeIcon className="size-3" />
                            <span className="text-xs">Typescript</span>
                        </button>
                        <button className="flex items-center gap-1 px-2 hover:bg-white/15">
                            <CheckIcon className="size-3" />
                            <span className="text-xs">Prettier</span>
                        </button>
                        <button className="flex items-center gap-1 px-2 hover:bg-white/15">
                            <BellIcon className="size-3" />
                            <span className="text-xs"></span>
                        </button>
                    </aside>
                </div>
            </Draggable>
        );
    }

`;

/* eslint no-unused-vars: 0 */
export default function RootTab() {
	return (
		<Highlight theme={themes.oneDark} code={codeBlock} language="jsx">
			{({ className, style, tokens, getLineProps, getTokenProps }) => (
				<pre
					contentEditable
					spellCheck={false}
					className="focus:outline-none">
					{tokens.map((line, i) => (
						<div key={i} {...getLineProps({ line })}>
							<span>{i + 1}</span>
							{line.map((token, key) => (
								<span key={key} {...getTokenProps({ token })} />
							))}
						</div>
					))}
				</pre>
			)}
		</Highlight>
	);
}
