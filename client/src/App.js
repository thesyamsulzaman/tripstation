import { FiMenu } from "react-icons/fi";

function App() {
  return (
    <section className="bg-indigo-800 h-screen">
      <header className="header p-3 flex items-center justify-between">
        <FiMenu style={{ color: "#fff", fontSize: "1.5em" }} />
        <ul className="flex justify-around">
          <li>O</li>
        </ul>
      </header>
      <div className="user-banner p-3">
        <h1 className="text-gray-200 text-bold text-2xl tracking-wide">Hi, Syamsul</h1>
        <p className="text-gray-400 tracking-wide text-sm mt-1">Find people to go on a travel with</p>
      </div>
      <div className="container p-3 mt-2 h-screen bg-white rounded-xl">
        <div className="badges mt-2 border-2 border-teal-900">
          <p className="text-xs">
            Recommended
          </p>
        </div>
        <div className="posts border-2 border-teal-800"></div>
      </div>
    </section>
  );
}

export default App;
