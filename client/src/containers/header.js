import { FiMenu } from "react-icons/fi";

export function HeaderContainer({ ...props }) {
  return (
    <header className="header p-3 flex sticky top-0 inset-x-0 items-center justify-between">
      <FiMenu style={{ color: "#fff", fontSize: "1.5em" }} />
      <div className="image w-6 h-6 rounded-full bg-gray-500"></div>
    </header>
  );
}
