"use client"
import { useState, useEffect } from 'react';
import { Search, BookOpen, Award, Calendar } from 'lucide-react';
import TutorCard from '../../dashBoardComponent/tutor/Tutorcard';

export default function WaveHeroSection() {
  const [search, setSearch] = useState('');
  const [searchText, setSearchText] = useState('');
  const [getDatas, setGetDatas] = useState<any>([]);
  const [isVisible, setIsVisible] = useState(false);

  // Animation for the elements to fade in
  useEffect(() => {
    setIsVisible(true);
  }, []);

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
    <div className="relative bg-gradient-to-b from-[#b6f4c93b] to-[#aff2d3] overflow-hidden">
      <div className='max-w-[1200px] mx-auto'>
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white blur-3xl"></div>
          <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full bg-white blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className={`space-y-6 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800">
                Find Your Perfect <span className="text-[#FCB22B]">Tutor</span> Today
              </h1>
              <p className="text-lg md:text-xl text-gray-600">
                Connect with qualified tutors who can help you achieve your academic goals, no matter the subject or level.
              </p>

              {/* Search bar */}
              <form onSubmit={handleSearch}>
                <div className="mt-8 relative max-w-lg">
                  <input
                    type="text"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder="Enter your subject name"
                    className="w-full px-5 py-4 pr-16 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 text-gray-800"
                  />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-[#129262] text-white p-2 rounded-md hover:bg-blue-700 transition-colors">
                    <Search size={24} />
                  </button>
                </div>
              </form>

              {/* Statistics */}
              <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                <div className="bg-[#129262] bg-opacity-20 rounded-lg p-3 backdrop-blur-sm border-2 border-white">
                  <p className="text-2xl font-bold text-gray-800">1220+</p>
                  <p className="text-sm text-gray-600">Qualified Tutors</p>
                </div>
                <div className="bg-[#129262] bg-opacity-20 rounded-lg p-3 backdrop-blur-sm border-2 border-white">
                  <p className="text-2xl font-bold text-gray-800">30+</p>
                  <p className="text-sm text-gray-600">Subjects</p>
                </div>
                <div className="bg-[#129262] bg-opacity-20 rounded-lg p-3 backdrop-blur-sm border-2 border-white">
                  <p className="text-2xl font-bold text-gray-800">24/7</p>
                  <p className="text-sm text-gray-600">Support</p>
                </div>
              </div>
            </div>

            {/* Right content - Floating Cards */}
            <div className={`relative h-96 transition-all duration-1000 delay-300 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              {/* Tutor profiles as floating cards */}
              <div className="absolute top-0 right-0 bg-white rounded-lg shadow-xl p-4 w-64 animate-float">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-blue-200 flex items-center justify-center">
                    <BookOpen className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Math Tutoring</h3>
                    <p className="text-sm text-gray-600">Algebra, Calculus & more</p>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/3 left-12 bg-white rounded-lg shadow-xl p-4 w-64 animate-float-delayed">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
                    <Award className="text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Top Rated</h3>
                    <p className="text-sm text-gray-600">98% satisfaction rate</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 right-12 bg-white rounded-lg shadow-xl p-4 w-64 animate-float-slow">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <Calendar className="text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Flexible Schedule</h3>
                    <p className="text-sm text-gray-600">Book anytime, anywhere</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave shape at bottom */}
        <div className="absolute -bottom-1 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full">
            <path
              fill="#F3F4F6"
              fillOpacity="100"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"
            ></path>
          </svg>
        </div>

        {/* CSS for animations */}
        <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float 4.5s ease-in-out infinite;
          animation-delay: 1s;
        }
        
        .animate-float-slow {
          animation: float 5s ease-in-out infinite;
          animation-delay: 0.5s;
        }
      `}</style>
      </div>
      <div className={` ${searchText ? 'flex' : 'hidden'}`}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 py-9">
          {getDatas?.result?.map(tutor => (
            <TutorCard key={tutor._id} tutor={tutor}></TutorCard>
          ))}
        </div>
      </div>
    </div>
  );
}