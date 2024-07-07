import {
	Avatar,
	Box,
	Dialog,
	Heading,
	HoverCard,
	Separator,
	Tooltip,
} from "@radix-ui/themes";
import { useContext } from "react";
import { AppContext } from "../Window";
import { RootFolder } from "../FileManager/RootFolder";

const items = [
	{
		avatar: "vscode.png",
		title: "Visual Studio Code",
		description: "Code Editor",
	},
	{
		avatar: "https://vivaldi.com/wp-content/uploads/cropped-favicon-270x270.png",
		description: "Vivaldi Browser",
		title: "Vivaldi",
	},
	{
		avatar: "bash.png",
		description: "Bash Scripting",
		title: "Bash",
	},
	{
		avatar: "https://cdn.prod.website-files.com/64b6f3636f598299028e8577/64b6ffd4f3b22e830de0bfb1_Webclip%20-%20Warp.png",
		description: "Terminal Code And Text Editor",
		title: "Warp",
	},
	{
		avatar: "linux.png",
		description: "Linux OS",
		title: "Linux",
	},
	{
		avatar: "discord.png",
		description: "Community of Developers",
		title: "Discord",
	},
	{
		avatar: "git.png",
		description: "Version Control System",
		title: "Git",
	},
	{
		avatar: "https://github.com/fluidicon.png",
		description: "Open Source Community",
		title: "Github",
	},
	{
		avatar: "vite.png",
		description: "Development Environment",
		title: "Vite",
	},
	{
		avatar: "webpack.png",
		description: "Bundling Tool",
		title: "Webpack",
	},
	{
		avatar: "slack.png",
		description: "Project And Team Management",
		title: "Slack",
	},
	{
		avatar: "figma.png",
		description: "Design Tool",
		title: "Figma",
	},
	{
		avatar: "mui.png",
		description: "Component UI",
		title: "Material UI",
	},
	{
		avatar: "https://www.radix-ui.com/favicon.png",
		description: "Component UI",
		title: "Radix UI",
	},
	{
		avatar: "https://img.daisyui.com/images/daisyui-logo/favicon-192.png",
		description: "Coponent UI",
		title: "Daisy UI",
	},
	{
		avatar: "https://ui.shadcn.com/apple-touch-icon.png",
		description: "Component UI",
		title: "Shadcn/ui",
	},
	{
		avatar: "js.png",
		description: "Javascript Lang",
		title: "Javascript",
	},
	{
		avatar: "react.png",
		description: "Frontend Javascript Framework",
		title: "React.js",
	},
	{
		avatar: "https://reactrouter.com/favicon-dark.png",
		description: "Single Page Applications And Routing",
		title: "React Router",
	},
	{
		avatar: "redux.png",
		description: "State Management in React",
		title: "Redux Toolkit",
	},
	{
		avatar: "node.png",
		description: "Backend Javascript Running Environment",
		title: "Node.js",
	},
	{
		avatar: "https://expressjs.com/images/favicon.png",
		description: "Backend Framework",
		title: "Express.js",
	},
	{
		avatar: "ts.png",
		description: "Typescript Lang",
		title: "TypeScript",
	},
	{
		avatar: "graphql.png",
		description: "GraphQL API",
		title: "GraphQL",
	},
	{
		avatar: "https://www.apollographql.com/favicon/apple-icon-180x180.png",
		description: "Apollo GraphQL Server",
		title: "Apollo",
	},
	{
		avatar: "https://restfulapi.net/wp-content/uploads/cropped-rest-192x192.png",
		description: "Restful API",
		title: "RestAPI",
	},
	{
		avatar: "babel.png",
		description: "Javascript Transcompiler",
		title: "Babel",
	},
	{
		avatar: "mongodb.png",
		description: "Mongo Database",
		title: "MongoDB",
	},
	{
		avatar: "mongoose.png",
		description: "Object Document Model",
		title: "Mongoose",
	},
	{
		avatar: "jest.png",
		description: "Testing Framework",
		title: "Jest",
	},
	{
		avatar: "playwright.png",
		description: "End To End Testing Framework",
		title: "Playwright",
	},
	{
		avatar: "https://vitest.dev/apple-touch-icon.png",
		description: "Testing Framework",
		title: "Vitest",
	},
	{
		avatar: "https://nodejs.org/static/images/favicons/favicon.png",
		description: "Native Node Testing",
		title: "Node - Test",
	},
	{
		avatar: "py.png",
		description: "Python Lang",
		title: "Python",
	},
	{
		avatar: "postcss.png",
		description: "CSS Compiler",
		title: "PostCSS",
	},
	{
		avatar: "tailwind.png",
		description: "CSS Framework",
		title: "TailwindCSS",
	},
	{
		avatar: "eslint.png",
		description: "Javascript Code Analysis",
		title: "ESLint",
	},
];

function ToolButton({ item }) {
	return (
		<HoverCard.Root>
			<HoverCard.Trigger>
				<button className="flex flex-col items-center gap-2 p-4 h-fit rounded-xl hover:bg-white/10">
					<Avatar size={"5"} src={item.avatar} className="" />
				</button>
			</HoverCard.Trigger>
			<HoverCard.Content className="flex flex-col gap-5 px-5 py-3 w-60 backdrop-blur-lg bg-black/60">
				<h3 className="text-xl font-black">{item.title}</h3>
				<p className="text-sm">{item.description}</p>
			</HoverCard.Content>
		</HoverCard.Root>
	);
}

export default function SideBar() {
	const { layer, setLayer, display, setDisplay } = useContext(AppContext);

	return (
		<div className="flex flex-col justify-center h-full ml-auto w-[70px]">
			<Box className="flex flex-col items-center w-full py-4 rounded-2xl h-fit backdrop-blur-md bg-black/40 max-w-96">
				<button
					className="flex p-3 rounded-xl hover:bg-white/10"
					onClick={() => {
						if (!display.find((app) => app.name === "FileManager"))
							setDisplay(
								display.concat({
									name: "FileManager",
									component: <RootFolder />,
								})
							);
						else {
							const previousIndex = layer.indexOf("FileManager");
							setLayer([
								...layer.slice(0, previousIndex),
								...layer.slice(previousIndex + 1),
								"FileManager",
							]);
						}
					}}>
					<Tooltip content="Directories">
						<Avatar size={3} src="folder.png" className="" />
					</Tooltip>
				</button>
				<button className="flex p-3 rounded-xl hover:bg-white/10">
					<Tooltip content="Visual Studio Code" className="">
						<Avatar size={3} src="vscode.png" className="" />
					</Tooltip>
				</button>

				<button className="flex p-3 rounded-xl hover:bg-white/10">
					<Tooltip content="Vivaldi Browser">
						<Avatar
							size={3}
							src="https://vivaldi.com/wp-content/uploads/cropped-favicon-270x270.png"
							className=""
						/>
					</Tooltip>
				</button>

				<button className="flex p-3 rounded-xl hover:bg-white/10">
					<Tooltip content="Warp Terminal">
						<Avatar
							size={3}
							src="https://cdn.prod.website-files.com/64b6f3636f598299028e8577/64b6ffd4f3b22e830de0bfb1_Webclip%20-%20Warp.png"
							className=""
						/>
					</Tooltip>
				</button>

				<Separator size={"3"} />

				<button className="flex p-3 rounded-xl hover:bg-white/10">
					<Tooltip content="Trash Bin">
						<Avatar size={3} src="trash.png" className="" />
					</Tooltip>
				</button>

				<Dialog.Root>
					<Dialog.Title hidden>Tools</Dialog.Title>
					<Dialog.Trigger>
						<button className="flex justify-center w-full p-3 rounded-xl hover:bg-white/10">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								className="size-8"
								viewBox="0 0 16 16">
								<path d="M2.273 9.53a2.273 2.273 0 1 0 0-4.546 2.273 2.273 0 0 0 0 4.547Zm9.467-4.984a2.273 2.273 0 1 0 0-4.546 2.273 2.273 0 0 0 0 4.546M7.4 13.108a5.54 5.54 0 0 1-3.775-2.88 3.27 3.27 0 0 1-1.944.24 7.4 7.4 0 0 0 5.328 4.465c.53.113 1.072.169 1.614.166a3.25 3.25 0 0 1-.666-1.9 6 6 0 0 1-.557-.091m3.828 2.285a2.273 2.273 0 1 0 0-4.546 2.273 2.273 0 0 0 0 4.546m3.163-3.108a7.44 7.44 0 0 0 .373-8.726 3.3 3.3 0 0 1-1.278 1.498 5.57 5.57 0 0 1-.183 5.535 3.26 3.26 0 0 1 1.088 1.693M2.098 3.998a3.3 3.3 0 0 1 1.897.486 5.54 5.54 0 0 1 4.464-2.388c.037-.67.277-1.313.69-1.843a7.47 7.47 0 0 0-7.051 3.745" />
							</svg>
						</button>
					</Dialog.Trigger>
					<Dialog.Content className="w-[80dvh] h-[80dvh] outline-none bg-transparent backdrop-blur-md flex flex-col gap-5">
						<Heading size={"8"} className="font-bold text-center">
							Tools
						</Heading>
						<div
							id="notification-panel"
							tabIndex={4}
							className="flex flex-wrap items-start justify-start h-full py-5 overflow-y-scroll gap-y-8 gap-x-4">
							{items.map((item) => {
								return (
									<ToolButton key={item.avatar} item={item} />
								);
							})}
						</div>
					</Dialog.Content>
				</Dialog.Root>
			</Box>
		</div>
	);
}
