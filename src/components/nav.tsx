"use client";

export default function nav() {
  const handleClick = () => {
    window.location.href = "https://google.com";
  };

  const buttonClass = "text-white bg-yellow-500 cursor-pointer hover:bg-blue-600";
  const containerClass = "flex flex-row *:py-3 *:px-5";

  const NavButton = ({text}) => (
    <button onClick={handleClick} className={buttonClass}>
      {text}
    </button>
  );

  return (
    <nav className="flex flex-row justify-between px-30 bg-amber-500">
      <div className={containerClass}>
        <NavButton text="Nav" />
      </div>
      <div className={containerClass}>
        <NavButton text="Home" />
      </div>
      <div className={containerClass}>
        <NavButton text="Contact" />
        <NavButton text="Nav" />
      </div>
    </nav>
  );
}
