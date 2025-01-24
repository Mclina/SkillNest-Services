"use client"
import GlobalApi from '@/app/_utils/GlobalApi';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

function BusinessSuggestionList() {
    const [businessList,setBusinessList]=useState([]);
    useEffect(()=>{
      getBusinessList();
    },[])
    const getBusinessList=()=>{
      GlobalApi.getBusinessList().then(resp=>{
        console.log(resp.data.data);
        setBusinessList(resp.data.data);
      })
    }
  return (
    <div className=' p-4 border-[1px] mt-5 md:ml-5 rounded-lg '>
        <h2 className='mb-3 font-bold'>Suggestions</h2>

        {businessList.map((business,index)=>(
            <Link href={'/details/'+business.id} className=' mb-4 p-3 shadow-sm w-full
            cursor-pointer hover:bg-slate-100
            rounded-lg flex items-center gap-3'>
                <Image src={business.attributes?.image?.data?.attributes?.url}
                width={70}
                height={70}
                className='w-[70px] h-[70px] rounded-full object-cover'
                />
                <div className='mt-3 flex-col flex gap-1 items-baseline'>
                    <h2 className='text-[10px] bg-orange-100 p-1 rounded-full px-2
                     text-primary'>{business.attributes.categories?.data[0]?.attributes?.Name}</h2>
                <h2 className='font-medium text-sm'>{business.attributes.Name}</h2>
                <h2 className='text-primary text-xs flex gap-2'>
                    {/* <GraduationCap/> */}
                    {business .attributes.Year_of_Experience}</h2>
                    </div>
            </Link>
        ))}
    </div>
  )
}

export default BusinessSuggestionList
