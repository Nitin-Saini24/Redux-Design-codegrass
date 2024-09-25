import React, { useRef, useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "/vite.svg"; // Replace with the actual path to your logo
import SidebarLinkGroup from "./SideBarLink"; // Make sure SidebarLinkGroup component is imported
import profileIcon from "../assets/svg/sidebar/profile.svg";
import dashboardIcon from "../assets/svg/sidebar/dashboard.svg";
import arrowIcon from "../assets/svg/sidebar/arrow.svg";
import calender from "../assets/svg/sidebar/calender.svg";
import NavItem from "./sidebar/NavItem";
import SidebarItem from "./sidebar/SidebarItem";

const sidebarItems = [
  {
    title: "dashboard",
    path: "/",
    icon: dashboardIcon,
    subItems: [],
  },
  {
    title: "Admin",
    path: "/admin",
    icon: profileIcon,
    subItems: [
      {
        title: "staff",
        path: "/admin",
        subItems: [
          { title: "internal staff  ", path: "/admin/internal-staff" },
          { title: "Admins", path: "/admin/Admins" },
        ],
      },
      {
        title: "Company Settings",
        path: "#",
        subItems: [],
      },
    ],
  },

  {
    title: "Internal Database",
    path: "#",
    icon: calender,
    subItems: [
      { title: "Laboratiories", path: "#" },
      { title: "Clients", path: "#" },
      { title: "Supplier/Manufacturers", path: "#" },
      { title: "Geographical Regions", path: "#" },
      { title: "Product Types", path: "#" },
      { title: "Ingredient categories", path: "#" },
      { title: "Ingredients", path: "#" },
      { title: "Row Material", path: "#" },
    ],
  },
  {
    title: "Process Tools",
    path: "#",
    icon: calender,
    subItems: [
      { title: "Tools", path: "#" },
      { title: "Categories List", path: "#" },
    ],
  },
  {
    title: "Templates",
    path: "#",
    icon: calender,
    subItems: [
      { title: "Sample Templates", path: "#" },
      { title: "Reporting Templates", path: "#" },
    ],
  },
  {
    title: "Samples",
    path: "#",
    icon: calender,
    subItems: [
      { title: "Add New", path: "#" },
      { title: "View Ongoing", path: "#" },
      { title: "Completed", path: "#" },
    ],
  },
  {
    title: "Documents",
    path: "#",
    icon: calender,
    subItems: [
      { title: "Excels", path: "#" },
      { title: "Request Documents", path: "#" },
    ],
  },
  {
    title: "Calendar",
    path: "/calendar",
    icon: calender,
    subItems: [],
  },
  {
    title: "Profile",
    path: "/profile",
    icon: profileIcon,
    subItems: [],
  },
  {
    title: "Pages",
    path: "/page1",
    icon: dashboardIcon,
    subItems: [
      { title: "page 1", path: "/page1" },
      { title: "page 2", path: "/page2" },
      { title: "page 3", path: "/page3" },
      { title: "page 4", path: "/page4" },
      { title: "page 5", path: "/page5" },
    ],
  },
  // Add more items here
];

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  // Close on click outside
  useEffect(() => {
    const clickHandler = (event) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(event.target) ||
        trigger.current.contains(event.target)
      ) {
        return;
      }
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, [sidebarOpen]);

  // Close if the ESC key is pressed
  useEffect(() => {
    const keyHandler = (event) => {
      if (!sidebarOpen || event.keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  }, [sidebarOpen]);

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      onMouseEnter={() => setSidebarOpen(true)}
      onMouseLeave={() => setSidebarOpen(false)}
      className={`absolute addpath left-0 top-0 z-[9999] flex h-screen  flex-col  bg-black duration-300 ease-linear dark:bg-boxdark  lg:translate-x-0 ${
        sidebarOpen ? "w-72" : "w-20"
      }`}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between gap-2 px-6 py-5 lg:py-7">
        <NavLink to="/" className={"flex"}>
          <img src={Logo} alt="Logo" />
          <h1
            className={
              sidebarOpen
                ? "text-white ml-3 text-xl uppercase opacity-100 visible"
                : "opacity-0 invisible"
            }
            style={{ transition: "opacity 0.3s , visibility 0.3s" }}
          >
            codegrass
          </h1>
        </NavLink>

        {/* <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <svg
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill="white"
            />
          </svg>
        </button> */}
      </div>
      {/* Sidebar Header */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* Sidebar Menu */}
        <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
          {/* Menu Group */}
          <div>
            {/* <h3 className="mb-4 ml-4 text-sm font-semibold text-white">MENU</h3> */}

            <ul className="mb-6 flex flex-col gap-1.5">
              {/* Menu Item Dashboard */}
              {sidebarItems.map((item, index) => (
                <SidebarLinkGroup
                  key={index}
                  activeCondition={
                    pathname === item.path || pathname.includes(item.path)
                  }
                >
                  {(handleClick, open) => (
                    <>
                      <SidebarItem
                        item={{
                          ...item,
                          active:
                            pathname === item.path ||
                            pathname.includes(item.path),
                          open,
                        }}
                        isOpen={sidebarOpen}
                        handleClick={handleClick}
                        sidebarExpanded={sidebarExpanded}
                        setSidebarExpanded={setSidebarExpanded}
                      />
                      {/* {console.log("item", index, pathname.includes("/"))} */}
                      {item.subItems.length > 0 && (
                        <div
                          className={`transform overflow-hidden ${
                            !open && "hidden"
                          } ${sidebarOpen ? "block" : "hidden"}`}
                        >
                          <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                            {item.subItems.map((subItem, subIndex) => (
                              <SidebarLinkGroup
                                key={subIndex}
                                activeCondition={
                                  pathname === subItem.path ||
                                  pathname.includes(subItem.path)
                                }
                              >
                                {(handleSubClick, subOpen) => (
                                  <>
                                    <SidebarItem
                                      item={{
                                        ...subItem,
                                        open: subOpen,
                                        active:
                                          pathname === subItem.path ||
                                          pathname.includes(subItem.path),
                                      }}
                                      isOpen={sidebarOpen}
                                      handleClick={handleSubClick}
                                      sidebarExpanded={sidebarExpanded}
                                      setSidebarExpanded={setSidebarExpanded}
                                    />

                                    {subItem.subItems && (
                                      <div
                                        className={`transform overflow-hidden ${
                                          !subOpen && "hidden"
                                        }`}
                                      >
                                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                                          {subItem.subItems.map(
                                            (nestedItem, nestedIndex) => (
                                              <li key={nestedIndex}>
                                                <SidebarItem
                                                  item={{
                                                    ...nestedItem,
                                                    active:
                                                      pathname ===
                                                      nestedItem.path,
                                                  }}
                                                  isOpen={sidebarOpen}
                                                  handleClick={() => {}}
                                                  sidebarExpanded={
                                                    sidebarExpanded
                                                  }
                                                  setSidebarExpanded={
                                                    setSidebarExpanded
                                                  }
                                                />
                                              </li>
                                            )
                                          )}
                                        </ul>
                                      </div>
                                    )}
                                  </>
                                )}
                              </SidebarLinkGroup>
                            ))}
                          </ul>
                        </div>
                      )}
                    </>
                  )}
                </SidebarLinkGroup>
              ))}

              {/* {pages} */}
              <SidebarLinkGroup
                activeCondition={
                  pathname === "/page1" || pathname.includes("page1")
                }
              >
                {(handleClick, open) => (
                  <>
                    <NavLink
                      to="#"
                      className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                        (pathname === "/page1" || pathname.includes("page1")) &&
                        "bg-graydark dark:bg-meta-4"
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        sidebarExpanded
                          ? handleClick()
                          : setSidebarExpanded(true);
                      }}
                    >
                      <span>
                        <svg
                          className="fill-current"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.10322 0.956299H2.53135C1.5751 0.956299 0.787598 1.7438 0.787598 2.70005V6.27192C0.787598 7.22817 1.5751 8.01567 2.53135 8.01567H6.10322C7.05947 8.01567 7.84697 7.22817 7.84697 6.27192V2.72817C7.8751 1.7438 7.0876 0.956299 6.10322 0.956299ZM6.60947 6.30005C6.60947 6.5813 6.38447 6.8063 6.10322 6.8063H2.53135C2.2501 6.8063 2.0251 6.5813 2.0251 6.30005V2.72817C2.0251 2.44692 2.2501 2.22192 2.53135 2.22192H6.10322C6.38447 2.22192 6.60947 2.44692 6.60947 2.72817V6.30005Z"
                            fill=""
                          />
                          <path
                            d="M15.4689 0.956299H11.8971C10.9408 0.956299 10.1533 1.7438 10.1533 2.70005V6.27192C10.1533 7.22817 10.9408 8.01567 11.8971 8.01567H15.4689C16.4252 8.01567 17.2127 7.22817 17.2127 6.27192V2.72817C17.2127 1.7438 16.4252 0.956299 15.4689 0.956299ZM15.9752 6.30005C15.9752 6.5813 15.7502 6.8063 15.4689 6.8063H11.8971C11.6158 6.8063 11.3908 6.5813 11.3908 6.30005V2.72817C11.3908 2.44692 11.6158 2.22192 11.8971 2.22192H15.4689C15.7502 2.22192 15.9752 2.44692 15.9752 2.72817V6.30005Z"
                            fill=""
                          />
                          <path
                            d="M6.10322 9.92822H2.53135C1.5751 9.92822 0.787598 10.7157 0.787598 11.672V15.2438C0.787598 16.2001 1.5751 16.9876 2.53135 16.9876H6.10322C7.05947 16.9876 7.84697 16.2001 7.84697 15.2438V11.7001C7.8751 10.7157 7.0876 9.92822 6.10322 9.92822ZM6.60947 15.272C6.60947 15.5532 6.38447 15.7782 6.10322 15.7782H2.53135C2.2501 15.7782 2.0251 15.5532 2.0251 15.272V11.7001C2.0251 11.4188 2.2501 11.1938 2.53135 11.1938H6.10322C6.38447 11.1938 6.60947 11.4188 6.60947 11.7001V15.272Z"
                            fill=""
                          />
                          <path
                            d="M15.4689 9.92822H11.8971C10.9408 9.92822 10.1533 10.7157 10.1533 11.672V15.2438C10.1533 16.2001 10.9408 16.9876 11.8971 16.9876H15.4689C16.4252 16.9876 17.2127 16.2001 17.2127 15.2438V11.7001C17.2127 10.7157 16.4252 9.92822 15.4689 9.92822ZM15.9752 15.272C15.9752 15.5532 15.7502 15.7782 15.4689 15.7782H11.8971C11.6158 15.7782 11.3908 15.5532 11.3908 15.272V11.7001C11.3908 11.4188 11.6158 11.1938 11.8971 11.1938H15.4689C15.7502 11.1938 15.9752 11.4188 15.9752 11.7001V15.272Z"
                            fill=""
                          />
                        </svg>
                      </span>
                      <span
                        className={`${
                          !sidebarOpen ? "opacity-0" : "opacity-100"
                        }`}
                        style={{ transition: "opacity 0.3s" }}
                      >
                        Pages
                        <svg
                          className={`absolute left-[90%] top-1/2 -translate-y-1/2 fill-current ${
                            open && "rotate-180"
                          }`}
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                            fill=""
                          />
                        </svg>
                      </span>
                    </NavLink>
                    {/* Dropdown Menu Start */}
                    <div
                      className={`transform overflow-hidden ${
                        !open && "hidden"
                      }`}
                    >
                      <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                        <li>
                          <NavLink
                            to="page1"
                            className={({ isActive }) =>
                              "group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white " +
                              (isActive ? "!text-white" : "text-gray-500")
                            }
                          >
                            Page1
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="page2"
                            className={({ isActive }) =>
                              "group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white " +
                              (isActive ? "!text-white" : "text-gray-500")
                            }
                          >
                            Page2
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="page3"
                            className={({ isActive }) =>
                              "group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white " +
                              (isActive ? "!text-white" : "text-gray-500")
                            }
                          >
                            Page3
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="page4"
                            className={({ isActive }) =>
                              "group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white " +
                              (isActive ? "!text-white" : "text-gray-500")
                            }
                          >
                            Page4
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="page5"
                            className={({ isActive }) =>
                              "group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white " +
                              (isActive ? "!text-white" : "text-gray-500")
                            }
                          >
                            Page5
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                    {/* Dropdown Menu End */}
                  </>
                )}
              </SidebarLinkGroup>
              {/* Page 1  */}
              <li>
                <NavLink
                  to="/page1"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-white duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("page1") && "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <span>
                    <svg
                      className="fill-current"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.7499 2.9812H14.2874V2.36245C14.2874 2.02495 14.0062 1.71558 13.6405 1.71558C13.2749 1.71558 12.9937 1.99683 12.9937 2.36245V2.9812H4.97803V2.36245C4.97803 2.02495 4.69678 1.71558 4.33115 1.71558C3.96553 1.71558 3.68428 1.99683 3.68428 2.36245V2.9812H2.2499C1.29365 2.9812 0.478027 3.7687 0.478027 4.75308V14.5406C0.478027 15.4968 1.26553 16.3125 2.2499 16.3125H15.7499C16.7062 16.3125 17.5218 15.525 17.5218 14.5406V4.72495C17.5218 3.7687 16.7062 2.9812 15.7499 2.9812ZM1.77178 8.21245H4.1624V10.9968H1.77178V8.21245ZM5.42803 8.21245H8.38115V10.9968H5.42803V8.21245ZM8.38115 12.2625V15.0187H5.42803V12.2625H8.38115ZM9.64678 12.2625H12.5999V15.0187H9.64678V12.2625ZM9.64678 10.9968V8.21245H12.5999V10.9968H9.64678ZM13.8374 8.21245H16.228V10.9968H13.8374V8.21245ZM2.2499 4.24683H3.7124V4.83745C3.7124 5.17495 3.99365 5.48433 4.35928 5.48433C4.7249 5.48433 5.00615 5.20308 5.00615 4.83745V4.24683H13.0499V4.83745C13.0499 5.17495 13.3312 5.48433 13.6968 5.48433C14.0624 5.48433 14.3437 5.20308 14.3437 4.83745V4.24683H15.7499C16.0312 4.24683 16.2562 4.47183 16.2562 4.75308V6.94683H1.77178V4.75308C1.77178 4.47183 1.96865 4.24683 2.2499 4.24683ZM1.77178 14.5125V12.2343H4.1624V14.9906H2.2499C1.96865 15.0187 1.77178 14.7937 1.77178 14.5125ZM15.7499 15.0187H13.8374V12.2625H16.228V14.5406C16.2562 14.7937 16.0312 15.0187 15.7499 15.0187Z"
                        fill=""
                      />
                    </svg>
                  </span>
                  <span
                    className={`${!sidebarOpen ? "opacity-0" : "opacity-100"}`}
                    style={{ transition: "opacity 0.3s" }}
                  >
                    Page1
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        {/* Sidebar Menu */}
      </div>
    </aside>
  );
};

export default Sidebar;
