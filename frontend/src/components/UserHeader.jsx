import { HiOutlineDotsVertical } from "react-icons/hi";

const UserHeader = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-5">
      <div className="flex-1">
        <span className="text-2xl select-none font-bold text-gray-800">
          ChitChat
        </span>
      </div>

      {/* Dropdown */}
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <button className="btn btn-square btn-ghost rounded-full text-lg">
            <HiOutlineDotsVertical />
          </button>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserHeader;
