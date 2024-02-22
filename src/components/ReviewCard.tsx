import Image from 'next/image';

export default function ReviewCard() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex gap-2 items-center mb-6">
        <div className="h-12 w-12">
          <Image
            src="/cta2.png"
            alt=""
            height={255}
            width={260}
            className="rounded-full h-full w-full"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold text-sm">Imperial High, Ibadan Nig.</h1>
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
  );
}
