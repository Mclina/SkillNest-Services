import { Button } from '@/components/ui/button';
import { GraduationCap, MapPin } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import BookingSection from './BookingSection';

function BusinessDetail({ business }) {
    const socialMediaList = [
        {
            id: 1,
            icon: '/whatsapp.png',
            url: business?.Whatsapp || ''
        },
        {
            id: 2,
            icon: '/instagram.png',
            url: business?.Instagram || ''
        },
        {
            id: 3,
            icon: '/twitter.png',
            url: business?.Twitter || ''
        },
        {
            id: 4,
            icon: '/facebook.png',
            url: business?.Facebook || ''
        }
    ];

    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-3 border-[1px] p-5 mt-5 rounded-lg'>
                {/* Business Image */}
                <div>
                    {business.Image && business.Image.length > 0 && (
                        <Image
                            src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${business.Image[0].url}`} // Use environment variable for base URL
                            width={800}
                            height={800}
                            alt='business-image'
                            className='rounded-lg w-full h-[280px] object-cover'
                        />
                    )}
                </div>

                {/* Business Info */}
                <div className='col-span-2 mt-5 flex md:px-10 flex-col gap-3 items-baseline'>
                    <h2 className='font-bold text-2xl'>{business.Name}</h2>
                    <h2 className='flex gap-2 text-gray-500 text-md'>
                        <GraduationCap />
                        <span>{business.Year_of_Experience} years of Experience</span>
                    </h2>
                    <h2 className='text-md flex gap-2 text-gray-500'>
                        <MapPin />
                        <span>{business.Address}</span>
                    </h2>
                    {business.categories && business.categories.length > 0 && (
                        <h2 className='text-[10px] bg-orange-100 p-1 rounded-full px-2 text-primary'>
                            {business.categories[0].Name}
                        </h2>
                    )}

                    {/* Social Media Icons */}
                    <div className='flex gap-3'>
                        {socialMediaList.map((item) => (
                            <a href={item.url} key={item.id} target="_blank" rel="noopener noreferrer">
                                <Image
                                    src={item.icon}
                                    width={30}
                                    height={30}
                                    alt={`Social media icon ${item.id}`}
                                />
                            </a>
                        ))}
                    </div>

                    {/* Booking Section */}
                    <BookingSection business={business} />
                </div>
            </div>

            {/* About Business */}
            <div className='p-3 border-[1px] rounded-lg mt-5'>
                <h2 className='font-bold text-[20px]'>About Me</h2>
                <p className='text-gray-500 tracking-wide mt-2'>{business.About}</p>
            </div>
        </>
    );
}

export default BusinessDetail;
