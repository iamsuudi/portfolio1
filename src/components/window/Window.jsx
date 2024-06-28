import HeaderBar from "./Heading";

/* eslint react/prop-types: 0 */
export default function Window({ children }) {
  return (
    <div
      style={{ backgroundImage: "url('242478.jpg')" }}
      id="window"
      className="w-[100dvw] h-[100dvh]"
    >
      <HeaderBar />
      {children}
    </div>
  );
}
