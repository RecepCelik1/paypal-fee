import Image from "next/image";
import App from "./components/app";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gray-800 flex justify-center items-center">
      <App/>
    </div>
  );
}
