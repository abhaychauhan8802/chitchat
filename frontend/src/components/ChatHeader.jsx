import { HiOutlineDotsVertical } from "react-icons/hi";

const ChatHeader = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-5">
      <div className="flex flex-1 items-center gap-4">
        <div tabIndex={0} className="avatar avatar-placeholder cursor-pointer">
          <div className="bg-neutral text-neutral-content w-9 rounded-full">
            <span className="text-md font-bold">A</span>
          </div>
        </div>
        <span className="font-semibold text-gray-600 text-md">Abhay</span>
      </div>
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

export default ChatHeader;
