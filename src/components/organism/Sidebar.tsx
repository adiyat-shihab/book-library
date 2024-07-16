import Link from "next/link";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className={"shadow shadow-[#4f72cd33] h-screen  w-56 px-6 py-10"}>
      <h1>Book Library</h1>
      <div className={" space-y-5 mt-20 flex flex-col"}>
        <Link
          href={"/for-you"}
          className={
            "flex items-center gap-4  text-[#5c5589] font-medium tracking-wide"
          }
        >
          {" "}
          <Image src={"home.svg"} alt={"home"} width={20} height={20} /> For You
        </Link>
        <Link
          className={
            "flex items-center gap-4  text-[#5c5589] font-medium tracking-wide"
          }
          href={"/collection"}
        >
          <Image src={"collection.svg"} alt={"home"} width={20} height={20} />
          Collection
        </Link>
        <Link
          className={
            "flex items-center gap-4  text-[#5c5589] font-medium tracking-wide"
          }
          href={"/profile"}
        >
          <Image src={"settings.svg"} alt={"home"} width={20} height={20} />
          Settings
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
