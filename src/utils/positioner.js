const positioner = () => {
	const width = window.innerWidth - 60;
	const height = window.innerHeight - 32;
	const top = (height - 40 * 16) / 2;
	const left = (width - 60 * 16) / 2;
	return { top, left };
};

export default positioner;
