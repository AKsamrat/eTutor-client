"use client";
import { EffectFade, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import img1 from '../../../../app/assets/tution1.jpg';
import img2 from '../../../../app/assets/tutor2.jpg';
import Image from 'next/image';

import TutorCard from '../../dashBoardComponent/tutor/Tutorcard';
import { useEffect, useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { useSearchParams } from 'next/navigation';

const Banner = () => {
  const [search, setSearch] = useState('');
  const [searchText, setSearchText] = useState('');
  const [getDatas, setGetDatas] = useState<any>([]);

  // const [isLoading, setIsLoading] = useState(false);
  // const [categories, setCategories] = useState([]);

  // const router = useRouter();
  // const pathname = usePathname();
  // const searchParams = useSearchParams();
  // console.log(pathname)

  // const handleSearchQuery = (query: string, value: string | number) => {
  //   const params = new URLSearchParams(searchParams.toString());

  //   params.set(query, value.toString());

  //   router.push(`${pathname}?${params.toString()}`, {
  //     scroll: false,
  //   });
  //   setIsLoading(false);
  // };
  useEffect(() => {
    const fetchData = async (page, limit, params) => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/tutors?page=${page}&limit=${limit}&${params}`,
        {
          next: {
            tags: ["TUTORS"],
          },
        }
      );
      const data = await res.json();
      console.log({ data })
      setGetDatas(data.data);
    };
    const page = 0;
    const limit = 0;
    const params = `searchTerm=${searchText} `;
    fetchData(page, limit, params);

  }, [searchText]);

  console.log(search)
  const handleSearch = e => {
    e.preventDefault();
    // handleSearchQuery("searchTerm", searchText)
    setSearch(searchText);
    console.log(searchText)
    // e.target.reset();
    // mutateAsync(search);
  };
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
            <div className="carousel-item relative w-full style lg:h-[530px] mt-8">
              <Image src={img2} height={500} alt='banner' className="w-full rounded-xl overflow-hidden h-[530px]" />
              <div className="absolute rounded-xl flex  items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] from-10% via-[#151515] via-10%  to-[rgba(21, 21, 21, 0)]   ">
                <div className=" text-white space-y-10 ml-6 lg:ml-20 ">
                  <h2 className="text-2xl lg:text-5xl font-bold">
                    If you want to <br />{' '}
                    <span className="text-[#38E991]">make your</span> brain
                    <br /> Smarter
                  </h2>
                  {/* <Button className="rounded-full" >
                    Find Tutor
                  </Button> */}
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
                  {/* <Button className="rounded-full" >
                    Find Tutor
                  </Button> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        {/* <div className="carousel w-full h-[600px]  object-fill mt-7">
      </div> */}
      </div>
      <form onSubmit={handleSearch}>
        <div className=" p-1 overflow-hidden  z-10    focus-within:border-blue-400 absolute -translate-y-44 left-72 hidden md:flex">
          <input
            className="px-2 w-72 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent border-[#11A171] rounded-l-lg border-2"
            type="text"
            onChange={e => setSearchText(e.target.value)}
            value={searchText}
            name="search"
            placeholder="Enter subject"
            aria-label="Enter subject"
          />

          <button
            type="submit"
            className="px-1 md:px-6 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-[#11A171] rounded-r-lg  hover:bg-gray-600 focus:bg-[#11A171] focus:outline-none"
          >
            Search
          </button>
          {/* {search && (
            <Button
              onClick={() => {
                setSearch(' ')

              }}
              size="sm"
              className="bg-[#11A171] hover:bg-gray-700 ml-5"
            >
              Clear
            </Button>
          )} */}
        </div>
      </form>
      <div className={` ${searchText ? 'flex' : 'hidden'}`}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 py-9">
          {getDatas?.result?.map(tutor => (
            <TutorCard key={tutor._id} tutor={tutor}></TutorCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;