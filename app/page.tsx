import Link from "next/link";
import Image from "next/image";

import Button from "@/Components/Button";
import TopiBroImage from "@/public/topibro-logo2.png";
import LearnImage from "@/public/Frame 24.png";

export default function Home() {
  return (
    <main className="">
      <nav className="bg-white py-2 flex justify-between px-4 items-center fixed top-0 w-full mb-20 ">
        <Image src={TopiBroImage} className="w-[100px] h-[50px]" alt="logo" />
        <div className="flex items-center ">
          <ul className="md:flex hidden  gap-5  justify-center text-black items-center  font-Inter font-[600] text-[15px]">
            <li>E-learning</li>
            <li>web Design</li>
            <li>software development</li>
          </ul>
        </div>
        <div>
          <Button className=" text-black p-2 mt-5 rounded font-[500] font-Hanken shadow-2xl border-1  mx-3 ">
            <Link href="/auth/login">Login</Link>
          </Button>
          <Button className=" text-white p-2 mt-5 rounded font-[500] font-Hanken bg-[#216D5B]">
            <Link href="/auth/register">Register</Link>
          </Button>
        </div>
      </nav>

      <div className="flex justify-center items-center flex-col w-full mt-[10rem] gap-20">
        <div className="lg:flex-row md:flex-col  flex flex-col text-black   w-[90%] md:justify-around items-center ">
          <div className=" my-10">
            <h3 className="text-[13px] font-Gladiora  my-4 text-[#216D5B]">
              {" "}
              E-COURSE PLATFORM
            </h3>
            <p className="md:text-[56px] text-[40px] font-[700] leading-[58.7px] text-Inter my-4">
              Learning and <br />
              teaching online <br />
              made easy.
            </p>
            <p className="py-2 mt-5 text-[12px] text-gray-600">
              Practice your skills and learn
              <br /> new things with the platform.
            </p>
            <Button className=" text-white p-2 mt-5 rounded font-[500] font-Hanken   bg-[#216D5B] ">
              <Link href="/auth/register">Get Started</Link>
            </Button>
          </div>

          <Image
            src={LearnImage}
            className="lg:w-[600px] ml-10 md:w-[400px] w-[350px]  md:ml-0 "
            alt="logo"
          />
        </div>
      </div>
    </main>
  );
}
