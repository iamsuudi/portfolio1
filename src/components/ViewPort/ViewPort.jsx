function ViewPort({ children }) {
	return (
		<div className="w-full h-full border">
			<div></div>
			{children}
			<div>
				{/* <Progress duration="30s" color="orange" size={"1"} /> */}
			</div>
		</div>
	);
}

export default ViewPort;
