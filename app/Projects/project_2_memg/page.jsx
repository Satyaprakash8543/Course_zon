"use client";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";

//Fetching data from api usig client
const page = () => {
  const [memes, setMemes] = useState([]);
  const [selectedMems, setselectedMems] = useState(null);
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");

  useEffect(() => {
    const fatchMemes = async () => {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setMemes(data.data.memes);
      setselectedMems(data.data.memes[0]);
      console.log("Memes data", data.data.memes);
    };
    fatchMemes();
  }, []);

  //Handle name selection
  const handleChange = (e) => {
    const memeId = e.target.value;
    // console.log('memId==',memeId)
    const meme = memes.find((m) => m.id == memeId);
    setselectedMems(meme);
  };

  const downloadMeme = () => {
    if (!selectedMems) return;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = selectedMems.url;

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      //Text styling
      ctx.font = "bold 70px black";
      ctx.fillStyle = "black";
      ctx.strokeStyle = "black";
      ctx.lineWidth = 3;
      ctx.textAlign = "center";

      //Top Text
      ctx.strokeText(topText.toUpperCase(), canvas.width - 350, 300);
      ctx.fillText(topText.toUpperCase(), canvas.width - 350, 300);

      //Bottom Text
      ctx.strokeText(
        bottomText.toUpperCase(),
        canvas.width - 350,
        canvas.height - 200
      );
      ctx.fillText(
        bottomText.toUpperCase(),
        canvas.width - 350,
        canvas.height - 200
      );

      //convert to image and trigger download
      const link = document.createElement("a");
      link.download = "meme.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    };
  };
  return (
    // <div className='flex justify-center'>
    //    <div className='container '>
    //        <h1 className='text-center mt-2 '>🔥Meme Generator🔥</h1>

    //        {/* //Memes Selection Dropdown */}
    //        <div>
    //         <select className='bg-blue-500 form-select' onChange={handleChange}  >
    //           {memes.map((meme)=><option key={meme.id} value={meme.id} className='bg-red-500'>
    //             {meme.name}
    //           </option>)}
    //         </select>
    //        </div>

    //        {/* Meme Preview  */}
    //        {selectedMems &&(
    //         <div className='relative inline-block'>
    //             <img src={selectedMems.url} width={400} height={400} alt='memsimg' className='rounded'/>
    //             <p className='absolute top-0 start-50 text-black font-bold'>{topText}</p>
    //              <p className='absolute bottom-0 start-50 text-black font-bold'>{bottomText}</p>
    //         </div>
    //        )}
    //        {/* input field */}
    //        <div className='gap-2'>
    //          <input type='text' placeholder='Top text' value={topText} onChange={(e)=>setTopText(e.target.value)} className='bg-pink-300'/>
    //           <input type='text' placeholder='Bottom text' value={bottomText} onChange={(e)=>setBottomText (e.target.value)} className=' bg-green-600'/>
    //        </div>

    //           {/* Download button */}
    //           <button className='mt-3 rounded-2xl py-2 px-3 cursor-progress bg-green-600 ' onClick={downloadMeme}>Download meme</button>
    //    </div>
    // </div>
    <div className="flex min-h-screen items-center justify-center bg-slate-800 p-4">
      <div className="w-full max-w-lg  rounded-xl bg-white p-6 shadow-lg">
        {/* Heading */}
        <h1 className="mb-4 text-center text-2xl font-bold text-black">
          🔥 Meme Generator 🔥
        </h1>

        {/* Meme Selection Dropdown */}
        <div className="mb-4">
          <select
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 bg-blue-500 px-3 py-2 text-white outline-none focus:ring-2 focus:ring-blue-400"
          >
            {memes.map((meme) => (
              <option
                key={meme.id}
                value={meme.id}
                className="bg-white text-black"
              >
                {meme.name}
              </option>
            ))}
          </select>
        </div>

        {/* Meme Preview */}
        {selectedMems && (
          <div className="relative mb-4 flex justify-center">
            <img
              src={selectedMems.url}
              alt="meme"
              className="max-h-[350px] rounded-lg object-contain"
            />

            {/* Top Text */}
            <p className="absolute top-2 left-1/2 -translate-x-1/2 text-xl font-extrabold text-black drop-shadow-lg">
              {topText}
            </p>

            {/* Bottom Text */}
            <p className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xl font-extrabold text-black drop-shadow-lg">
              {bottomText}
            </p>
          </div>
        )}

        {/* Input Fields */}
        <div className="mb-4 flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            placeholder="Top text"
            value={topText}
            onChange={(e) => setTopText(e.target.value)}
            className="rounded-lg border text-black border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-pink-400"
          />

          <input
            type="text"
            placeholder="Bottom text"
            value={bottomText}
            onChange={(e) => setBottomText(e.target.value)}
            className="rounded-lg border text-black border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Download Button */}
        <button
          onClick={downloadMeme}
          className="w-full rounded-xl bg-green-600 py-2 font-semibold text-white transition hover:bg-green-700 active:scale-95"
        >
          Download Meme
        </button>
      </div>
    </div>
  );
};

export default page;
