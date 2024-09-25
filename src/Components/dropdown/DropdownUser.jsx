import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ClickOutside from "../clickOutside/ClickOutside";
import UserOne from "../../assets/img/user/user-01.png";

const DropdownUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const userData = localStorage.getItem("userInfo");
  const userObject = JSON.parse(userData);
  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    navigate("/login");
  };

  return (
    <ClickOutside onClick={() => setDropdownOpen(false)} className="relative">
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4 focus:outline-none"
        aria-expanded={dropdownOpen}
        aria-controls="user-dropdown"
      >
        <span className="hidden text-right lg:block">
          <span className="block text-sm font-medium text-black dark:text-white">
            {userObject?.username}
          </span>
          <span className="block text-xs">React Developer</span>
        </span>

        <span className="h-12 w-12 rounded-full">
          <img src={UserOne} alt="User" />
        </span>

        <svg
          className="hidden fill-current sm:block"
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z"
          />
        </svg>
      </button>

      {dropdownOpen && (
        <div
          id="user-dropdown"
          className="absolute right-0 mt-4 w-62 flex flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"
        >
          <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-7 dark:border-strokedark">
            <li>
              <Link
                to="/profile"
                className="flex items-center gap-3 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
              >
                <svg
                  className="fill-current"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11 9.62499C8.42188 9.62499 6.35938 7.59687 6.35938 5.12187C6.35938 2.64687 8.42188 0.618744 11 0.618744C13.5781 0.618744 15.6406 2.64687 15.6406 5.12187C15.6406 7.59687 13.5781 9.62499 11 9.62499ZM11 2.16562C9.28125 2.16562 7.90625 3.50624 7.90625 5.12187C7.90625 6.73749 9.28125 8.07812 11 8.07812C12.7188 8.07812 14.0938 6.73749 14.0938 5.12187C14.0938 3.50624 12.7188 2.16562 11 2.16562Z" />
                  <path d="M17.7719 21.4156H4.2281C3.5406 21.4156 2.9906 20.8656 2.9906 20.1781V17.0844C2.9906 13.7156 5.7406 10.9656 9.10935 10.9656H12.925C16.2937 10.9656 19.0437 13.7156 19.0437 17.0844V20.1781C19.0094 20.8312 18.4594 21.4156 17.7719 21.4156ZM4.53748 19.8687H17.4969V17.0844C17.4969 14.575 15.4344 12.5125 12.925 12.5125H9.07498C6.5656 12.5125 4.5031 14.575 4.5031 17.0844V19.8687H4.53748Z" />
                </svg>
                My Profile
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex items-center gap-3 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
              >
                <svg
                  className="fill-current"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.6687 1.44374C17.1187 0.893744 16.4312 0.618744 15.675 0.618744H7.42498C6.25623 0.618744 5.25935 1.58124 5.25935 2.78437V4.12499H4.29685C3.88435 4.12499 3.50623 4.46874 3.50623 4.91562C3.50623 5.36249 3.84998 5.70624 4.29685 5.70624H5.25935V10.2781H4.29685C3.88435 10.2781 3.50623 10.6219 3.50623 11.0687C3.50623 11.4812 3.84998 11.8594 4.29685 11.8594H5.25935V16.4312H4.29685C3.88435 16.4312 3.50623 16.775 3.50623 17.2219C3.50623 17.6687 3.84998 18.0125 4.29685 18.0125H5.25935V19.25C5.25935 20.4187 6.22185 21.4156 7.42498 21.4156H15.675C16.8647 21.4156 17.8719 20.4512 17.8719 19.25V18.0125H18.8344C19.2469 18.0125 19.5823 17.6687 19.5823 17.2219C19.5823 16.775 19.2469 16.4312 18.8344 16.4312H17.8719V11.8594H18.8344C19.2469 11.8594 19.5823 11.4812 19.5823 11.0687C19.5823 10.6219 19.2469 10.2781 18.8344 10.2781H17.8719V5.70624H18.8344C19.2469 5.70624 19.5823 5.36249 19.5823 4.91562C19.5823 4.46874 19.2469 4.12499 18.8344 4.12499H17.8719V2.78437C17.8719 1.66249 17.6687 1.44374 17.6687 1.44374Z" />
                </svg>
                My Contacts
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex items-center gap-3 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
              >
                <svg
                  className="fill-current"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19.675 16.7125L12.5962 9.62812C12.4331 9.465 12.1916 9.36499 11.925 9.36499H8.07499C7.80844 9.36499 7.566 9.465 7.40248 9.62812L0.324993 16.7125C-0.0309877 17.0175 -0.0399877 17.5112 0.268993 17.6787C0.539993 17.8094 0.845987 17.8344 1.09374 17.8344H20.9062C21.1322 17.8344 21.4106 17.7825 21.6506 17.6787C21.9631 17.5112 21.9541 17.0175 21.675 16.7125L19.675 16.7125ZM21.1719 19.6687C21.1719 18.0375 17.9706 14.9812 13.5562 11.1756C13.5087 11.1375 13.4606 11.0975 13.4249 11.0556C13.2874 10.9194 13.0512 10.8594 12.8124 10.8594H9.18748C8.94998 10.8594 8.71374 10.9194 8.57624 11.0556C8.5406 11.0975 8.49248 11.1375 8.44499 11.1756C4.0306 14.9812 1.82935 18.0375 1.82935 19.6687C1.82935 19.7062 1.865 19.7494 1.9006 19.7962C1.92935 19.8344 1.9687 19.8725 2.01125 19.8999C2.13874 19.9762 2.28625 20.0362 2.43748 20.0362H19.5625C19.7175 20.0362 19.8706 19.9762 19.9937 19.8999C20.0362 19.8725 20.075 19.8344 20.0962 19.7962C20.1262 19.7494 20.1624 19.7062 20.1624 19.6687H21.1719Z" />
                </svg>
                Account Settings
              </Link>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="flex items-center gap-3 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
              >
                <svg
                  className="fill-current"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19.675 16.7125L12.5962 9.62812C12.4331 9.465 12.1916 9.36499 11.925 9.36499H8.07499C7.80844 9.36499 7.566 9.465 7.40248 9.62812L0.324993 16.7125C-0.0309877 17.0175 -0.0399877 17.5112 0.268993 17.6787C0.539993 17.8094 0.845987 17.8344 1.09374 17.8344H20.9062C21.1322 17.8344 21.4106 17.7825 21.6506 17.6787C21.9631 17.5112 21.9541 17.0175 21.675 16.7125L19.675 16.7125ZM21.1719 19.6687C21.1719 18.0375 17.9706 14.9812 13.5562 11.1756C13.5087 11.1375 13.4606 11.0975 13.4249 11.0556C13.2874 10.9194 13.0512 10.8594 12.8124 10.8594H9.18748C8.94998 10.8594 8.71374 10.9194 8.57624 11.0556C8.5406 11.0975 8.49248 11.1375 8.44499 11.1756C4.0306 14.9812 1.82935 18.0375 1.82935 19.6687C1.82935 19.7062 1.865 19.7494 1.9006 19.7962C1.92935 19.8344 1.9687 19.8725 2.01125 19.8999C2.13874 19.9762 2.28625 20.0362 2.43748 20.0362H19.5625C19.7175 20.0362 19.8706 19.9762 19.9937 19.8999C20.0362 19.8725 20.075 19.8344 20.0962 19.7962C20.1262 19.7494 20.1624 19.7062 20.1624 19.6687H21.1719Z" />
                </svg>
                logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </ClickOutside>
  );
};

export default DropdownUser;
