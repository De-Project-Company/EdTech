import Link from 'next/link';

export default function WhySection() {
  return (
    <div className="w-full py-32 bg-[#F1EDFB]">
      <div className="w-11/12 mx-auto">
        <div className="w-full md:w-8/12 mx-auto text-center">
          <h1 className="font-bold text-lg md:text-4xl text-[#1A0D46]">
            Why Choose Starters Management
          </h1>
          <p className="text-[#4221B0] text-base md:text-2xl">
            for your school administration?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 mt-28 gap-6">
          <div className="bg-white shadow-sm rounded-md px-2 py-6 text-center w-full">
            <h1 className="text-xl font-bold mb-5">Effortless Management</h1>
            <p className="w-10/12 mx-auto">
              Centralized hub for teacher, student and other staff profiles.
              Access Comprehensive insights on performance and attendance in one
              place
            </p>
          </div>
          <div className="bg-white shadow-sm rounded-md px-2 py-6 text-center w-full">
            <h1 className="text-xl font-bold mb-5">
              Seamless Calender Management
            </h1>
            <p className="w-10/12 mx-auto">
              Eliminate scheduling conflicts and missed deadline. Effortlessly
              coordinate events, assignments and crucial date for
              synchronization planning
            </p>
          </div>
          <div className="bg-white shadow-sm rounded-md px-2 py-6 text-center w-full">
            <h1 className="text-xl font-bold mb-5">Financial Control</h1>
            <p className="w-10/12 mx-auto">
              Manage school finance effortlessly with intuitive tools. Track
              expenses, budget efficiency and generate reports for financial
              decisions
            </p>
          </div>
          <div className="bg-white shadow-sm rounded-md px-2 py-6 text-center w-full">
            <h1 className="text-xl font-bold mb-5">Secure Collaboration</h1>
            <p className="w-10/12 mx-auto">
              Our Platform protects sensitive information, ensuring secure
              communication among Administrators, Teachers and Students.
            </p>
          </div>
        </div>

        <div className="mt-12 w-full text-center">
          <Link href={'#'} className="">
            And more, all in one place.
          </Link>
        </div>
      </div>
    </div>
  );
}
