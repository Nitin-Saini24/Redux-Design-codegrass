import { NavLink } from "react-router-dom";

const SidebarItem = ({
  item,
  isOpen,
  handleClick,
  sidebarExpanded,
  setSidebarExpanded,
}) => {
  return (
    <NavLink
      to={item?.subItems?.length ? "#" : item.path} // Prevent navigation if it has sub-items
      className={`{ group relative flex items-center gap-2.5 text-nowrap rounded-sm px-2 origin-left py-2 font-medium text-white duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4  ${
        item.active ? "bg-graydark dark:bg-meta-4" : ""
      }`}
      onClick={(e) => {
        if (item?.subItems?.length) {
          e.preventDefault(); // Prevent default if it has sub-items
          sidebarExpanded ? handleClick() : setSidebarExpanded(true);
        }
      }}
    >
      <img
        src={item.icon}
        className="mr-5"
        alt={`${item.title} Icon`}
        style={{ width: "18px", height: "18px" }}
      />
      <span
        className={`${!isOpen ? "opacity-0" : "opacity-100"}`}
        style={{ transition: "opacity 0.3s" }}
      >
        {item?.title}
        {item?.subItems?.length > 0 && (
          <svg
            className={`absolute left-[90%] top-1/2 -translate-y-1/2 fill-current ${
              item.open && "rotate-180"
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
            />
          </svg>
        )}
      </span>
    </NavLink>
  );
};

export default SidebarItem;
