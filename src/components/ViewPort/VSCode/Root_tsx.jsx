import { useEffect } from "react";

export default function Root_tsx() {
	useEffect(() => {
		const parentDiv = document.getElementById("parentDiv");
		parentDiv.setAttribute("contentEditable", "true");
		parentDiv.setAttribute("spellcheck", "false");
		parentDiv.setAttribute("autocomplete", "off");

		if (parentDiv) {
			const editableTags = parentDiv.querySelectorAll("p, span");
			editableTags.forEach((tag) => {
				tag.setAttribute("contentEditable", "true");
				tag.setAttribute("spellcheck", "false");
				tag.setAttribute("autocomplete", "off");
			});
		}
	}, []);

	return (
		<div id="parentDiv" className="outline-none">
			<p className="flex gap-3 px-5">
				<span className="flex justify-end w-6">1</span>
				<span className="text-purple-500">import</span>
				<span className="text-yellow-500">{"{"}</span>
				<span className="text-cyan-300">
					Avatar, Separator, Tabs, Text
				</span>
				<span className="text-yellow-500">{"}"}</span>
				<span className="text-purple-500">from</span>
				<span className="text-amber-500">{`"@radix-ui/themes"`}</span>
			</p>

			<p className="flex gap-3 px-5">
				<span className="flex justify-end w-6">2</span>
				<span className="text-purple-500">import</span>
				<span className="text-yellow-500">{"{"}</span>
				<span className="text-cyan-300">
					useContext, useState, useRef
				</span>
				<span className="text-yellow-500">{"}"}</span>
				<span className="text-purple-500">from</span>
				<span className="text-amber-500">{`"react"`}</span>
			</p>

			<p className="flex gap-3 px-5">
				<span className="flex justify-end w-6">3</span>
				<span className="text-purple-500">import</span>
				<span className="text-yellow-500">{"{"}</span>
				<span className="text-cyan-300">AppContext</span>
				<span className="text-yellow-500">{"}"}</span>
				<span className="text-purple-500">from</span>
				<span className="text-amber-500">{`"../../window"`}</span>
			</p>

			<p className="flex gap-3 px-5">
				<span className="flex justify-end w-6">4</span>
				<span className="text-purple-500">import</span>
				<span className="text-yellow-500">{"{"}</span>
				<span className="text-cyan-300">Draggable</span>
				<span className="text-yellow-500">{"}"}</span>
				<span className="text-purple-500">from</span>
				<span className="text-amber-500">{`"../Draggable"`}</span>
			</p>

			<p className="px-5">
				<span className="flex justify-end w-6">5</span>
			</p>

			<div className="flex flex-col pl-5">
				<p className="flex gap-3">
					<span className="flex justify-end w-6">6</span>
					<span className="text-purple-500">export default</span>
					<span className="text-blue-500">function</span>
					<span className="text-yellow-500">VSCodeRoot</span>
					<span className="text-yellow-500">{"({"}</span>
					<span className="text-blue-300">drag</span>
					<span className="text-yellow-500">{"})"}</span>
					<span className="text-yellow-500">{"{"}</span>
				</p>

				<div className="flex gap-3">
					<span className="flex justify-end w-6">7</span>
					<div className="flex px-5">
						{`const { layer, setLayer, display, setDisplay } = `}
						<span className="ml-2 text-yellow-300">useContext</span>
						{`(`}
						<span className="text-cyan-300">AppContext</span>
						{`)`}
					</div>
				</div>

				<div className="flex gap-3">
					<span className="flex justify-end w-6">8</span>
					<div className="flex px-5">
						{`const [ size, setSize ] = `}
						<span className="ml-2 text-yellow-300">useState</span>
						{`({ width: "60rem", height: "40rem" })`}
					</div>
				</div>

				<div className="flex gap-3">
					<span className="flex justify-end w-6">9</span>
					<div className="flex px-5">
						{`const [ position, setPosition ] =`}
						<span className="ml-2 text-yellow-300">useState</span>
						{`({ top: 0, left: 0 })`}
					</div>
				</div>

				<div className="flex gap-3">
					<span className="flex justify-end w-6">10</span>
					<div className="flex px-5">
						{`const [items, setItems] =`}
						<span className="ml-2 text-yellow-300">useState</span>
						{`(sometabs)`}
					</div>
				</div>

				<div className="flex gap-3">
					<span className="flex justify-end w-6">11</span>
					<div className="flex px-5">
						{`const dragRef =`}
						<span className="ml-2 text-yellow-300">useRef</span>
						{`(null)`}
					</div>
				</div>

				<p className="px-0">
					<span className="flex justify-end w-6">12</span>
				</p>

				<div className="flex gap-3">
					<span className="flex justify-end w-6">13</span>
					<div className="flex px-5 text-red-700">{`return (`}</div>
				</div>

				<div className="flex flex-col">
					<div className="flex gap-12">
						<span className="flex justify-end w-6">14</span>
						<div className="flex pl-5">
							{`<Draggable name={"VSCode"} size={size} position={position}>`}
						</div>
					</div>
					<div className="flex gap-12">
						<span className="flex justify-end w-6">15</span>
						<div className="flex pl-14">
							{`<div className="flex flex-col w-full h-full text-sm rounded-t-xl">`}
						</div>
					</div>
					<div className="flex gap-12">
						<span className="flex justify-end w-6">16</span>
						<div className="flex pl-24">
							{`<header onMouseDown={handleDrag}>`}
						</div>
					</div>
					<div className="flex gap-12">
						<span className="flex justify-end w-6">17</span>
						<div className="flex pl-28">
							{`<Avatar src="vscode.png" className="size-5" />`}
						</div>
					</div>
					<div className="flex gap-12">
						<span className="flex justify-end w-6">18</span>
						<div className="flex pl-28">
							{`<p className="ml-auto font-bold">Visual Studio Code</p>`}
						</div>
					</div>
					<div className="flex gap-12">
						<span className="flex justify-end w-6">19</span>
						<div className="flex pl-28">
							{`<div className="flex items-center gap-3 ml-auto">`}
						</div>
					</div>
					<div className="flex gap-12">
						<span className="flex justify-end w-6">20</span>
						<div className="flex pl-36">
							{`<button onClick={loseFocus}>`}
						</div>
					</div>
					<div className="flex gap-12">
						<span className="flex justify-end w-6">21</span>
						<div className="flex pl-36">
							{`<button onClick={reSize}>`}
						</div>
					</div>
					<div className="flex gap-12">
						<span className="flex justify-end w-6">22</span>
						<div className="flex pl-36">
							{`<button onClick={exit}>`}
						</div>
					</div>
					<div className="flex gap-12">
						<span className="flex justify-end w-6">23</span>
						<div className="flex pl-24">{`</header>`}</div>
					</div>
					<div className="flex gap-12">
						<span className="flex justify-end w-6">24</span>
						<div className="flex pl-24">
							{`<aside className="flex w-full gap-5 px-2 py-1">`}
						</div>
					</div>
					<div className="flex gap-12">
						<span className="flex justify-end w-6">25</span>
						<div className="flex pl-32">
							{`<button> File </button>`}
						</div>
					</div>
					<div className="flex gap-12">
						<span className="flex justify-end w-6">26</span>
						<div className="flex pl-32">
							{`<button> Edit </button>`}
						</div>
					</div>
					<div className="flex gap-12">
						<span className="flex justify-end w-6">27</span>
						<div className="flex pl-32">
							{`<button> Selection </button>`}
						</div>
					</div>
					<div className="flex gap-12">
						<span className="flex justify-end w-6">28</span>
						<div className="flex pl-32">
							{`<button> View </button>`}
						</div>
					</div>
					<div className="flex gap-12">
						<span className="flex justify-end w-6">29</span>
						<div className="flex pl-32">
							{`<button> Go </button>`}
						</div>
					</div>
					<div className="flex gap-12">
						<span className="flex justify-end w-6">30</span>
						<div className="flex pl-32">
							{`<button> Run </button>`}
						</div>
					</div>
					<div className="flex gap-12">
						<span className="flex justify-end w-6">31</span>
						<div className="flex pl-32">
							{`<button> Terminal </button>`}
						</div>
					</div>
					<div className="flex gap-12">
						<span className="flex justify-end w-6">32</span>
						<div className="flex pl-32">
							{`<button> Help </button>`}
						</div>
					</div>
					<div className="flex gap-12">
						<span className="flex justify-end w-6">33</span>
						<div className="flex pl-24">{`</aside>`}</div>
					</div>
					<div className="flex gap-12">
						<span className="flex justify-end w-6">34</span>
						<div className="flex pl-24">
							{`<Separator orientation={"horizontal"} size={"4"} />`}
						</div>
					</div>
					<div className="flex gap-12">
						<span className="flex justify-end w-6">35</span>
						<div className="flex pl-24">
							{`<div className="h-full w-80">`}
						</div>
					</div>
					<div className="flex gap-12">
						<span className="flex justify-end w-6">36</span>
						<div className="flex pl-32">
							{`<div className="flex items-start justify-between h-full">`}
						</div>
					</div>
					<div className="flex gap-12">
						<span className="flex justify-end w-6">37</span>
						<div className="flex pl-40">
							{`<div className="flex flex-col w-full gap-5 py-2">`}
						</div>
					</div>
					<div className="flex gap-12">
						<span className="flex justify-end w-6">38</span>
						<div className="flex pl-40">
							{`<div className="flex justify-between px-4">`}
						</div>
					</div>
					<div className="flex gap-12">
						<span className="flex justify-end w-6">39</span>
						<div className="flex pl-48">{`<p>Explorer</p>`}</div>
					</div>
					<div className="flex gap-12">
						<span className="flex justify-end w-6">40</span>
						<div className="flex pl-48">
							{`<button> <DotsHorizontalIcon /> </button>`}
						</div>
					</div>
					<div className="flex gap-12">
						<span className="flex justify-end w-6">40</span>
						<div className="flex pl-40">{`</div>`}</div>
					</div>
					<div className="flex gap-12">
						<span className="flex justify-end w-6">41</span>
						<div className="flex pl-40">
							{`<Separator orientation={"horizontal"} size={"4"} />`}
						</div>
					</div>
					<div className="flex gap-12">
						<span className="flex justify-end w-6">42</span>
						<div className="flex pl-40">
							{`<aside className="flex items-stretch gap-2">`}
						</div>
					</div>
					<div className="flex gap-12">
						<span className="flex justify-end w-6">44</span>
						<div className="flex pl-48">
							{`<button> <DesktopIcon /> </button>`}
						</div>
					</div>
					<div className="flex gap-12">
						<span className="flex justify-end w-6">45</span>
						<div className="flex pl-48">
							{`<button> <RocketIcon /> </button>`}
						</div>
					</div>
					<div className="flex gap-12">
						<span className="flex justify-end w-6">46</span>
						<div className="flex pl-48">
							{`<button> <CrossCircledIcon /> </button>`}
						</div>
					</div>
					<div className="flex gap-12">
						<span className="flex justify-end w-6">47</span>
						<div className="flex pl-48">
							{`<button> <ExclamationTriangleIcon /> </button>`}
						</div>
					</div>
					<div className="flex gap-12">
						<span className="flex justify-end w-6">48</span>
						<div className="flex pl-48">
							{`<button> <CodeIcon /> </button>`}
						</div>
					</div>
					<div className="flex gap-12">
						<span className="flex justify-end w-6">49</span>
						<div className="flex pl-48">
							{`<button> <CheckIcon /> </button>`}
						</div>
					</div>
					<div className="flex gap-12">
						<span className="flex justify-end w-6">50</span>
						<div className="flex pl-48">
							{`<button> <BellIcon /> </button>`}
						</div>
					</div>
					<div className="flex gap-12">
						<span className="flex justify-end w-6">51</span>
						<div className="flex pl-40">{`</aside>`}</div>
					</div>
					<div className="flex gap-12">
						<span className="flex justify-end w-6">52</span>
						<div className="flex pl-32">{`</div>`}</div>
					</div>
					<div className="flex gap-12">
						<span className="flex justify-end w-6">53</span>
						<div className="flex pl-28">{`</div>`}</div>
					</div>
					<div className="flex gap-12">
						<span className="flex justify-end w-6">54</span>
						<div className="flex pl-14">{`</div>`}</div>
					</div>
					<div className="flex gap-12">
						<span className="flex justify-end w-6">55</span>
						<div className="flex pl-4">{`</Draggable>`}</div>
					</div>
					<div className="flex gap-10">
						<span className="flex justify-end w-6">56</span>
						<div className="flex text-red-700">{`)`}</div>
					</div>
				</div>

				<p className="flex gap-5">
					<span className="flex justify-end w-6">57</span>
					<span className="text-yellow-500">{"}"}</span>
				</p>
			</div>
		</div>
	);
}
