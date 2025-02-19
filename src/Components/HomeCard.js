import { Link } from "react-router-dom";

import Icon from "./Icon";

const HomeCard = (props) => {
  const { title, description, link, bgwrapper, icon_name } = props;

  return (
    <div>
      <div className="w-80 relative group">
        <span className="absolute transition-all duration-500 opacity-10 -inset-px bg-gradient-to-r from-[#FFEB3B] via-[#FFEB3B] to-[#FFEB3B] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-500 "></span>
        <div className="transform transition-all duration-500 group-hover:scale-105">
          <Link to={link} alt="wrapper" className="hover:no-underline">
            <div className="h-60 w-80 rounded-lg relative overflow-hidden ">
              <img
                src={bgwrapper}
                class="absolute inset-0 h-full w-full object-cover"
              ></img>

              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-50%">
                <div className="z-10 p-3 mt-3 absolute inset-x-0 bottom-0 text-3xl font-bold text-[#FFEB3B] focus:outline-none focus:ring">
                  {title}
                    <Icon name={icon_name} />
                  <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                    {description}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
