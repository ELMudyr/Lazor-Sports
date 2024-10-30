import Logo from "../assets/Logo.png";
import HorseIcon from "../assets/Horse-icon.png";
import HeadsetIcon from "../assets/Headset-icon.png";
import AboutIcon from "../assets/About-icon.png";
import NewsIcon from "../assets/News-icon.png";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../components/ui/navigation-menu";

const Nav = () => {
  return (
    <div className="flex justify-between m-auto w-screen py-8 container font-DM">
      <img src={Logo} alt="Logo" />
      <div className="my-auto">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Discover</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink className="flex py-5 items-center">
                  <div className="container">
                    <h2 className="text-web-black opacity-70 text-xs font-base">
                      eSports
                    </h2>
                    <div className="flex items-center gap-3 ">
                      <img
                        className="object-contain"
                        src={HeadsetIcon}
                        alt="Headset-icon"
                      />
                      <div className="text-center">
                        <h1 className="text-web-black opacity-40 text-md font-semibold">
                          Our Teams
                        </h1>
                        <p className="bg-web-green bg-opacity-10 text-[.7rem] font-semibold text-web-green rounded-full py-0.5 px-2">
                          Coming Soon
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="container ">
                    <h2 className="text-web-black opacity-70 text-xs font-base">
                      Horse Racing
                    </h2>
                    <div className="flex items-center gap-3">
                      <img
                        className="object-contain"
                        src={HorseIcon}
                        alt="Horse-icon"
                      />
                      <h1 className="text-web-black font-semibold">
                        Our Horses
                      </h1>
                    </div>
                  </div>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Sponsors</NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Company</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>
                  <div>
                    <div className="container pt-5 pb-2.5">
                      <div className="flex items-center gap-3 ">
                        <img
                          className="object-contain"
                          src={AboutIcon}
                          alt="About Icon"
                        />

                        <h1 className="text-web-black  text-md font-semibold">
                          About
                        </h1>
                      </div>
                    </div>
                    <hr className="w-[90%] mx-auto" />
                    <div className="container pb-5 pt-2.5">
                      <div className="flex items-center gap-3">
                        <img
                          className="object-contain"
                          src={NewsIcon}
                          alt="News Icon"
                        />
                        <h1 className="text-web-black font-semibold">
                          News & Press
                        </h1>
                      </div>
                    </div>
                  </div>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <a href="#">Shop</a>
              </NavigationMenuTrigger>
            </NavigationMenuItem>
            <button className="bg-web-green py-2 px-4 font-semibold rounded-md">
              Get In Touch
            </button>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default Nav;
