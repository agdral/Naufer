import Searcher from "@components/searcher.tsx";

export default function nav() {
  return (
    <nav className="flex flex-row justify-between w-full bg-amber-500">
      <div className="flex-none">
        <a href="/" aria-current="page">
          home oeuntroeunroeur 
        </a>
      </div>
      <Searcher className="" />
      <div className="flex-none flex flex-row bg-amber-500">
        <a href="/login">login</a>
        <a href="/worker">worker</a>
      </div>
    </nav>
  );
}
