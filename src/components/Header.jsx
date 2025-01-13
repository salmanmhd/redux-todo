import { CircleCheckBig } from "lucide-react";

export default function Header() {
  return (
    <header className="ml-12 mr-auto mt-16 flex items-center">
      <CircleCheckBig width={"55px"} height={"55px"} />
      <div className="ml-3">
        <h1 className="mb-0 text-3xl font-bold tracking-wider">Todo</h1>
        <h2 className="ml-1">Plan it, do it</h2>
      </div>
    </header>
  );
}
