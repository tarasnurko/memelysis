import Link from "next/link"
import { Separator } from "./ui/separator"

export const Header = () => {
    return <div className="f-full p-4 flex flex-col gap-4">
        <div className="w-full flex items-center justify-between">
            <Link href="/" className="text-blue-600 hover:underline">Main</Link>
            <span>Best score is 100 (probably)</span>
        </div>
        <Separator />
    </div>
}