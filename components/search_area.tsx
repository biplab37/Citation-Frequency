import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function SearchArea() {
    return (
        <div className="p-16 w-2xl mx-auto mt-20">
        <div className="flex items-center justify-center gap-6">
            <Input placeholder="Type a word or phrase..." className="p-4 text-lg" />
            <Button className="">Search</Button>
        </div>
        </div>
    )
}