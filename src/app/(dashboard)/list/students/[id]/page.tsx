import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";
import FormModal from "@/components/FormModal";
import Performance from "@/components/Performance";
import Image from "next/image";
import Link from "next/link";

const SingleStudentPage = () => {
  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      {/* LEFT  */}
      <div className="w-full xl:w-2/3">
        {/* TOP  */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* USER INFO CARD  */}
          <div className="bg-sky py-6 px-4 rounded-md flex-1 flex gap-4">
            <div className="w-1/3">
              <Image
                src=""
                alt=""
                width={144}
                height={144}
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <div className="flex items-center gap-4">
                <h1 className="text-xl font-semibold ">Cameron Moran</h1>
                <FormModal
                  table="student"
                  type="update"
                  data={{
                    id: 1,
                    teacherId: "1234567890",
                    username: "John Doe",
                    firstName: "John",
                    lastName: "Doe",
                    bloodType: "A+",
                    password: "Qwerty123",
                    email: "john@doe.com",
                    photo:
                      "https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200",
                    phone: "+1234567890",
                    address: "123 Main St, Anytown, USA",
                  }}
                />
              </div>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Delectus enim aut, minus, atque modi impedit eum
              </p>
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/blood.png" alt="" width={14} height={14} />
                  <span className="  ">A+</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/date.png" alt="" width={14} height={14} />
                  <span className="">January 2025</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/mail.png" alt="" width={14} height={14} />
                  <span className="">user@gmail.com</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/phone.png" alt="" width={14} height={14} />
                  <span className=" ">+1 234 567</span>
                </div>
              </div>
            </div>
          </div>
          {/* SMALL CARDS  */}
          <div className="flex-1 flex gap-4 justify-between flex-wrap">
            {/* CARD  */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48.5%] lg:w-[47.5%] xl:w-[46%] 2xl:w-[48%]">
              <Image
                src="/singleAttendance.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6 "
              />
              <div className="">
                <h1 className="text-xl font-semibold">90%</h1>
                <span className=" text-sm text-gray-400">Attendance</span>
              </div>
            </div>
            {/* CARD  */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48.5%] lg:w-[47.5%] xl:w-[46%] 2xl:w-[48%]">
              <Image
                src="/singleBranch.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6 "
              />
              <div className="">
                <h1 className="text-xl font-semibold">6th</h1>
                <span className=" text-sm text-gray-400">Grade</span>
              </div>
            </div>
            {/* CARD  */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48.5%] lg:w-[47.5%] xl:w-[46%] 2xl:w-[48%]">
              <Image
                src="/singleLesson.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6 "
              />
              <div className="">
                <h1 className="text-xl font-semibold">10</h1>
                <span className=" text-sm text-gray-400">Lessons</span>
              </div>
            </div>
            {/* CARD  */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48.5%] lg:w-[47.5%] xl:w-[46%] 2xl:w-[48%]">
              <Image
                src="/singleClass.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6 "
              />
              <div className="">
                <h1 className="text-xl font-semibold">6A</h1>
                <span className=" text-sm text-gray-400">Class</span>
              </div>
            </div>
          </div>
        </div>
        {/* BOTTOM  */}
        <div className="bg-white mt-4 rounded-md p-4 h-[800px] w-full">
          <h1 className="">Student&apos;s Schedule</h1>
          <BigCalendar />
        </div>
      </div>
      {/* RIGHT  */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Shortcuts</h1>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
            <Link
              href={`/list/lessons?classId=${2}`}
              className="p-3 rounded-md bg-yellowLight"
            >
              Student&apos;s Lessons
            </Link>
            <Link
              href={`/list/teachers?classId=${2}`}
              className="p-3 rounded-md bg-purpleLight"
            >
              Student&apos;s Teachers
            </Link>
            <Link
              href={`/list/exams?classId=${2}`}
              className="p-3 rounded-md bg-pink-50"
            >
              Student&apos;s Exams
            </Link>
            <Link
              href={`/list/assignments?classId=${2}`}
              className="p-3 rounded-md bg-skyLight"
            >
              Teacher&apos;s Assignments
            </Link>
            <Link
              href={`/list/results?studentId=${"student2"}`}
              className="p-3 rounded-md bg-skyLight"
            >
              Student&apos;s Results
            </Link>
          </div>
        </div>
        <Performance />
        <Announcements />
      </div>
    </div>
  );
};

export default SingleStudentPage;
