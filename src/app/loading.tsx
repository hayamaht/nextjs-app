import { LoaderIcon } from "lucide-react";

export default function LoadingPage() {
  return (
    <div className="h-screen flex items-center justify-center ">
      <LoaderIcon className="animate-spin" />
    </div>
  )
}
