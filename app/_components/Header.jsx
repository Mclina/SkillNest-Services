"use client";
import { Button } from '@/components/ui/button';
import { LoginLink, LogoutLink, useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

function Header() {
  const Menu = [
    {
      id: 1,
      name: 'Home',
      path: '/'
    },
    {
      id: 2,
      name: 'Services',
      path: '/services'
    },
    {
      id: 3,
      name: 'About Us',
      path: '/about'
    },
  ];

  const { user } = useKindeBrowserClient();

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div className='flex items-center justify-between p-4 shadow-sm'>
      <div className='flex items-center gap-10'>
        <Image src='/logo.svg' alt='logo'
          width={50} height={50} // Fixed dimensions
        />
        <ul className='md:flex gap-4 hidden'>
          {Menu.map((item) => (
            <Link href={item.path} key={item.id}> {/* Add key prop here */}
              <li className='hover:text-orange-900 cursor-pointer hover:scale-110 transition-all ease-in-out'>
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>

      {user ? (
        <Popover>
          <PopoverTrigger>
            {user?.picture ? (
              <Image src={user?.picture} alt='profile-image'
                width={40} height={40} // Fixed dimensions
                className='rounded-full'
              />
            ) : (
              <Image src='/logo.svg' alt='logo'
                width={40} height={40} // Fixed dimensions
                className='rounded-full'
              />
            )}
          </PopoverTrigger>
          <PopoverContent className="w-44">
            <ul className='flex flex-col gap-2'>
              <Link href={'/my-booking'} className='cursor-pointer hover:bg-slate-100 p-2 rounded-md'>
                My Booking
              </Link>
              <li className='cursor-pointer hover:bg-slate-100 p-2 rounded-md'>
                <LogoutLink>Logout</LogoutLink>
              </li>
            </ul>
          </PopoverContent>
        </Popover>
      ) : (
        <LoginLink>
          <Button>Get Started</Button>
        </LoginLink>
      )}
    </div>
  );
}

export default Header