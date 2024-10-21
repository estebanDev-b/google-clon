const ResultSearch = ({
  smallImage,
  imageContent,
  cite,
  nameTitle1,
  nameTitle2,
  content,
}) => {
  return (
    <>
      <article className="relative w-full">
        {imageContent && (
          <figure className=" float-right mr-1 hidden md:block">
            <img
              src={imageContent}
              alt=""
              className=" w-[92px] h-[92px] object-cover rounded-md "
            />
          </figure>
        )}
        <div>
          <header className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div id="small-image">
                <img src={smallImage} alt="" className="w-7 h-7 rounded-full" />
              </div>
              <div className="flex flex-col leading-[1.2] max-w-[80%] ">
                <h1 className=" text-[14px]"> {nameTitle1} </h1>
                <cite className=" not-italic text-xs text-ColortextSummary font-normal truncate ">
                  {cite}
                </cite>
              </div>
            </div>

            <h3 className=" text-colorBlue text-xl hover:underline ">
              {nameTitle2}
            </h3>
          </header>

          <div className="">
            {imageContent && (
              <figure className="float-right  pl-3 md:hidden">
                <img
                  src={imageContent}
                  alt=""
                  className=" w-[92px] h-[92px] object-cover rounded-md "
                />
              </figure>
            )}
            <p className=" text-ColortextSummary text-[14px] text-pretty ">
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </p>
          </div>
        </div>
      </article>
    </>
  );
};

export default ResultSearch;
