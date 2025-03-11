"use client";
import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const categories = [
  {
    _id: "available",
    name: "Available"
  },
  {
    _id: "unavailable",
    name: "Unavailable"
  },
]
// const sortings = [
//   {
//     _id: "available",
//     name: "Assending"
//   },
//   {
//     _id: "unavailable",
//     name: "Deccendind"
//   },
// ]

export default function FilterSidebar() {
  const [price, setPrice] = useState([0]);
  const [isLoading, setIsLoading] = useState(false);
  // const [categories, setCategories] = useState([]);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleSearchQuery = (query: string, value: string | number) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set(query, value.toString());

    router.push(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
    setIsLoading(false);
  };

  return (
    <div className="p-6  bg-white rounded-lg border-[1px] border-[#abe4cc] px-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Filter</h2>
        {searchParams.toString().length > 0 && (
          <Button
            onClick={() => {
              router.push(`${pathname}`, {
                scroll: false,
              });
            }}
            size="sm"
            className="bg-black hover:bg-gray-700 ml-5"
          >
            Clear Filters
          </Button>
        )}
      </div>
      {/* Product Types */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-4">Availability</h2>
        {!isLoading && (
          <RadioGroup className="space-y-2">
            {categories?.map((category: { _id: string; name: string }) => (
              <div key={category._id} className="flex items-center space-x-2">
                <RadioGroupItem
                  onClick={() => handleSearchQuery("availability", category._id)}
                  value={category._id}
                  id={category._id}
                />
                <Label
                  htmlFor={category._id}
                  className="text-gray-500 font-light"
                >
                  {category.name}
                </Label>
              </div>
            ))}
          </RadioGroup>
        )}
      </div>
      {/* Filter by Price */}

      {/* Brands */}

      {/* Rating */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-4">Rating</h2>
        <RadioGroup className="space-y-3">
          {[5, 4, 3, 2, 1].map((review) => (
            <div key={review} className="flex items-center space-x-2">
              <RadioGroupItem
                onClick={() => handleSearchQuery("review", review)}
                value={`${review}`}
                id={`review-${review}`}
              />
              <Label htmlFor={`review-${review}`} className="flex items-center">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    size={18}
                    key={i}
                    fill={i < review ? "orange" : "lightgray"}
                    stroke={i < review ? "orange" : "lightgray"}
                  />
                ))}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-4">Hourly rate</h2>
        <div className="flex items-center justify-between text-sm mb-2">
          <span>0</span>
          <span>5000</span>
        </div>
        <Slider
          max={5000}
          step={1}
          onValueChange={(value) => {
            setPrice(value);
            handleSearchQuery("price", value[0]);
          }}
          className="w-full"
        />
        <p className="text-sm mt-2">Selected Price: {price[0]}</p>
      </div>
    </div>
  );
}