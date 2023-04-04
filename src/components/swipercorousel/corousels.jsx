import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css";
import "./corousels.scss";

import { Autoplay, EffectFade } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <button onClick={() => swiper.slideNext()}>
      <i class="fas fa-angle-right"></i>
    </button>
  );
}
function SlidePrevButton() {
  const swiper = useSwiper();

  return (
    <button onClick={() => swiper.slidePrev()}>
      <i class="fas fa-angle-left"></i>
    </button>
  );
}

function SwiperCorousel() {
  return (
    <>
      <Swiper
        effect="fade"
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay]}
      >
        <SwiperSlide>
          <div className="all-slide">
            <div className="slide-one"></div>
            <div className="slide-thero">
              <div className="img-text">
                Bizning oziq-ovqat moddalarimiz dori <br /> bo'lishi kerak va
                dori-darmonlarimiz <br /> oziq-ovqat moddalari bo'lishi <br />
                kerak. Gippokrat
              </div>
            </div>
            <div className="button-bt">
              <SlidePrevButton />
              <SlideNextButton />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="all-slide">
            <div className="slide-one slide-two"></div>
            <div className="slide-thero">
              <div className="img-text">
                Qanchalik ko'p chaynasangiz, <br /> shunchalik uzoq umr
                ko'rasiz.
              </div>
            </div>
            <div className="button-bt">
              <SlidePrevButton />
              <SlideNextButton />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="all-slide">
            <div className="slide-one slide-three "></div>
            <div className="slide-thero">
              <div className="img-text">
                Inson nima bilan ovqatlansa <br /> u o'shadir. Lukretsiy
              </div>
            </div>
            <div className="button-bt">
              <SlidePrevButton />
              <SlideNextButton />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default SwiperCorousel;
