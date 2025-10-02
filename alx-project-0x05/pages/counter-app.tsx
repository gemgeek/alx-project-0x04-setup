import { useCount } from '@/context/CountContext';

const CounterApp: React.FC = () => {
  const { count, increment, decrement } = useCount();

  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-400 to-pink-500 flex flex-col justify-center items-center text-white text-center p-4">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-6">🤖 Fun Counter App 🎉</h1>
      <p className="text-lg font-medium mb-4">Page Count: {count}</p>
      <div className="text-6xl font-bold mb-8">{count}</div>
      <div className="flex space-x-4">
        <button onClick={increment} className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-full text-lg">Increment 🚀</button>
        <button onClick={decrement} className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-full text-lg">Decrement 👎</button>
      </div>
      <p className="mt-8 text-sm text-white opacity-75">Notice how the count in the header changes too!</p>
    </div>
  );
}

export default CounterApp;