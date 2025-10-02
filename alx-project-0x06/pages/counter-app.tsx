import { useSelector } from "react-redux"; 
import { type RootState, useAppDispatch, type AppDispatch, increment, decrement } from "@/store/store";

const CounterApp: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch: AppDispatch = useAppDispatch();

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-teal-500 flex flex-col justify-center items-center text-white text-center p-4">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-6">🤖 Redux Counter App ⚙️</h1>
      <div className="text-6xl font-bold mb-8">{count}</div>
      <div className="flex space-x-4">
        <button
          onClick={() => dispatch(increment())}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-full text-lg"
        >
          Increment 🚀
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-full text-lg"
        >
          Decrement 👎
        </button>
      </div>
      <p className="mt-8 text-sm text-white opacity-75">
        This state is now managed by Redux!
      </p>
    </div>
  );
};

export default CounterApp;