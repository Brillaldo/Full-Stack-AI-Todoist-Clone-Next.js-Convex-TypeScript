import Tasks from "@/components/todovex/task";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    
      <main className="flex -screen flex-col items-center justify-between p-24">
        <h1>Todovex</h1>
        <Button variant={"outline"}>Hi</Button>
       
      <Tasks/>
      </main>
      
    
  );
}
