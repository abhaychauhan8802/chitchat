import { UserHeader, ChatHeader } from "../../components";

const Home = () => {
  return (
    <div>
      <div className="w-full h-screen grid grid-cols-[1fr_3fr]">
        <div className="h-screen w-full border-r-2 border-base-300 bg-base-100 flex flex-col">
          <div>
            <UserHeader />
          </div>
          <div className="px-8 py-5 h-full overflow-y-scroll">
            <ul>
              <li>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Fugiat, illo.
              </li>
              0+54
              <li>
                Molestias maxime modi nulla magnam. Tenetur deserunt soluta
                harum nulla!
              </li>
              <li>
                Nobis iusto incidunt ducimus maiores nulla in beatae tempora
                velit.
              </li>
              <li>
                Rerum earum aliquam praesentium optio! Suscipit praesentium
                deleniti tempora vitae.
              </li>
              <li>
                Officia expedita tenetur amet ut dicta alias sed iusto iure.
              </li>
              <li>
                Amet asperiores a dolore quia omnis iure soluta totam labore!
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                odit laboriosam nemo et tenetur veniam soluta omnis doloremque
                in deserunt.
              </li>
              <li>
                Non nemo optio ea. Iste, nesciunt voluptates nihil pariatur sit,
                repellat labore aliquid sed explicabo, a tenetur reprehenderit
                unde porro!
              </li>
              <li>
                Quia esse possimus non itaque. Beatae, distinctio ipsam esse aut
                perspiciatis praesentium eveniet tenetur sed autem laboriosam,
                voluptatem doloremque culpa.
              </li>
              <li>
                Ipsam, rerum aliquam. Eveniet nemo nesciunt amet laboriosam
                laborum praesentium nihil minus, iste fugiat cumque, minima,
                nulla libero quas exercitationem!
              </li>
              <li>
                Non, optio? Rem, at quod officiis reprehenderit molestiae
                accusantium nisi totam labore, culpa modi quibusdam officia quam
                ipsa, voluptatem praesentium?
              </li>
              <li>
                Explicabo provident, rerum quibusdam eos nam praesentium
                dignissimos ad doloribus esse iusto molestias similique tenetur
                earum ea, quam fugiat harum.
              </li>
              <li>
                Eligendi eaque dolorum, fugit pariatur, illum fugiat a mollitia
                animi minima voluptatibus veniam velit temporibus nemo
                dignissimos omnis magni possimus?
              </li>
              <li>
                Dolores aspernatur atque, iste a ea cupiditate aperiam quis
                assumenda temporibus deleniti ad fugit sint neque tempora qui
                sit voluptate!
              </li>
              <li>
                Ullam non, eveniet illo nam culpa voluptates ab autem quidem
                atque expedita vero nobis quis sint at? Natus, quae accusamus.
              </li>
              <li>
                Odio ducimus, numquam cumque laborum voluptates repellat optio
                fuga quae repellendus voluptate in? Nisi, libero? Reprehenderit,
                voluptatum soluta! Commodi, ea!
              </li>
            </ul>
          </div>
        </div>
        <div className="h-full w-full bg-base-200">
          <div>
            <ChatHeader />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
