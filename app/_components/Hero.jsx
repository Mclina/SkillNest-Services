import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'

function Hero() {
  return (
    <div className='flex items-center flex-col justify-center pt-14 pb-7'>
        <h2 className='font-bold text-[46px] text-center'>
            Find & Book Appointment With
            <span className='text-orange-800'> A Service/Repair</span> 
            <br></br>Provider Near You</h2>
        <h2 className='text-xl text-slate-600'>Explore Best Services & Repair Near You</h2>
        <div className='mt-4 '>
            <Input placeholder='Search'
            className="rounded-full md:w-[350px]" />
            <Button>
                <Search/>
            </Button>
        </div>
    </div>
  )
}

export default Hero
