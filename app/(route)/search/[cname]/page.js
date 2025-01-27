"use client";
import BusinessList from '@/app/_components/BusinessList';
import GlobalApi from '@/app/_utils/GlobalApi';
import React, { useEffect, useState } from 'react';

function Search({ params }) {
  const [businessList, setBusinessList] = useState([]);
  const [loading, setLoading] = useState(true);

  // Unwrap the params object using React.use()
  const unwrappedParams = React.use(params);
  const cname = unwrappedParams.cname;

  useEffect(() => {
    console.log(cname);
    getBusiness();
  }, [cname]); // Use the unwrapped cname as a dependency

  const getBusiness = () => {
    setLoading(true);
    GlobalApi.getBusinessByCategory(cname) // Use the unwrapped cname
      .then((resp) => {
        setBusinessList(resp.data.data);
      })
      .catch((error) => {
        console.error("Error fetching business data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className='mt-5'>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <BusinessList
          heading={cname} // Use the unwrapped cname
          businessList={businessList}
        />
      )}
    </div>
  );
}

export default Search;