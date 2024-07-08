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
		Math.min(window.innerWidth - 70 - 60 * 16, startLeft + dx)
	); // 60rem in pixels

	setPosition({ top: newTop, left: newLeft });
};

export const stopDragging = (e, handleDrag, stopDragging, dragRef) => {
	document.removeEventListener("mousemove", handleDrag);
	document.removeEventListener("mouseup", stopDragging);
	dragRef.current = null;
};
