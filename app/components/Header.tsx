import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex justify-between">
      <h1 className="text-3xl">yuba4.com</h1>
      <div>
        <Link className="font-bold" href="./about">
          About
        </Link>
        <Link className="font-bold pl-2" href="./">
          Blog
        </Link>
      </div>
    </header>
  );
};
