import app from "./../assets/Virtuo_Drive_Free-5.jpeg";
import playstore from "./../assets/google-play-badge.png";
import appstore from "./../assets/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg";

const AppCTA = () => {
  return (
    <section className="py-8 lg:py-12">
      <div className="">
        <div className="relative flex items-center h-64 bg-black rounded-lg lg:h-[320px] xxl:h-[360px]">
          <img
            src={app}
            alt="Pattern"
            class="absolute inset-0 object-cover w-full h-full opacity-80 lg:rounded-xl"
          />

          <div className="block relative py-8 px-4 md:p-12 w-full">
            <h2 class="mb-6 text-3xl font-bold text-white sm:text-4xl">
              Download the Africar app
            </h2>

            <p class="my-4 leading-relaxed text-white/90">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              nam dolorum aliquam, quibusdam aperiam voluptatum.
            </p>

            <div className="flex items-center justify-center space-x-6">
              <div className="cursor-pointer">
                <img
                  src={appstore}
                  width="135px"
                  height="40px"
                  alt="appstore"
                />
              </div>
              <div className="cursor-pointer">
                <img
                  src={playstore}
                  width="165px"
                  height="64px"
                  alt="play store"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppCTA;
