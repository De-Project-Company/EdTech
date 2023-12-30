import Image from 'next/image';
import Link from 'next/link';
import Button from '@ui/Button';

export default function Home() {
  return (
    <main className="h-full relative bg-primary w-full">
      <div className="h-full bg-primary">
        <Image
          src="/home/top.svg"
          width="1319"
          height="158"
          alt="topimage"
          className="top-0 px-[68px]"
        />
        <Image
          src="/home/Background.svg"
          alt="background image"
          width="1132"
          height="1132"
          className="h-screen absolute right-0"
        />
        <div className="px-[68px] z-10">
          <div className="flex h-full justify-center items-center pt-6 w-[1331px]">
            <div className="w-[463px] mr-[80px]">
              <h1 className="text-white text-[68px] font-bold mb-[40px]">
                Starters Management
              </h1>

              <p className="text-white mb-[80px] text-[16px] font-normal">
                Experience the power of efficient School Administration
                nurturing a thriving learning environment for students,
                supporting teachers, and fostering meaningful connections within
                the school community.
              </p>
              <div className="flex flex-col w-[283px]">
                <Button className="bg-white px-16 py-4 rounded-lg text-primary text-16px font-normal mb-[20px] hover:bg-white">
                  Get Started
                </Button>
                <span className="text-white">
                  Already Have an Account?
                  <Link href="/" className=" hover:underline">
                    {' '}
                    Login
                  </Link>
                </span>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/home/cards.svg"
                alt="cards"
                width="700"
                height="589"
                className="relative z-10"
              />
              <Image
                src="/home/girl.svg"
                alt="girl"
                width="584"
                height="833"
                className="absolute top-0"
              />
            </div>
          </div>
        </div>
        <Image
          src="/home/butt.svg"
          alt="Bottom Image"
          width={500}
          height={400}
          className="relative w-full z-10"
        />
      </div>
    </main>
  );
}
