import HeaderBar from "./Heading";
import SideBar from "./SideBar";

/* eslint react/prop-types: 0 */
export default function Window({ children }) {
    return (
        <div
            style={{ backgroundImage: "url('242478.jpg')" }}
            id="window"
            className="w-[100dvw] h-[100dvh] relative flex flex-col"
        >
            <HeaderBar />
            <div className="flex w-full h-full">
                <div className="w-full h-full border">{children}</div>
                <SideBar />
            </div>
        </div>
    );
}
