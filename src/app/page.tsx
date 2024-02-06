import { ModeToggle } from "@/components/mode-toggle";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LogInIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      home
      {/* <Button>Click Me</Button>
      <ModeToggle />
      <Link href={'/login'}
        className={cn(
          'space-x-2',
          buttonVariants()
        )}
      >
        <LogInIcon className="h-4 w-4" />
        <span>Login</span>
      </Link> */}
    </div>
  );
}
