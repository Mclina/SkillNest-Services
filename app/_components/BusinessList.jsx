import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function BusinessList({ businessList = [], heading = 'Popular Business' }) {
  return (
    <div className='mb-10 px-8'>
      <h2 className='font-bold text-xl'>{heading}</h2>

      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-4'>
        {businessList.length > 0 ? (
          businessList.map((business, index) => (
            <div
              className='border-[1px] rounded-lg p-3 cursor-pointer hover:border-primary hover:shadow-sm transition-all ease-in-out'
              key={business.id || index} // Use business.id if available, otherwise fallback to index
            >
              {/* Business Image */}
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${business.Image?.[0]?.url}`}
                alt={business.Name || 'Business Image'}
                width={200}
                height={200}
                className='h-[110px] w-auto object-cover rounded-lg'
              />

              {/* Business Details */}
              <div className='mt-3 items-baseline flex flex-col gap-1'>
                {/* Category (if available) */}
                {business.categories?.length > 0 && (
                  <h2 className='text-[10px] bg-orange-100 p-1 rounded-full px-2 text-primary'>
                    {business.categories[0].Name}
                  </h2>
                )}

                {/* Business Name */}
                <h2 className='font-bold'>{business.Name}</h2>

                {/* Years of Experience */}
                <h2 className='text-primary text-sm'>{business.Year_of_Experience}</h2>

                {/* Address */}
                <h2 className='text-gray-500 text-sm'>{business.Address}</h2>

                {/* Book Now Button */}
                <Link href={`/details/${business.id}`} className='w-full'>
                  <h2 className='p-2 px-3 border-[1px] border-primary text-primary rounded-full w-full text-center text-[11px] mt-2 cursor-pointer hover:bg-primary hover:text-white'>
                    Book Now
                  </h2>
                </Link>
              </div>
            </div>
          ))
        ) : (
          // Skeleton Effect (Loading State)
          [1, 2, 3, 4, 5, 6].map((item, index) => (
            <div
              key={index}
              className='h-[180px] bg-slate-200 w-full rounded-lg animate-pulse'
              aria-label='Loading...'
            ></div>
          ))
        )}
      </div>
    </div>
  );
}

export default BusinessList                                