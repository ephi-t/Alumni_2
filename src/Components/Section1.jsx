import React from "react";
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
const Section1 = () => {
  const [counterState, setCounterState] = useState(false);
  return (
    <section className=" bg-teal-500 text-white  px-6 md:px-10 lg:px-20 rounded-3xl ">
      <div className=" py-12 ">
        <ScrollTrigger
          onEnter={() => {
            setCounterState(true);
          }}
          onExit={() => {
            setCounterState(false);
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center gap-6">
            <div>
              <h2 className="text-6xl font-bold text-[#262626]">
                {counterState && (
                  <CountUp className="text-white" start={0} end={95} />
                )}
                <span className="text-white">+</span>
              </h2>
              <p className="py-2 text-2xl font-medium p-4 rounded-md">
                {" "}
                {/* White background for text */}
                Total Alumni
              </p>
            </div>
            <hr className="md:hidden" />
            <div>
              <h2 className="text-6xl font-bold text-[#262626]">
                {counterState && (
                  <CountUp className="text-white" start={0} end={10} />
                )}
                <span className="text-white">+</span>
              </h2>
              <p className="py-2 text-2xl font-medium p-4 rounded-md">
                Total Event
              </p>
            </div>
            <hr className="md:hidden" />
            <div>
              <h2 className="text-6xl font-bold text-[#262626]">
                {counterState && (
                  <CountUp className="text-white" start={0} end={25} />
                )}
                <span className="text-white">+</span>
              </h2>
              <p className="py-2 text-2xl font-medium p-4 rounded-md">
                Total Job Posts
              </p>
            </div>
            <hr className="md:hidden" />
            <div>
              <h2 className="text-6xl font-bold text-[#262626]">
                {counterState && (
                  <CountUp className="text-white" start={0} end={45} />
                )}
                <span className="text-white">+</span>
              </h2>
              <p className="py-2 text-2xl font-medium p-4 rounded-md">
                Total Students
              </p>
            </div>
          </div>
        </ScrollTrigger>
      </div>
    </section>
  );
};

export default Section1;
