import NavItems from "./NavItems";

export default function SideBar() {
  return (
    <div className="left-container h-full w-80 bg-slate-950 p-4 text-white">
      <p className="mb-20 mt-12 text-center text-4xl font-semibold">
        Hi User 👋
      </p>

      <NavItems text={"Home"} to={"/"} />
      <NavItems text={"Completed"} to={"/completed"} />
      <NavItems text={"Incompleted"} to={"/incomplete"} />
    </div>
  );
}
