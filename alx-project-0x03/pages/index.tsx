import Button from "@/components/common/Button";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  // This function gives a "command" to the router to change the page
  const routeToNextPage = (pageRoute: string) => {
    router.push(pageRoute);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center text-center px-4">
      {/* Welcome Message */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
        Welcome to Splash App!
      </h1>
      <p className="text-lg text-gray-600 mb-8 max-w-2xl">
        Your one-stop platform for everything AI you need. Start exploring by
        navigating to our features below.
      </p>

      {/* Navigation Buttons */}
      <div className="flex flex-col sm:flex-row gap-6">
        <Button
          action={() => routeToNextPage('/generate-text-ai')}
          buttonLabel="Generate Text"
          buttonBackgroundColor="blue"
        />
        <Button
          action={() => routeToNextPage('/text-to-image')}
          buttonLabel="Text to Image"
          buttonBackgroundColor="green"
        />
        <Button
          action={() => routeToNextPage('/counter-app')}
          buttonLabel="Counter App" 
          buttonBackgroundColor="orange"
        />
      </div>
    </div>
  );
}