import React from "react";
import previewImg from "../../img/beard.jpeg";

function ConfirmBook() {
  const userdetails = [
    "text from add booking",
    "text from add",
    "text from add booking2",
    "2022-11-23",
    "11.30",
  ];
  return (
    <>
      <div className="font-itim space-y-4 mt-4 p-4 h-auto text-white max-w-md mx-auto bg-gray-600 border-4 border-black rounded-xl ">
        <h1 className="text-center text-2xl">Style Preview</h1>
        <div className=" flex justify-center">
          <img className="rounded-3xl size-2/3" src={previewImg} alt="" />
        </div>
        <div className="text-center block my-4">
          <ul>
            <li>text from add booking</li>
            <li className="mb-2">text from add booking</li>
            <li>text from add booking</li>

            <li className="mb-2">text from add booking</li>
            <li>text from add booking</li>
            <li>text from add booking</li>
          </ul>
        </div>
        <div>
        <button
                  className="bg-white hover:bg-black text-black hover:text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline w-full rounded-full border-2 border-white "
                  type="button"
                >
                  Pick up at another Date & Time
                </button>
        <button
                  className="bg-black hover:bg-white text-white hover:text-black mt-4 font-bold py-2 px-4  focus:outline-none focus:shadow-outline w-full rounded-full border-2 border-white "
                  type="button"
                >
                  Confirm
                </button>
        </div>
      </div>
    </>
  );
}

export default ConfirmBook;
