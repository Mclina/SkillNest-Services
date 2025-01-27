"use client"
import GlobalApi from '@/app/_utils/GlobalApi';
import React, { useEffect, useState } from 'react';
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

function CategoryList() {
  const [categoryList, setCategoryList] = useState([]);
  const params = usePathname();
  const category = params.split('/')[2];

  useEffect(() => {
    getCategoryList();
  }, [])

  const getCategoryList = () => {
    GlobalApi.getCategory().then(resp => {
      console.log(resp.data.data);
      setCategoryList(resp.data.data);
    })
  }

  return (
    <div className='h-screen fixed mt-5 flex flex-col'>
      <Command>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList className="overflow-visible">
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            {categoryList && categoryList.map((item, index) => (
              <CommandItem key={index}>
                <Link
                  href={'/search/' + item?.Name} // Use the Name property for the URL
                  className={`p-2 flex gap-2 text-[14px] text-orange-600 items-center rounded-md cursor-pointer w-full ${
                    category === item.Name && 'bg-orange-100'
                  }`}
                >
                  {/* Display Icon */}
                  <Image
                   src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${item.Icon?.[0]?.url || "/default-icon.png"}`}
                    alt='icon'
                    width={40}
                    height={40}
                  />
                  {/* Display Name */}
                  <span>{item.Name}</span>
                </Link>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  )
}

export default CategoryList