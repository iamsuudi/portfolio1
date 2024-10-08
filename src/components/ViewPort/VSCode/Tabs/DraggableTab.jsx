import { Highlight, themes } from "prism-react-renderer";

const codeBlock = `
    import { useContext } from "react";
    import { AppContext } from "../Window";

    export default function Draggable({ name, size, position, children }) {
        const { layer, setLayer, mode, setMode } = useContext(AppContext);

        if (mode === "Recent")
            return (
                <div
                    style={{
                        width: "50%",
                        height: "50%",
                        transform: "scale(0.95)",
                        transformOrigin: "center",
                        aspectRatio: "3/2",
                        overflow: "hidden",
                    }}
                    className="relative">
                    <button
                        className="absolute z-10 w-full h-full"
                        onClick={() => {
                            const previousIndex = layer.indexOf(name);
                            if (previousIndex + 1 !== layer.length)
                                setLayer([
                                    ...layer.slice(0, previousIndex),
                                    ...layer.slice(previousIndex + 1),
                                    name,
                                ]);
                            setMode("Normal");
                        }}></button>
                    <div className="w-full h-full">{children}</div>
                </div>
            );

        return (
            <div
                style={{
                    width: size.width,
                    height: size.height,
                    maxWidth: "100%",
                    maxHeight: "100%",
                    position: "absolute",
                    top: position.top,
                    left: position.left,
                    zIndex: layer.indexOf(name),
                }}
                onClick={() => {
                    const previousIndex = layer.indexOf(name);
                    if (previousIndex + 1 !== layer.length)
                        setLayer([
                            ...layer.slice(0, previousIndex),
                            ...layer.slice(previousIndex + 1),
                            name,
                        ]);
                }}>
                {children}
            </div>
        );
    }
`;

/* eslint no-unused-vars: 0 */
export default function DraggableTab() {
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
