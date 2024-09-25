import React from "react";
import { Link } from "react-router-dom";
import UserOne from "../../assets/img/user/user-01.png";
import UserTwo from "../../assets/img/user/user-02.png";
import UserThree from "../../assets/img/user/user-03.png";
import UserFour from "../../assets/img/user/user-04.png";
import UserFive from "../../assets/img/user/user-05.png";

const chatData = [
  {
    avatar: UserOne,
    name: "Devid Heilo",
    text: "10 july 2024",
    time: 10.12,
    textCount: 3,
    color: "#10B981",
  },
  {
    avatar: UserTwo,
    name: "Henry Fisher",
    text: "09 Aug 2024",
    time: 11.11,
    textCount: 1,
    color: "#DC3545",
  },
  {
    avatar: UserFour,
    name: "Jhon Doe",
    text: "15 Aug 2024",
    time: 12.32,
    textCount: 1,
    color: "#10B981",
  },
  {
    avatar: UserFive,
    name: "Jane Doe",
    text: "29 Aug 2024",
    time: 12.32,
    textCount: 2,
    color: "#FFBA00",
  },
  {
    avatar: UserOne,
    name: "Jhon Doe",
    text: "1 sep 2024",
    time: 11.32,
    textCount: 1,
    color: "#10B981",
  },
  {
    avatar: UserThree,
    name: "Jhon Doe",
    text: "12 sep 2024",
    time: 10.32,
    textCount: 3,
    color: "#FFBA00",
  },
];

export default function MeetingCard() {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white py-6 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <h4 className="mb-6 px-7 text-xl font-semibold text-black dark:text-white">
        Meetings
      </h4>
      <div>
        {chatData.map((chat, key) => (
          <Link
            to="/"
            className="flex items-center gap-5 py-3 px-7 hover:bg-gray-3 dark:hover:bg-meta-4"
            key={key}
          >
            <div className="relative h-14 w-14 rounded-full">
              <img src={chat.avatar} alt="User" />
              {/* <span
                className="absolute right-0 bottom-0 h-3.5 w-3.5 rounded-full border-2 border-white"
                style={{ backgroundColor: chat.color }}
              ></span> */}
            </div>

            <div className="flex flex-1 items-center justify-between">
              <div>
                <h5 className="font-medium text-black dark:text-white">
                  {chat.name}
                </h5>
                <p>
                  <span className="text-sm text-black dark:text-white">
                    {chat.text}
                  </span>
                  <span className="text-xs"> . {chat.time} A.M</span>
                </p>
              </div>
            </div>
            {chat.textCount !== 0 && (
              <div className="flex  items-center justify-center w-14 h-14 bg-primary">
                <span className="text-sm font-medium text-white">join</span>
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
