import { Pencil, Trash } from "lucide-react";

function App() {
  const tasks = [
    "Learn Coding",
    "Play Football",
    "Talk to Friends",
    "Smile...",
  ];

  return (
    <section className="flex justify-center items-center min-h-screen">
      <section className="p-5 shadow-xl rounded-xl bg-green-100 h-96 w-[90%] max-w-md">
        <form className="flex justify-between gap-5">
          <input
            type="text"
            placeholder="Write Your task here.."
            className="px-4 border-2 border-green-600 w-3/4 h-10 rounded"
          />
          <button className="bg-green-600 h-10 w-1/4 rounded text-white">
            Add
          </button>
        </form>
        <ul className="mt-5 grid gap-2 divide-y divide-gray-400">
          {tasks.map((task) => (
            <li className="flex justify-between pb-2">
              <span>{task}</span>

              <div className="flex gap-2">
                <Pencil
                  size={20}
                  className="text-gray-500 cursor-pointer hover:text-gray-900"
                />

                <Trash
                  size={20}
                  className="text-gray-500 cursor-pointer hover:text-red-600"
                />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}

export default App;
