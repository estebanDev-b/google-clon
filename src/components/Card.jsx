const Card = () => {
  return (
    <article
      id="card-inner"
      className=" bg-bgCard text-[#400014] text-[14px] w-full h-full flex flex-col"
    >
      <figure>
        <img
          src="https://www.futbolred.com/files/article_main/uploads/2021/09/10/613b61bf7294d.jpeg"
          className=" w-full h-[150px] object-cover"
          alt=""
        />
      </figure>
      <div className=" h-[100%] p-2 flex flex-col justify-between ">
        <h3>J Balvin, Feid, Doblexxó (Oficial video)</h3>
        <p className=" font-GoogleSans flex flex-col ">
          <span>
            Escucha / Stream “Rayo” on your favorite platform:
            https://JBalvin.lnk.to/Rayo Subscribe to my YouTube channel here:
            ...
          </span>
        </p>
      </div>
    </article>
  );
};

export default Card;