import { image1, image2, image3 } from "../assets/images";
import Card from "./Card";

const GridPhotos = () => {
  return (
    <div className="grid-container ">
      <div className="grid-area-one">
        <img src={image1} alt="" className="pic1 rounded-l-[10px] " />
        <img src={image2} alt="" className="pic2" />
        <img src={image3} alt="" className="pic3" />
      </div>
      <div className="grid-area-two flex gap-3">
        <div
          id="card-co"
          className="w-[50%] lg:block  overflow-hidden rounded-[20px]"
        >
          <Card />
        </div>
        <div
          id="grid-left"
          className="w-[50%] flex flex-col gap-5  h-full  text-[#400014] "
        >
          <div className="flex h-[50%] gap-3 relative">
            <article className=" font-GoogleSans w-[60%] bg-bgCard rounded-[20px] p-2 text-[#400014] relative">
              {" "}
              <header className="flex justify-between items-center">
                <h3 className="text-[14px]">Edad</h3>
                <span>
                  <img src="/arrow.svg" alt="" />
                </span>
              </header>
              <p className=" absolute bottom-2  left-2 flex flex-col gap-1">
                <span className=" text-xl leading-[1] ">39 años</span>
                <span className=" text-[14px] ">1 Mayo 1985</span>
              </p>
            </article>
            <article className=" font-GoogleSans w-[60%] bg-bgCard rounded-[20px] p-2 text-[#400014] relative">
              {" "}
              <header className="flex justify-between items-center">
                <h3 className="text-[14px]">Socios de...</h3>
                <span>
                  <img src="/arrow.svg" alt="" />
                </span>
              </header>
              <p className=" absolute bottom-2  left-2 flex flex-col gap-1">
                <span className=" text-xl leading-[1] "></span>
                <span className=" text-[14px] ">
                  Bad Bunny, Ozuna, Anuel AA, Maluma, Karol G
                </span>
              </p>
            </article>
          </div>
          <div id="bottom" className="h-[50%] overflow-hidden rounded-[20px]">
            <img src={image1} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default GridPhotos;