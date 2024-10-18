import Image from "next/image";
import Todolist from "@/components/Todolist";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-my_bg_image bg-contain">
      <Todolist title="To-Do List"></Todolist>
    </main>
  );
}
