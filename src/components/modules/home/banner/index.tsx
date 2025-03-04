"use client";
import { EffectFade, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import img1 from '../../../../app/assets/tution1.jpg';
import img2 from '../../../../app/assets/tutor2.jpg';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const Banner = () => {
  return (
    <div className="max-w-6xl mx-auto   ">
      <div className=" relative">
        <Swiper
          effect={'fade'}
          fadeEffect={{ crossFade: true }}
          slidesPerView={1}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, EffectFade]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="carousel-item relative w-full style lg:h-[550px] mt-8">
              <Image src={img2} height={500} alt='banner' className="w-full rounded-xl overflow-hidden " />
              <div className="absolute rounded-xl flex  items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] from-10% via-[#151515] via-10%  to-[rgba(21, 21, 21, 0)]   ">
                <div className=" text-white space-y-10 ml-6 lg:ml-20 ">
                  <h2 className="text-2xl lg:text-5xl font-bold">
                    If you want to <br />{' '}
                    <span className="text-[#38E991]">make your</span> brain
                    <br /> Smarter
                  </h2>
                  <Button className="rounded-full" >
                    Find Tutor
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="carousel-item relative w-full style lg:h-[550px] mt-8">
              <Image src={img1} height={500} alt='banner' className="w-full rounded-xl overflow-hidden" />
              <div className="absolute rounded-xl flex  items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] from-10% via-[#151515] via-10%  to-[rgba(21, 21, 21, 0)]   ">
                <div className=" text-white space-y-10 ml-6 lg:ml-20 ">
                  <h2 className="text-2xl lg:text-5xl font-bold">
                    Searching for Tutor ?<br /> Find the{' '}
                    <span className="text-[#38E991]">best Tutor</span> <br />{' '}
                    And make your result good<br /> in your exam
                  </h2>
                  <Button className="rounded-full" >
                    Find Tutor
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        {/* <div className="carousel w-full h-[600px]  object-fill mt-7">
      </div> */}
      </div>
    </div>
  );
};

export default Banner;