import React from 'react';
import Boxes from './Boxes';

let months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let dateISO = new Date();
let totalDays = daysInMonth[dateISO.getMonth()];

export default function Activity(props) {
  console.log(props);
  return (
    <div
      style={{
        boxShadow:
          '0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0 0 1px rgb(10 10 10 / 2%)',
      }}
      className="container rounded-md p-3 my-8 flex flex-wrap justify-between  w-[90%] m-auto"
    >
      <div
        className="basis-[27%] text-center flex justify-center flex-col items-center self-stretch"
        style={{ background: '#EFF5FB' }}
      >
        <h1 style={{ color: '#4A4B4B' }} className="text-l font-medium">
          {props.activity.name}
        </h1>
        <p className="bg-[#EB5F43] rounded-md inline-block text-white px-2 mt-1 py-1">
          {months[dateISO.getMonth()]}
        </p>
      </div>
      <div className="basis-[60%]  flex-wrap flex justify-start items-center">
        <Boxes
          totalDays={totalDays}
          activity={props.activity.name}
          markTheDays={props.markTheDays}
          state={props.state}
        />
      </div>
      <button
        onClick={() => props.handleDeleteActivity(props.activity)}
        className="self-start basis-[3%] hover:bg-green"
      >
        <img
          className="w-8"
          src="https://i.pinimg.com/474x/d2/b0/10/d2b01052124d637b98d00d0e595b8965.jpg"
          alt="cross_button"
        />
      </button>
    </div>
  );
}
