import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex p-5 justify-between sticky top-0 bg-white z-50 shadow-md">
      <div className="flex space-x-2 items-center">
        <Image
          src="https://links.papareact.com/4t3"
          alt="logo"
          width={30}
          height={30}
        />

        <div>
          <h1 className="font-bold">
            DALL-E 2.0 <span className="text-violet-500">AI</span>Image
            Generator
          </h1>
        </div>
      </div>

      <div className="flex text-xs md:text-base divide-x items-center text-gray-500">
        <Link
          className="px-2 font-light"
          href="http://www.linkedin.com/in/divya-vikash-a9035319b"
        >
          LinkedIn
        </Link>
        <Link
          className="px-2 font-light"
          href="https://github.com/div-vik/dalle2.0"
        >
          Github Repo
        </Link>
      </div>
    </header>
  );
};

export default Header;
