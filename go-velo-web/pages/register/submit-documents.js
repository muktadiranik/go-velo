import Image from "next/image";
import Link from "next/link";

import successicon from "/public/images/Success.png";
const SubmitDocuments = () => {
  return (
    <div className="container mx-auto">
      <p className="flex justify-center mt-24 text-2xl">
        Submit Documents for verify your account
      </p>
      <div className="grid grid-cols-12 w-full mt-4 mb-10 container">
        <div className="col-span-2"></div>
        <div className="col-span-8">
          <div>
            <h2 className="sr-only">Steps</h2>

            <div className="relative after:absolute after:inset-x-0 after:top-1/2 after:block after:h-0.5 after:-translate-y-1/2 after:rounded-lg after:bg-gray-100">
              <ol className="relative z-10 flex justify-between text-sm font-medium text-gray-500">
                <li className="flex gap-2 items-center bg-white p-2">
                  <span className="rounded-full bg-common p-1.5 text-white font-bold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>

                  <span className="text-black font-semibold"> Your photo</span>
                </li>

                <li className="flex gap-2 items-center bg-white p-2">
                  <span className="rounded-full bg-common   p-1.5 text-white font-bold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>

                  <span className="text-black font-semibold"> Your ID</span>
                </li>

                <li className="flex gap-2 items-center bg-white p-2 ">
                  <span className="rounded-full bg-common  p-1.5 text-white font-bold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>

                  <span className="text-black font-semibold">
                    {" "}
                    Confirmation
                  </span>
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="col-span-2"></div>
      </div>

      <div className="container justify-center grid grid-cols-12 w-full">
        <div className="col-span-2"></div>
        <div className="col-span-8">
          <div className="w-full">
            <label className="flex justify-center w-full h-full px-4 transition bg-white border border-gray-300 rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
              <div className="">
                <Image className="mx-auto mt-8 mb-4" src={successicon} alt="" />
                <p className="font-medium text-xl text-center">
                  Thank you! Your documents have been <br /> successfully
                  uploaded
                </p>
                <p className="text-sm text-center mt-2 mb-2 text-[#7F7F7F]">
                  Your request is being reviewed and you should receive an{" "}
                  <br /> email reply within 48 hours.
                </p>
              </div>
            </label>
          </div>
        </div>
        <div className="col-span-2"></div>
      </div>
      <div className="container justify-center grid grid-cols-12 w-full">
        <div className="col-span-2"></div>
        <div className="col-span-8 mt-4 ">
          <div className="w-full">
            <button className="btn bg-common hover:bg-common normal-case font-normal w-full">
              Let’s go
            </button>
          </div>
        </div>
        <div className="col-span-2"></div>
      </div>
      <Link
        href=""
        className="flex justify-center mt-8 font-medium text-[#7F7F7F] underline mb-24">
        Add info in your profile
      </Link>
    </div>
  );
};

export default SubmitDocuments;
