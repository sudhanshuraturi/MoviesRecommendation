import { useNavigate } from "react-router-dom";
import Header from "./common/Header";
// import { useParams } from "react-router-dom";

const Details = () => {
  // const { id } = useParams();
  const navigate = useNavigate();
  let x =
    "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hTP1DtLGFamjfu8WqjnuQdP1n4i.jpg";
  return (
    <>
      <Header />
      <div className="h-full w-full overflow-hidden">
        <img
          src={x}
          className="w-full h-full absolute -z-10 object-cover"
          alt="movie-cover"
        />
        <div
          className={`flex items-center w-full h-screen px-10 py-10 bg-black bg-opacity-70`}
        >
          <img
            className="h-[70%] w-[30%] rounded-2xl"
            src={x}
            alt="movie-cover"
          />
          <div className="h-[70%] ml-5 p-10 overflow-y-auto no-scrollbar rounded-2xl bg-slate-600 text-white">
            <div className="flex xs:block justify-between">
              <h1 className="text-4xl font-extrabold">Attack on Titans</h1>
              <button
                onClick={() => navigate(-1)}
                className="bg-white text-slate-600 p-2 rounded-2xl"
              >
                Back⬅️
              </button>
            </div>
            <div className="mt-8">
              <h2 className="text-xl font-bold">Overview</h2>
              <p className="mt-3 truncate-multiline-container">
                Several hundred years ago, humans were nearly exterminated by
                Titans. Titans are typically several stories tall, seem to have
                no intelligence, devour human beings and, worst of all, seem to
                do it for the pleasure rather than as a food source. A small
                percentage of humanity survived by walling themselves in a city
                protected by extremely high walls, even taller than the biggest
                Titans. Flash forward to the present and the city has not seen a
                Titan in over 100 years. Teenage boy Eren and his foster sister
                Mikasa witness something horrific as the city walls are
                destroyed by a Colossal Titan that appears out of thin air. As
                the smaller Titans flood the city, the two kids watch in horror
                as their mother is eaten alive. Eren vows that he will murder
                every single Titan and take revenge for all of mankind. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Distinctio
                cumque ullam recusandae, officiis incidunt vero. Vitae non
                pariatur est facere saepe, deserunt quidem exercitationem nisi
                possimus itaque nesciunt voluptatem soluta optio vel
                repudiandae! Sint, sunt deserunt reiciendis, at quaerat enim
                illo officiis cupiditate ipsum, tempora animi laudantium nam
                perspiciatis dignissimos voluptatem architecto? Quo consequatur
                pariatur voluptatum sequi ipsa aliquam sit recusandae nam, at
                dolore unde, incidunt assumenda in repudiandae dignissimos rerum
                autem ducimus velit ipsam! Optio, cupiditate. Nisi vero
                voluptatem eius amet molestiae ipsum nam. Laboriosam recusandae
                minima possimus sint a illum velit explicabo quod sit placeat,
                soluta aut accusantium nam tenetur vel, amet temporibus, laborum
                perspiciatis eaque fuga dolore facere error est. Est cum eos
                esse sint unde dolorum ratione, voluptatem sunt consequuntur
                earum, fugiat corporis molestiae! Autem, laboriosam temporibus.
                Maxime suscipit repudiandae quasi? Praesentium, necessitatibus
                libero laboriosam animi harum accusamus quae cumque amet itaque
                asperiores obcaecati dignissimos ut debitis atque inventore.
                Ducimus odit culpa voluptatem minus, inventore quidem deleniti
                earum. Doloremque impedit ad fugiat quo at porro perferendis
                laboriosam inventore distinctio, omnis reprehenderit cupiditate
                dolorem hic corrupti corporis autem, dignissimos adipisci
                molestias? Nulla esse deleniti libero qui, ratione totam
                quisquam praesentium cum iure obcaecati ad excepturi veritatis
                omnis, culpa ipsam! In officia illo, aliquam laboriosam amet
                reprehenderit perspiciatis deserunt maxime recusandae assumenda
                odit et asperiores, illum dolor vitae voluptate consectetur non
                enim iusto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
