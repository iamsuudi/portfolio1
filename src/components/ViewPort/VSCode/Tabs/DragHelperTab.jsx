import { Highlight, themes } from "prism-react-renderer";

const codeBlock = `
    export const startDragging = (
        e,
        dragRef,
        position,
        setPosition,
        containerRef,
        stopDragging,
        handleDrag
    ) => {
        dragRef.current = {
            startX: e.clientX,
            startY: e.clientY,
            startTop: position.top,
            startLeft: position.left,
        };
        document.addEventListener("mousemove", (e) => {
            handleDrag(e, dragRef, setPosition);
        });
        document.addEventListener("mouseup", (e) => {
            stopDragging(e, handleDrag, stopDragging, dragRef);
        });
    };

    export const handleDrag = (e, dragRef, setPosition) => {
        if (!dragRef.current) return;

        const { startX, startY, startTop, startLeft } = dragRef.current;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;

        const newTop = Math.max(
            0,
            Math.min(window.innerHeight - 32 - 40 * 16, startTop + dy)
        ); // 45rem in pixels
        const newLeft = Math.max(
            0,
            Math.min(window.innerWidth - 60 - 60 * 16, startLeft + dx)
        ); // 60rem in pixels

        setPosition({ top: newTop, left: newLeft });
    };

    export const stopDragging = (e, handleDrag, stopDragging, dragRef) => {
        document.removeEventListener("mousemove", handleDrag);
        document.removeEventListener("mouseup", stopDragging);
        dragRef.current = null;
    };

`;

/* eslint no-unused-vars: 0 */
export default function DraggHelperTab() {
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
