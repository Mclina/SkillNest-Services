"use client"
import BusinessList from '@/app/_components/BusinessList';
import GlobalApi from '@/app/_utils/GlobalApi';
import React, { useEffect, useState } from 'react'

function Search({params}) {
    const [businessList,setBusinessList]=useState([]);
  useEffect(()=>{
    console.log(params.cname);
    getBusiness();
  },[])

  const getBusiness=()=>{
    GlobalApi.getBusinessByCategory(params.cname).then(resp=>{
      setBusinessList(resp.data.data);
    })
  }
  return (
    <div className='mt-5'>
        <BusinessList heading={params.cname}
        businedsList={businessList}
        />
    </div>
  )
}

export default Search
