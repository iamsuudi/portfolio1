import WorkbenchIcon from "../../assets/WorkbenchIcon";
import NightIcon from "../../assets/NightIcon";
import WifiIcon from "../../assets/WifiIcon";
import SoundIcon from "../../assets/SoundIcon";
import BatteryIcon from "../../assets/BatteryIcon";

export default function HeaderBar() {
  return (
    <div className="flex items-center justify-between w-full backdrop-blur-lg bg-black/30">
      <div className="flex px-4 py-1 rounded-2xl hover:bg-white/10">
        <button className="">
          <WorkbenchIcon stroke={5} />
        </button>
      </div>
      <div className="px-4 py-1 rounded-2xl hover:bg-white/10">
        <button className="text-sm ">{new Date().toDateString()}</button>
      </div>
      <div className="px-4 py-1 rounded-2xl hover:bg-white/10">
        <button className="flex items-center gap-3 ">
          <span className="text-sm">
            <NightIcon size={4} stroke={2} />
          </span>
          <span className="text-sm">
            <WifiIcon size={4} stroke={2} />
          </span>
          <span className="text-sm">
            <SoundIcon size={4} stroke={2} />
          </span>
          <span className="flex items-center text-sm">
            <BatteryIcon size={4} stroke={2} /> 53%
          </span>
        </button>
      </div>
    </div>
  );
}
