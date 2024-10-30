import Nav from "./components/Nav.tsx";
import Footer from "./components/Footer.tsx";
import Logo from "./assets/Nameless-logo.png";
import NoWorks from "./assets/Noworks-Logo.png";
import Xrii from "./assets/Xrii-logo.png";
import Unreal from "./assets/Unrealxr-logo.png";
import Zukas from "./assets/Zukas-logo.png";
import esportsHero from "./assets/eSports-Hero.png";
import HorseHero from "./assets/Horse-Hero.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./components/ui/carousel";
import News1 from "./assets/News-1.png";
import News2 from "./assets/News-2.png";
import News3 from "./assets/News-3.png";
import News4 from "./assets/News-4.png";
import Shop2 from "./assets/shop2.png";
import Shop3 from "./assets/shop3.png";
import Shop4 from "./assets/shop4.png";
import JoinBg from "./assets/Join-bg.png";

const App = () => {
  return (
    <div className="bg-web-black w-screen h-screen overflow-x-hidden">
      <Nav />
      <div className=" mt-7 relative">
        <img
          className="absolute right-0 top-0 w-1/2 lg:w-fit"
          src={Logo}
          alt="Logo"
        />

        <div className="space-y-3 container items-center py-24 z-20">
          <h1 className="text-web-white font-Russo text-5xl">
            Lazor Sports is a Global
          </h1>
          <h1 className="text-web-green font-Russo text-5xl">
            Sports Performance Brand
          </h1>
          <p className="text-web-white font-DM text-lg">
            We're working at the cutting edge of entertainment, gaming ,sports,
            and tech. <br /> Discover the world of Lazor Sports!
          </p>
          <div className="space-x-4 pt-5">
            <button className="bg-web-white text-web-black rounded md py-3 px-6">
              Watch
            </button>
            <button className="bg-web-black text-web-white rounded md py-3 px-6 border-web-white border">
              Join Us
            </button>
          </div>
        </div>
      </div>
      <div className="container py-24">
        <div className="m-auto text-center space-y-10">
          <h1 className="text-web-white opacity-60 font-DM font-base text-xl">
            OUR SPONSORS
          </h1>
          <div className="flex mx-auto justify-evenly">
            <img src={NoWorks} alt="Noworks logo" />
            <img src={Xrii} alt="Xrii logo" />
            <img src={Unreal} alt="Unreal Logo" />
            <img src={Zukas} alt="Zukas Logo" />
            <img src={Unreal} alt="Unreal Logo" />
          </div>
        </div>
      </div>
      <div className="container pb-24">
        <div>
          <h1 className="text-web-white font-Russo text-4xl text-center">
            Discover the World of <br />
            <span className="text-web-green">Lazor Sports</span>
          </h1>
          <div className="flex gap-12 mt-8">
            <div className="w-1/2 relative">
              <img src={esportsHero} alt="esportshero" />
              <div className="absolute bottom-12 px-5 flex justify-between w-full m-auto">
                <h1 className="font-Russo text-2xl text-web-white">eSports</h1>
                <h2 className="bg-web-green bg-opacity-40 text-web-green rounded-full py-1.5 px-3 font-DM font-semibold">
                  Coming Soon
                </h2>
              </div>
            </div>
            <div className="w-1/2 relative">
              <img src={HorseHero} alt="esportshero" />
              <div className="absolute bottom-12 px-5 items-center flex justify-between w-full m-auto">
                <h1 className="font-Russo text-2xl text-web-white">
                  Horse Racing
                </h1>
                <h2 className="bg-web-white text-web-black rounded-md py-3 px-4 font-DM font-semibold">
                  Learn More
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-24">
        <div className="flex ">
          <h1 className="font-Russo text-web-white text-4xl text-center m-auto">
            Latest News
          </h1>
          <button className="bg-web-green text-web-black font-DM py-2 px-6 rounded-md font-semibold">
            See All
          </button>
        </div>
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <div className="grid grid-rows-2 grid-cols-3 gap-5 max-w-[1000px] m-auto">
                <div className="m-auto col-span-3 flex justify-center relative w-fit">
                  <img src={News1} alt="Heroimg" />
                  <div className="absolute left-10 bottom-10 space-y-2">
                    <h1 className="text-web-white font-Russo text-3xl">
                      Horizon Forbidden <br /> West - 5 emotions
                    </h1>
                    <p className="text-web-white font-DM text-lg ">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
                      <br /> Quis a itaque ab, illo, explicabo, sunt rerum
                      quod...
                    </p>
                    <button className="bg-web-green text-web-black font-DM py-2.5 px-6 rounded-md font-semibold">
                      Continue Reading
                    </button>
                    <h2 className="text-web-white font-DM  text-xs font-semibold">
                      Aug 20 • Games
                    </h2>
                  </div>
                </div>

                <div className="m-auto col-start-1 row-start-2 flex justify-center relative w-fit">
                  <img src={News2} alt="Heroimg" />
                  <div className="absolute left-10 bottom-10 space-y-2">
                    <h1 className="text-web-white font-Russo text-xl">
                      Horizon Forbidden <br /> West - 5 emotions
                    </h1>
                    <p className="text-web-white font-DM text-sm ">
                      Lorem ipsum dolor sit amet, <br /> consectetur adipisicing
                      elit...
                    </p>
                    <button className="bg-web-green text-web-black font-DM py-2.5 px-6 rounded-md font-semibold">
                      Continue Reading
                    </button>
                    <h2 className="text-web-white font-DM  text-xs font-semibold">
                      Aug 20 • Games
                    </h2>
                  </div>
                </div>
                <div className="m-auto col-start-2 flex justify-center relative w-fit">
                  <img src={News3} alt="Heroimg" />
                  <div className="absolute left-10 bottom-10 space-y-2">
                    <h1 className="text-web-white font-Russo text-xl">
                      Horizon Forbidden <br /> West - 5 emotions
                    </h1>
                    <p className="text-web-white font-DM text-sm ">
                      Lorem ipsum dolor sit amet, <br /> consectetur adipisicing
                      elit...
                    </p>
                    <button className="bg-web-green text-web-black font-DM py-2.5 px-6 rounded-md font-semibold">
                      Continue Reading
                    </button>
                    <h2 className="text-web-white font-DM  text-xs font-semibold">
                      Aug 20 • Games
                    </h2>
                  </div>
                </div>
                <div className="m-auto col-start-3 flex justify-center relative w-fit">
                  <img src={News4} alt="Heroimg" />
                  <div className="absolute left-10 bottom-10 space-y-2">
                    <h1 className="text-web-white font-Russo text-xl">
                      Horizon Forbidden <br /> West - 5 emotions
                    </h1>
                    <p className="text-web-white font-DM text-sm ">
                      Lorem ipsum dolor sit amet, <br /> consectetur adipisicing
                      elit...
                    </p>
                    <button className="bg-web-green text-web-black font-DM py-2.5 px-6 rounded-md font-semibold">
                      Continue Reading
                    </button>
                    <h2 className="text-web-white font-DM  text-xs font-semibold">
                      Aug 20 • Games
                    </h2>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="grid grid-rows-2 grid-cols-3 gap-5 max-w-[1000px] m-auto">
                <div className="m-auto col-span-3 flex justify-center relative w-fit">
                  <img src={News1} alt="Heroimg" />
                  <div className="absolute left-10 bottom-10 space-y-2">
                    <h1 className="text-web-white font-Russo text-3xl">
                      Horizon Forbidden <br /> West - 5 emotions
                    </h1>
                    <p className="text-web-white font-DM text-lg ">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
                      <br /> Quis a itaque ab, illo, explicabo, sunt rerum
                      quod...
                    </p>
                    <button className="bg-web-green text-web-black font-DM py-2.5 px-6 rounded-md font-semibold">
                      Continue Reading
                    </button>
                    <h2 className="text-web-white font-DM  text-xs font-semibold">
                      Aug 20 • Games
                    </h2>
                  </div>
                </div>

                <div className="m-auto col-start-1 row-start-2 flex justify-center relative w-fit">
                  <img src={News2} alt="Heroimg" />
                  <div className="absolute left-10 bottom-10 space-y-2">
                    <h1 className="text-web-white font-Russo text-xl">
                      Horizon Forbidden <br /> West - 5 emotions
                    </h1>
                    <p className="text-web-white font-DM text-sm ">
                      Lorem ipsum dolor sit amet, <br /> consectetur adipisicing
                      elit...
                    </p>
                    <button className="bg-web-green text-web-black font-DM py-2.5 px-6 rounded-md font-semibold">
                      Continue Reading
                    </button>
                    <h2 className="text-web-white font-DM  text-xs font-semibold">
                      Aug 20 • Games
                    </h2>
                  </div>
                </div>
                <div className="m-auto col-start-2 flex justify-center relative w-fit">
                  <img src={News3} alt="Heroimg" />
                  <div className="absolute left-10 bottom-10 space-y-2">
                    <h1 className="text-web-white font-Russo text-xl">
                      Horizon Forbidden <br /> West - 5 emotions
                    </h1>
                    <p className="text-web-white font-DM text-sm ">
                      Lorem ipsum dolor sit amet, <br /> consectetur adipisicing
                      elit...
                    </p>
                    <button className="bg-web-green text-web-black font-DM py-2.5 px-6 rounded-md font-semibold">
                      Continue Reading
                    </button>
                    <h2 className="text-web-white font-DM  text-xs font-semibold">
                      Aug 20 • Games
                    </h2>
                  </div>
                </div>
                <div className="m-auto col-start-3 flex justify-center relative w-fit">
                  <img src={News4} alt="Heroimg" />
                  <div className="absolute left-10 bottom-10 space-y-2">
                    <h1 className="text-web-white font-Russo text-xl">
                      Horizon Forbidden <br /> West - 5 emotions
                    </h1>
                    <p className="text-web-white font-DM text-sm ">
                      Lorem ipsum dolor sit amet, <br /> consectetur adipisicing
                      elit...
                    </p>
                    <button className="bg-web-green text-web-black font-DM py-2.5 px-6 rounded-md font-semibold">
                      Continue Reading
                    </button>
                    <h2 className="text-web-white font-DM  text-xs font-semibold">
                      Aug 20 • Games
                    </h2>
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="container py-24 ">
        <h1 className="text-web-white font-Russo text-4xl mx-auto text-center">
          Roadmap
        </h1>
        <div></div>
      </div>
      <div className="container py-24">
        <div className="flex mb-10 justify-center">
          <h1 className="font-Russo text-web-white text-4xl text-center  ml-[46%]">
            Shop
          </h1>
          <button className="bg-web-green text-web-black justify-self-end font-DM py-2 ml-auto  px-6 rounded-md font-semibold">
            See All
          </button>
        </div>

        <Carousel>
          <CarouselContent>
            <CarouselItem className="basis-1/3">
              <div className="">
                <div className="m-auto  flex justify-center relative w-fit">
                  <img className="rounded-2xl " src={Shop4} alt="Heroimg" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-85 rounded-2xl"></div>
                  <div className="absolute left-10 bottom-10 space-y-2">
                    <h1 className="text-web-white font-Russo text-3xl">
                      Orange Lazor <br /> Sports T-shirt
                    </h1>
                    <p className="text-web-white font-DM text-slg ">
                      Lorem ipsum dolor sit amet, consectetur
                    </p>
                    <h2 className="text-web-green font-DM  text-xl font-semibold">
                      $69.99
                    </h2>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <div className="">
                <div className="m-auto  flex justify-center relative w-fit">
                  <img className="rounded-2xl " src={Shop2} alt="Heroimg" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-85 rounded-2xl"></div>
                  <div className="absolute left-10 bottom-10 space-y-2">
                    <h1 className="text-web-white font-Russo text-3xl">
                      Orange Lazor <br /> Sports T-shirt
                    </h1>
                    <p className="text-web-white font-DM text-slg ">
                      Lorem ipsum dolor sit amet, consectetur
                    </p>
                    <h2 className="text-web-green font-DM  text-xl font-semibold">
                      $69.99
                    </h2>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <div className="">
                <div className="m-auto  flex justify-center relative w-fit">
                  <img className="rounded-2xl " src={Shop3} alt="Heroimg" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-85 rounded-2xl"></div>
                  <div className="absolute left-10 bottom-10 space-y-2">
                    <h1 className="text-web-white font-Russo text-3xl">
                      Orange Lazor <br /> Sports T-shirt
                    </h1>
                    <p className="text-web-white font-DM text-slg ">
                      Lorem ipsum dolor sit amet, consectetur
                    </p>
                    <h2 className="text-web-green font-DM  text-xl font-semibold">
                      $69.99
                    </h2>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <div className="">
                <div className="m-auto  flex justify-center relative w-fit">
                  <img className="rounded-2xl " src={Shop4} alt="Heroimg" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-85 rounded-2xl"></div>
                  <div className="absolute left-10 bottom-10 space-y-2">
                    <h1 className="text-web-white font-Russo text-3xl">
                      Orange Lazor <br /> Sports T-shirt
                    </h1>
                    <p className="text-web-white font-DM text-slg ">
                      Lorem ipsum dolor sit amet, consectetur
                    </p>
                    <h2 className="text-web-green font-DM  text-xl font-semibold">
                      $69.99
                    </h2>
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div>
        <div className="relative flex items-center justify-center m-auto">
          <img src={JoinBg} alt="bg" />

          <div className=" gap-3 absolute top-[25%] m-auto justify-center flex flex-col">
            <h1 className="font-Russo text-web-black text-center text-6xl">
              Join the Club
            </h1>
            <p className="font-DM text-center text-2xl mb-5">
              Sign up to our newsletter so you never miss out on news and <br />
              exclusive offers.
            </p>
            <input
              placeholder="Full Name"
              className=" rounded-sm py-3 px-4 font-DM m-auto text-lg w-[500px] "
              type="Full Name"
            />
            <input
              placeholder="Email"
              className=" rounded-sm py-3 px-4 font-DM m-auto text-xl w-[500px] "
              type="Email"
            />
            <button className="rounded-sm py-3 px-4 font-DM m-auto text-xl w-[500px] bg-web-black text-web-white font-semibold">
              Join Us
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
