import { Link } from "react-router-dom";
import Avatar from "../atoms/Avatar";

const Header = () => {
  return (
    <header className=" p-[0.6em] md:p-[4vh] border-b-[1px] md:pb-5 ">
      <div id="header-mobile" className="flex flex-col gap-4 md:hidden">
        <div className="flex justify-between items-center">
          <span id="lab">
            <img src="/labIcon.svg" alt="" />
          </span>

          <a href="#">
            <img
              src="/googlelogo_color_92x30dp.png"
              alt=""
              className="w-[96px] object-contain"
            />
          </a>

          <a href="#">
            <Avatar />
          </a>
        </div>

        <form>
          <div className=" overflow-hidden relative shadow-md    rounded-full flex px-3 items-center ">
            <button className="">
              <img src="/search.svg" alt="" />
            </button>
            <input
              type="text"
              value="J Balvin"
              className="w-full outline-none  h-11 rounded-full px-2 "
            />
            <div className="flex items-center gap-2">
              <button>
                <img src="/close.svg" alt="" />
              </button>
              |
              <button>
                <img src="/camera.svg" alt="" />
              </button>
            </div>
          </div>
        </form>

        <ul className=" text-[14px] font-GoogleSans flex items-center gap-2 flex-nowrap overflow-hidden text-colorTextNav">
          <li>Todo</li>
          <li>Imágenes</li>
          <li>Noticias</li>
          <li>Videos</li>
          <li>Shoping</li>
          <li>Libros</li>
        </ul>
      </div>
      <div id="header-desktop " className="hidden md:block  ">
        <div className="flex justify-between">
          <div className="flex items-center gap-9 ">
            <a href="#">
              <img
                src="/googlelogo_color_92x30dp.png"
                alt=""
                className="w-[96px] object-contain"
              />
            </a>
            <div className="">
              <form className="">
                <div className=" w-[676px] overflow-hidden relative shadow-md  rounded-full flex px-3 items-center ">
                  <button className="">
                    <img src="/search.svg" alt="" />
                  </button>
                  <input
                    type="text"
                    value="J Balvin"
                    className="w-full outline-none  h-11 rounded-full px-2 "
                  />
                  <div className="flex items-center gap-2">
                    <button>
                      <img src="/close.svg" alt="" />
                    </button>
                    |
                    <button>
                      <img src="/camera.svg" alt="" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <Avatar />
        </div>

        <nav className=" ml-[136px] mt-5 ">
          <ul className=" text-[14px] font-GoogleSans flex items-center gap-4 flex-nowrap overflow-hidden text-colorTextNav">
            <li>Todo</li>
            <li>
              <Link to="/test" className="relative">
                Imagenes
                <span className="absolute bottom-0 left-0 h-4 w-full bg-black translate-y-4"></span>
              </Link>
            </li>
            <li>Noticias</li>
            <li>Videos</li>
            <li>Shoping</li>
            <li>Libros</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
