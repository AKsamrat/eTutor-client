"use client"
import { Button } from '@/components/ui/button';
import Image from 'next/image';


const Blog = () => {
  return (
    <section className="px-4 py-24 mx-auto max-w-7xl">
      <h2 className="pb-8 mb-12 text-2xl font-extrabold leading-tight text-gray-900 border-b border-gray-200 md:text-4xl text-center">All Blogs</h2>
      <div className="mx-auto flex justify-center items-center ">

        <div className="max-w-md  flex-grow my-6">
          <input
            type="text"
            placeholder="Place your question"
            className="w-full max-w-6xl border border-gray-300 rounded-full py-2 px-5"
          />
        </div>
        <Button className="rounded-full">Search</Button>
      </div>
      <div className="w-full xl:w-4/6">
        <div className="flex flex-col space-y-16">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <Image src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="object-cover w-full h-40 col-span-1 bg-center" alt="eTutor" loading="lazy" width={550} height={450} />
            <div className="col-span-1 md:col-span-3">
              <p className="mb-2 -mt-1 text-sm font-normal text-gray-500">April 16, 2020</p>
              <h2 className="mb-2 text-xl font-extrabold leading-snug text-gray-800">
                <a href="#" className="text-gray-900 hover:text-purple-700">Process Documents Using Artificial Intelligence For RPA Bots</a>
              </h2>
              <p className="mb-3 text-sm font-normal text-gray-500">
                Earlier RPA bots used to have some limitations like it would take structured data for processing from excel, database, on these data. But with advancements in technology like OCR (Optical
                Character Recognition) and Machine Learning, RPA bots are capable of extracting these data …
              </p>
              <a href="#" className="btn btn-light btn-sm text-[#13925E]">Read More</a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <Image width={550} height={450} src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D" className="object-cover w-full h-40 col-span-1 bg-center" alt="eTutor" loading="lazy" />
            <div className="col-span-1 md:col-span-3">
              <p className="mb-2 -mt-1 text-sm font-normal text-gray-500">April 16, 2020</p>
              <h2 className="mb-2 text-xl font-extrabold leading-snug text-gray-800">
                <a href="#" className="text-gray-900 hover:text-purple-700">Implement Dark Mode in Your Android App</a>
              </h2>
              <p className="mb-3 text-sm font-normal text-gray-500">
                Are you curious to implement the Dark Mode in Android Application? Heres the perfect guideline to attain the Dark Mode in Android Application. Dont waste your time; just implement and
                enjoy Dark Mode.
              </p>
              <a href="#" className="btn btn-light btn-sm text-[#13925E]">Read More</a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <Image width={550} height={450} src="https://images.unsplash.com/photo-1496065187959-7f07b8353c55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D" className="object-cover w-full h-40 col-span-1 bg-center" alt="eTutor" loading="lazy" />
            <div className="col-span-1 md:col-span-3">
              <p className="mb-2 -mt-1 text-sm font-normal text-gray-500">April 16, 2020</p>
              <h2 className="mb-2 text-xl font-extrabold leading-snug text-gray-800">
                <a href="#" className="text-gray-900 hover:text-purple-700">Why is Mental Health one of the Important Issues to Address?</a>
              </h2>
              <p className="mb-3 text-sm font-normal text-gray-500">
                Mental health was one of the under spoken topics before this lockdown. After sitting at home for about six months I realized that this is one of the important issues to address not only in
                the work sector but also in daily living.
              </p>
              <a href="#" className="btn btn-light btn-sm text-[#13925E]">Read More</a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <Image width={550} height={450} src="https://images.unsplash.com/photo-1568952433726-3896e3881c65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D" className="object-cover w-full h-40 col-span-1 bg-center" alt="eTutor" loading="lazy" />
            <div className="col-span-1 md:col-span-3">
              <p className="mb-2 -mt-1 text-sm font-normal text-gray-500">April 16, 2020</p>
              <h2 className="mb-2 text-xl font-extrabold leading-snug text-gray-800">
                <a href="#" className="text-gray-900 hover:text-purple-700">Pattern Matching In Elixir</a>
              </h2>
              <p className="mb-3 text-sm font-normal text-gray-500">
                Pattern matching is a great way to write idiomatic functional code. Its a powerful tenant of functional programming that makes it a joy to write conditional statements. If you don’t want
                your code to be peppered with deeply nested statements or multiple variations of similar business logic, use pattern matching!
              </p>
              <a href="#" className="btn btn-light btn-sm text-[#13925E]">Read More</a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <Image width={550} height={450} src="https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D" className="object-cover w-full h-40 col-span-1 bg-center" alt="eTutor" loading="lazy" />
            <div className="col-span-1 md:col-span-3">
              <p className="mb-2 -mt-1 text-sm font-normal text-gray-500">April 16, 2020</p>
              <h2 className="mb-2 text-xl font-extrabold leading-snug text-gray-800">
                <a href="#" className="text-gray-900 hover:text-purple-700">3 things you should change during your focus group interview</a>
              </h2>
              <p className="mb-3 text-sm font-normal text-gray-500">We changed three things about our feedback sessions, and it changed everything about running customer feedback sessions.</p>
              <a href="#" className="btn btn-light btn-sm text-[#13925E]">Read More</a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <Image width={550} height={450} src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D" className="object-cover w-full h-40 col-span-1 bg-center" alt="eTutor" loading="lazy" />
            <div className="col-span-1 md:col-span-3">
              <p className="mb-2 -mt-1 text-sm font-normal text-gray-500">April 16, 2020</p>
              <h2 className="mb-2 text-xl font-extrabold leading-snug text-gray-800">
                <a href="#" className="text-gray-900 hover:text-purple-700">Using Webpack with React Typescript</a>
              </h2>
              <p className="mb-3 text-sm font-normal text-gray-500">
                Ever wondered if there is a way to just tie up all your code into one single module for easy usage. If so, in this article I will show you how to bundle all your code into a single
                javascript module that you can easily use in any other project.
              </p>
              <a href="#" className="btn btn-light btn-sm text-[#13925E]">Read More</a>
            </div>
          </div>
        </div>
        <div className="pt-10 mt-10 border-t border-gray-200">
          <Button className="w-full btn btn-light btn-lg md:w-auto">Load More</Button>
        </div>
      </div>
    </section>

  );
};

export default Blog;