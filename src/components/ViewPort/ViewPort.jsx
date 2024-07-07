import { RootFolder } from "../FileManager/RootFolder";


function ViewPort({ children }) {
	return (
		<div className="w-full h-full border">
			<div></div>
			
			{children}
			
			<RootFolder />
		</div>
	);
}

export default ViewPort;
