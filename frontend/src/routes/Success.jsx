import React from "react";

import { PiPackageFill } from "react-icons/pi";
import { BsEnvelopePaperHeart } from "react-icons/bs";
import { BsRocketTakeoffFill } from "react-icons/bs";

const Success = () => {
  return (
    <div className="bg-white px-6 py-4 grid place-content-center">
        <div className="border border-gray-300 p-4 rounded-md bg-slate-50 max-w-3xl">
        <h3 className="text-xl md:text-4xl font-bold text-green-600 mb-2">
        
        CONGRATULATIONS, LEGEND!
      </h3>
      <p className="text-sm leading-6 my-4">
        You’ve just secured the deal of the <strong className="text-green-600 uppercase"> century</strong> on our totally unnecessary,
        yet somehow essential, treasure trove of nonsense!
      </p>

      <h3 className="text-lg font-bold uppercase text-green-600 flex items-center gap-3 mt-4 mb-2">
        <PiPackageFill className="text-3xl" /> What happens now?
      </h3>
      <p className="text-sm leading-6 mb-6">
        Your payment was processed by highly trained
        <strong className="text-green-600 uppercase"> squirrels</strong>, and your order
        is now being lovingly prepared by a team of invisible
        <strong className="text-green-600 uppercase"> gnomes</strong> .
      </p>

      <h3 className="text-lg font-bold uppercase text-fuchsia-700 flex items-center gap-3 mb-2">
        <BsEnvelopePaperHeart className="text-2xl" />
        Feeling emotional?
      </h3>
      <p className="text-sm mb-5">
        Send us a thank-you letter via carrier
        <strong className="text-fuchsia-700 uppercase"> unicorn </strong>
        <em>(or email works too)</em>.
      </p>
      <p className="text-md font-bold mt-8 mb-4 flex items-center gap-6 uppercase text-green-600">
        <BsRocketTakeoffFill className="text-4xl" />
        Until next time, keep being ridiculously awesome!
      </p>
        </div>
      
    </div>
  );
};

export default Success;
