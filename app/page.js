"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "./_components/Hero";
import CategorySearch from "./_components/CategorySearch";
import BusinessList from "./_components/BusinessList";
import { useEffect, useState } from "react";
import GlobalApi from "./_utils/GlobalApi";
import axios from 'axios';

export default function Home() {

  const [businessList,setBusinessList]=useState([]);
  useEffect(()=>{
    getBusinessList();
  },[])
  const getBusinessList=()=>{
    GlobalApi.getBusinessList().then(resp=>{
      console.log(resolve.data.data);
      setBusinessList(resp.data.data);
    })
  }
  return (
    <div>
      {/* Hero Section */}
      <Hero/>

      {/* Search bar + Categories */}
      <CategorySearch/>

      {/* Popular Business */}
      <BusinessList businessList={businessList}/>
    </div>
  );
}