import { twitterIcon, youtubeIcon } from "../assets/icons";
import { BbcIcon, iconFb, iconSpotify, instagramImage } from "../assets/images";
import GridPhotos from "../components/GridPhotos";
import ResultSearch from "../components/ResultSearch";
import Summary from "../components/Summary";
import Footer from "../components/ui/Footer";

const Home = () => {
  return (
    <>
      <div id="" className=" p-1 max-w-[1100px] flex flex-col gap-9">
        <section className="flex flex-col gap-4 ">
          <div className="leading-[1.2]">
            <h2 className=" font-GoogleSans text-[28px] text-[#400014]">
              J Balvin
            </h2>
            <p className=" text-[14px] text-[#400014]">
              Cantante y productor musical colombiano
            </p>
          </div>
          <GridPhotos />
        </section>
        <section className="flex flex-col-reverse gap-9   md:flex-row justify-between ">
          <div className=" w-full flex flex-col gap-[1.5em]   md:max-w-[652px] mr-7    ">
            <ResultSearch
              smallImage="data:image/webp;base64,UklGRs4BAABXRUJQVlA4IMIBAABwCgCdASo4ADgAPjEOjEYiEREJgCADBLSACKT/T/yO4gjFb5n+Of5GQRr+q+bhqLfPE7APaJ9H+wV0nlGkx79FyYOXb9MiloJ+c/glFuMlok5rYLwgqxGTH6EsAAD+/z1c4XUPGaPTGG3/Wz/ofu3+VKPxnwf1/7u2/vs9e+cNfNsK+AxKRr/kIIXuTBgipc73FVpUplarc85kTHzu1gal1ZXpBnCyb/waIll0IzuxSP+/+ZrCcg+eBpt5Qt4kOZ+bn4om/yraCJxJPAQP/fydpdc5NXmKWfzRMd/9rPLrGdQcFkGUNoJVuXa6z/AAujJK5Ck/gYk+bWzs0gNZ3obH3/rkUqrhMcbJIl2rS6uIJhanglv/fdX+8jJ8x9kWISV3uDQyHwmiQdD+dQz8hnbo3xZKr4HA91+MPnWcdHYi5bdTugdC8A6hUdrr6MwRgO4TkmyGr4hvG8B9xJ8Ow3/5zXGlM75tW6OhkS/sd63PbUt90H7a8ni9Z+KmXu/PyyRV6TAyjSZo1dFOmJF+lJFEw9PgzI4XNL2HcEaSKIBb7Kwv+r2PF83/c9qEfluVnMMIzkLwBEoYRw4AAB55skgAAAA="
              nameTitle1="Wikipedia"
              nameTitle2="J Balvin - Wikipedia, la enciclopedia libre "
              cite="https://es.wikipedia.org › wiki › J_Balvin"
              content="José Álvaro Osorio Balvín (Medellín; 7 de mayo de 1985), más conocido como J Balvin, es un cantante y productor colombiano, reconocido como uno de los ..."
              imageContent="https://www.radiopuntorojo.com/wp-content/uploads/2024/02/jbalvin.jpg"
            />

            <ResultSearch
              smallImage={BbcIcon}
              nameTitle1="bbc.com"
              cite="https://www.bbc.com › mundo › noticias-59044190"
              nameTitle2="JBalvin: la polémica que llevó a la retirada de YouTube del..."
              content='
              18 oct 2021 — JBalvin: la polémica que llevó a la retirada de YouTube del videoclip de la canción "Perra" · Autor, Redacción · Título del autor, BBC News Mundo.
              
              '
            />

            <ResultSearch
              smallImage={instagramImage}
              nameTitle1="Instagram"
              nameTitle2="J Balvin (@jbalvin)"
              cite="https://www.instagram.com › cdpoole"
              content='51M Followers, 2973 Following, 13K Posts - J Balvin (@jbalvin) on Instagram: "RAYO ya disponible ⚡️ "'
            />

            <div id="questions" className="flex flex-col gap-3">
              <h3 className=" font-GoogleSans text-[22px]">Más preguntas</h3>
              <div className="flex flex-col">
                <Summary
                  question="¿Cuál es el verdadero nombre de J Balvin?"
                  content="Lorem ipsum"
                />
                <Summary
                  question="¿Estatura de J Balvin"
                  content="Lorem ipsum"
                />
                <Summary
                  question="¿Cuál es la esposa de Balvin?"
                  content="Lorem ipsum"
                />
                <Summary question="¿J Balvin es gay?" content="Lorem ipsum" />
              </div>
            </div>
            <ResultSearch
              smallImage="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg"
              cite="https://www.facebook.com › ... › J Balvin"
              nameTitle1="Facebook"
              nameTitle2="J Balvin"
              imageContent="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_lHydLm5amnUcWc-NvtRjzEbL5VdEIw7DFzXKr6caMUHTv4a2mtWL&usqp=CAE&s"
              content="J Balvin. 21334538 likes · 23797 talking about this. Musician/band."
            />
            <ResultSearch
              smallImage={iconSpotify}
              cite="https://open.spotify.com › intl-es › artist"
              nameTitle1="Spotify - Web Player. Music for everyone"
              nameTitle2="J Balvin"
              imageContent="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVRbo1yDuSmwrEMbpSXefWV12869tmyampXnbdGL7Y-WAkt2NSldu1&usqp=CAE&s"
              content="Escucha J Balvin en Spotify. Artista · 58.1M oyentes mensuales."
            />

            {/*  Tambíen se buscó */}
            <div className="flex flex-col gap-3">
              <h3 className=" font-GoogleSans text-[22px]">También se buscó</h3>

              <div className="grid grid-cols-2 gap-3">
                <div className=" bg-[#0000000a] p-2 rounded-lg flex items-center justify-between ">
                  <p>
                    Maluma <span className=" font-bold ">- Wikipedia</span>
                  </p>
                  <span>
                    <img src="/public/search.svg" alt="" />
                  </span>
                </div>
                <div className=" bg-[#0000000a] p-2 rounded-lg flex items-center justify-between ">
                  <p>
                    Shakira <span className=" font-bold ">- Wikipedia</span>
                  </p>
                  <span>
                    <img src="/public/search.svg" alt="" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/*  aside section  */}
          <div
            id="aside-desktop"
            className=" w-full md:border-l-[1px] md:w-[400px] md:pl-4 text-[14px]  "
          >
            <article className="text-[14px] flex flex-col gap-3 pb-5 border-b-[1px]  ">
              <h3 className=" text-colorDark font-medium text-[18px]">
                Acerca de
              </h3>
              <div className="flex flex-col gap-3 text-[#474747]">
                <p className="text-pretty">
                  José Álvaro Osorio Balvín, más conocido como J Balvin, es un
                  cantante y productor colombiano, reconocido como uno de los
                  artistas latinos más vendidos del mundo, con ventas de treinta
                  y cinco millones de álbumes y sencillos a nivel mundial.{" "}
                  <span className=" text-colorBlue hover:underline">
                    {" "}
                    Wikipedia
                  </span>
                </p>

                <p>
                  <span className="font-bold text-black">Nacimiento:</span> 7 de
                  mayo de 1985 (edad 39 años),
                  <span className=" text-colorBlue hover:underline">
                    Medellín
                  </span>
                </p>

                <p>
                  <span className=" font-bold text-black">
                    Socios de composicón:
                  </span>{" "}
                  <span className=" text-colorBlue hover:underline ">
                    Bad Bunny,
                  </span>
                  <span className=" text-colorBlue hover:underline ">
                    Ozuna,
                  </span>{" "}
                  <span className=" text-colorBlue hover:underline ">
                    Anuel AA
                  </span>
                </p>
                <p>
                  <span className=" font-bold text-black">Pareja:</span>{" "}
                  <span className=" text-colorBlue hover:underline ">
                    Valentina Ferrer
                  </span>{" "}
                  ( 2018 -)
                </p>
                <p>
                  <span className=" font-bold text-black">Estatura:</span>{" "}
                  <span className="">1.7 m</span>
                </p>
              </div>
            </article>

            <article className=" pt-5 flex flex-col gap-3 ">
              <h3 className=" text-colorDark font-medium text-[18px]">
                Perfiles
              </h3>
              <ul className="flex gap-4 items-center text-[14px] ">
                <li>
                  <a href="#" className="flex flex-col items-center gap-1">
                    <img
                      src={twitterIcon}
                      alt=""
                      className=" w-[30px] object-contain"
                    />
                    (X)Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="flex flex-col items-center">
                    <img
                      src={youtubeIcon}
                      alt=""
                      className=" w-[30px] object-contain"
                    />
                    <span></span> Youtube
                  </a>
                </li>
                <li>
                  <a href="#" className="flex flex-col items-center">
                    <img
                      src={iconSpotify}
                      alt=""
                      className=" w-[30px] object-contain"
                    />
                    Spotify
                  </a>
                </li>
              </ul>
            </article>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Home;
