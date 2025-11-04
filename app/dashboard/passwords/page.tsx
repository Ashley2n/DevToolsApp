"use client";
import React, { useState } from "react";
import getPassword from "./getPassword";
import Image from "next/image";

const page = () => {
  const [lenght, setLenght] = useState("");
  const [newPass, setNewPass] = useState("Provide length");
  const [textToCopy, setTextToCopy] = useState("");
  const [copyStatus, setCopyStatus] = useState(false);

  const handleCopyText = async () => {
    setCopyStatus(true);
    await navigator.clipboard.writeText(newPass);
    console.log("Copied: " + newPass);
    setTimeout(() => setCopyStatus(false), 2000); // Reset status after 2 seconds
  };

  const handlePasswordGenerator = async () => {
    const key = process.env.API_NINJAS_KEY;

    try {
      const cleanNum = Number(lenght);
      const data = await getPassword(cleanNum);
      setCopyStatus(false);
      setNewPass(data.random_password);
    } catch (error) {
      console.error("Something when wrong \n " + error);
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <main className=" bg-neutral-800/50  text-center flex gap-12 rounded-lg border-2 border-neutral-800/80 shadow-inner shadow-neutral-800/50 text-neutral-300">
        <div className="px-8 py-12">
          <h3 className="font-bold text-xl mb-2">Enter Length</h3>
          <div className="flex flex-col gap-6">
            <input
              type="number"
              id="lenght"
              name="lenght"
              max="50"
              onChange={(e) => setLenght(e.target.value)}
              className="bg-neutral-800/80 rounded-lg py-2 mt-2  text-neutral-300/50 text-cen px-6 outline-0"
            />
            <button
              onClick={handlePasswordGenerator}
              className="px-4 py-2 bg-neutral-700 w-fit m-auto mt-4 rounded-lg hover:cursor-pointer hover:bg-neutral-700/70"
            >
              Get Password
            </button>
          </div>
        </div>
        <div className="px-8 py-12 text-center bg-neutral-800/90 w-full  relative ">
          <p>New Password</p>
          <input
            name="lenght"
            disabled
            value={newPass}
            className="bg-neutral-900 rounded-lg py-2 mt-2  text-neutral-300/50 text-cen px-6 text-wrap"
          />
          <button
            className="absolute right-9 top-22 text-gray-500 bg-neutral-600/30 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600/60 rounded-lg inline-flex items-center justify-center hover:cursor-pointer p-2 w-fit"
            title="Copy"
            onClick={handleCopyText}
          >
            {copyStatus == true ? (
              <Image
                src="/Icons/copy-check.svg"
                alt="Copy to clipBoard"
                title="Copy"
                width={10}
                height={10}
                className=""
              />
            ) : (
              <Image
                src="/Icons/copy.svg"
                alt="Copy to clipBoard"
                title="Copy"
                width={10}
                height={10}
                className=""
              />
            )}
          </button>
        </div>
      </main>
    </div>
  );
};

export default page;
