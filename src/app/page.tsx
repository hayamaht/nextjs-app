
import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="md:flex gap-10 container mx-auto p-10 space-y-10">
      <div className="flex-1 flex flex-col gap-10">
        <h1 className="text-5xl md:text-8xl font-bold">Creative Thoughts Agency.</h1>
        <p className="text-2xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          blanditiis adipisci minima reiciendis a autem assumenda dolore.
        </p>
        <div className="flex space-x-4 ">
          <Button className="font-bold">Learn More</Button>
          <Button variant={'ghost'} className="">Contact</Button>
        </div>
        <div className="w-[500px] h-[50px] relative grayscale">
          <Image src="/brands.png" alt="" 
            fill priority sizes="500px"
            className=""
          />
        </div>
      </div>
      <div className="flex-1 relative">
        <Image src="/hero.gif" alt="" 
          width={500} height={500}
          priority
          className=""
        />
      </div>
    </div>
  );
}
