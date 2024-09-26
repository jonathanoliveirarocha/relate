import PageLogo from "../assets/relate-logo.png";

export default function Header({ styles }) {
  return (
    <header
      className={`sm:p-4 h-16 w-full z-50 flex justify-between bg-black items-center ${
        styles ? styles : ""
      }`}
    >
      <div className="flex items-center absolute pl-4">
        <a href="/">
          <img
            src={PageLogo}
            alt="Page logo"
            width={100}
            height={25}
            className="w-[100px]"
          />
        </a>
      </div>
    </header>
  );
}
