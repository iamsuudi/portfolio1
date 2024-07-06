import {
	BoxIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
	CountdownTimerIcon,
	Cross2Icon,
	DotsVerticalIcon,
	DownloadIcon,
	FileTextIcon,
	HamburgerMenuIcon,
	HomeIcon,
	ImageIcon,
	MagnifyingGlassIcon,
	MinusIcon,
	StarFilledIcon,
	VideoIcon,
} from "@radix-ui/react-icons";
import { Avatar } from "@radix-ui/themes";

function Folder({ name }) {
	return (
		<div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/10 hover:cursor-pointer">
			<Avatar
				src="folder.png"
				fallback="A"
				size={'4'}
			/>
			<span className="text-sm">{name}</span>
		</div>
	);
}

function ViewPort({ children }) {
	return (
		<div className="w-full h-full border">
			<div></div>
			{children}
			<div className="flex w-full h-[500px] bg-black/80 backdrop-blur-sm">
				<div className="flex flex-col w-56 gap-5 p-3 text-sm bg-black/5 backdrop-blur-sm">
					<div className="flex items-center justify-between w-full ">
						<button className="p-2 rounded-md hover:bg-white/15">
							<MagnifyingGlassIcon />
						</button>
						<span className="text-sm font-bold">Files</span>
						<button className="p-2 rounded-md hover:bg-white/15">
							<HamburgerMenuIcon />
						</button>
					</div>
					<div className="flex flex-col gap-2 ">
						<button className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/15">
							<CountdownTimerIcon className="size-4" />
							<span className="">Recent</span>
						</button>
						<button className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/15">
							<StarFilledIcon className="" />
							<span className="">Starred</span>
						</button>
						<button className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/15">
							<HomeIcon className="" />
							<span className="">Home</span>
						</button>
						<button className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/15">
							<FileTextIcon className="" />
							<span className="">Documents</span>
						</button>
						<button className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/15">
							<CountdownTimerIcon className="" />
							<span className="">Projects</span>
						</button>
						<button className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/15">
							<DownloadIcon className="" />
							<span className="">Downloads</span>
						</button>
						<button className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/15">
							<ImageIcon className="" />
							<span className="">Pictures</span>
						</button>
						<button className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/15">
							<VideoIcon className="" />
							<span className="">Videos</span>
						</button>
					</div>
				</div>

				<div className="flex flex-col w-full gap-10 p-3 text-sm">
					<div className="flex w-full gap-5">
						<div className="flex gap-2">
							<button className="p-2 rounded-md hover:bg-white/15">
								<ChevronLeftIcon />
							</button>
							<button className="p-2 rounded-md hover:bg-white/15">
								<ChevronRightIcon />
							</button>
						</div>

						<div className="flex items-center w-full gap-3 px-4 py-2 bg-white/15 max-w-[35rem] rounded-lg">
							<HomeIcon className="" />
							<div className="font-bold">Home / Books</div>
							<button className="ml-auto">
								<DotsVerticalIcon />
							</button>
						</div>

						<div className="flex items-center gap-3 ml-auto">
							<button className="flex items-center justify-center rounded-full w-7 h-7 bg-white/15">
								<MinusIcon className="" />
							</button>
							<button className="flex items-center justify-center rounded-full w-7 h-7 bg-white/15">
								<BoxIcon className="" />
							</button>
							<button className="flex items-center justify-center rounded-full w-7 h-7 bg-white/15">
								<Cross2Icon className="" />
							</button>
						</div>
					</div>
					
					<div className="flex flex-col gap-1">
						<Folder name={"folder 1"} />
						<Folder name={"folder 2"} />
						<Folder name={"folder 3"} />
						<Folder name={"folder 4"} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default ViewPort;
