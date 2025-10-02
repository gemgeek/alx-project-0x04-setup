import Link from "next/link";
import Button from "../common/Button";
import { usePathname } from "next/navigation";
import { useAppSelector } from "@/store/store";

const Header: React.FC = () => {
  const pathname = usePathname();
  // Get the current count value from the Redux store
  const count = useAppSelector((state) => state.counter.value);

  return (
    <header className="fixed w-full bg-white shadow-md z-10">
      <div className="container mx-auto flex justify-between items-center py-6 px-4 md:px-8">
        <Link href="/" className="text-3xl md:text-5xl font-bold text-gray-800 tracking-tight">
          Splash App
        </Link>
        <div className="flex gap-4 items-center">
          { !["/counter-app"].includes(pathname as string) ? (
            <>
              <Button buttonLabel="Sign In" buttonBackgroundColor="red" />
              <Button buttonLabel="Sign Up" buttonBackgroundColor="blue" />
            </>
          ) : (
            <p className="font-semibold text-lg">Header Count (Redux): {count}</p>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;