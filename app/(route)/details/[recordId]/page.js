"use client"
import GlobalApi from '@/app/_utils/GlobalApi'
import React, { useEffect, useState } from 'react'
import BusinessDetail from '../_components/DoctorDetail';
import BusinessSuggestionList from '../_components/DoctorSuggestionList';

function Details({params}) {

  const [business,setBusiness]=useState();
  useEffect(()=>{
    getBusinessById();
  },[])
  const getBusinessById=()=>{
    GlobalApi.getBusinessById(params.recordId).then(resp=>{
      setBusiness(resp.data.data);
    })
  }
  return (
    <div className='p-5 md:px-10'>
      <h2 className='font-bold text-[22px]'>Details</h2>

      <div className='grid grid-cols-1 lg:grid-cols-4 '>
        {/* Business Detail  */}
        <div className=' col-span-3'>
        {business&& <BusinessDetail business={business} />}
         
        </div>
        {/* Business Suggestion  */}
        <div>
          <BusinessSuggestionList/>
        </div>
      </div>
    </div>
  )
}

export default Details