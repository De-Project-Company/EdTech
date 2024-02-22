import Image from 'next/image';
import avatar from '@/public/cta2.png';

export default function Reviews() {
  return (
    <div className="w-full py-32 bg-indigo-50 overflow-hidden relative">
      <div className="absolute bottom-0 left-[-20%] right-0 top-[40%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>

      <div className="w-11/12 mx-auto">
        <div className="w-full md:w-8/12 mx-auto text-center">
          <h1 className="font-bold text-lg md:text-4xl text-[#1A0D46]">
            What Schools Using Starters Ed-Management Have to Say About Us
          </h1>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex gap-2 items-center mb-6">
              <div className="h-12 w-12">
                <Image
                  src={avatar}
                  alt=""
                  className="rounded-full h-full w-full"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="font-bold text-sm">
                  Imperial High, Ibadan Nig.
                </h1>
                <span className="text-sm">Mrs. Waje Durotimi</span>
              </div>
            </div>
            <span className="">
              I love the integrated calendar system. it is a life changer for my
              school. No more scheduling hassles. its user friendly . I highly
              recommend for schools.
            </span>
            <div className="mt-4 flex justify-end">
              <span>⭐⭐⭐⭐⭐</span>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex gap-2 items-center mb-6">
              <div className="h-12 w-12">
                <Image
                  src={avatar}
                  alt=""
                  className="rounded-full h-full w-full"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="font-bold text-sm">
                  Imperial High, Ibadan Nig.
                </h1>
                <span className="text-sm">Mrs. Waje Durotimi</span>
              </div>
            </div>
            <span className="">
              I love the integrated calendar system. it is a life changer for my
              school. No more scheduling hassles. its user friendly . I highly
              recommend for schools.
            </span>
            <div className="mt-4 flex justify-end">
              <span>⭐⭐⭐⭐⭐</span>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex gap-2 items-center mb-6">
              <div className="h-12 w-12">
                <Image
                  src={avatar}
                  alt=""
                  className="rounded-full h-full w-full"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="font-bold text-sm">
                  Imperial High, Ibadan Nig.
                </h1>
                <span className="text-sm">Mrs. Waje Durotimi</span>
              </div>
            </div>
            <span className="">
              I love the integrated calendar system. it is a life changer for my
              school. No more scheduling hassles. its user friendly . I highly
              recommend for schools.
            </span>
            <div className="mt-4 flex justify-end">
              <span>⭐⭐⭐⭐⭐</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
