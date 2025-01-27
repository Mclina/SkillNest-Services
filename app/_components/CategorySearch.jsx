"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import GlobalApi from "../_utils/GlobalApi";
import { useEffect, useState } from "react";

function CategorySearch() {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = () => {
    GlobalApi.getCategory().then((resp) => {
      console.log(resp.data.data);
      setCategoryList(resp.data.data);
    });
  };

  return (
    <div className="mb-10 items-center px-5 flex flex-col gap-2">
      <h2 className="font-bold text-4xl tracking-wide">
        Search <span className="text-primary">Business</span>
      </h2>
      <h2 className="text-gray-500 text-xl">
        Search and Book Appointment in one click
      </h2>

      <div className="flex w-full mt-3 max-w-sm items-center space-x-2">
        <Input type="text" placeholder="Search..." />
        <Button type="submit">
          <Search className="h-4 w-4 mr-2" />
          Search
        </Button>
      </div>

      {/* Display List of Category */}
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {categoryList.length > 0
          ? categoryList.slice(0, 6).map((item, index) => (
              <Link
                href={"/search/" + item.Name}
                key={item.id} // Use item.id as the key for better uniqueness
                className="flex flex-col text-center items-center p-5 bg-orange-50 m-2 rounded-lg cursor-pointer gap-2 hover:scale-110 transition-all ease-in-out"
              >
                {item.Icon && item.Icon.length > 0 && (
                  <Image
                  src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${item.Icon[0].url}`}
                    alt={item.Icon[0].alternativeText || "icon"}
                    width={40}
                    height={40}
                  />
                )}
                <label className="text-orange-600 text-sm">{item.Name}</label>
              </Link>
            ))
          : [1, 2, 3, 4, 5, 6].map((item, index) => (
              <div
                key={index}
                className="bg-slate-200 m-2 w-[100px] h-[80px] rounded-lg animate-pulse"
              ></div>
            ))}
      </div>
    </div>
  );
}

export default CategorySearch;