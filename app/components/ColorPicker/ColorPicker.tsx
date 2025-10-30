"use client";
import React, { useState } from "react";

export const ColorPicker = () => {
  const [color, setColor] = useState("#ffffff");
  const handleColorChange = (e: any) => {
    setColor(e.target.value);
  };
  return (
    <div className="flex flex-col items-center">
      <h1 className="m-10 text-2xl">Color Picker</h1>
      <div className='w-50 h-50 flex justify-center items-center border border-neutral-400/70 rounded-lg mb-10 ease-in duration-25' style={{backgroundColor:color}}>
        <p className="text-neutral-700 font-xl text-center">Select Color: {color}</p>
      </div>
      <label htmlFor="" className="font-lg font-bold mb-4">Select a Color</label>
      <input type="color" value={color} onChange={handleColorChange} className="w-16 h-12 p-1 rounded-md border border-solid border-neutral-300"/>
    </div>
  );
};
