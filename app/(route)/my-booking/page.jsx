"use client"
import React, { useEffect, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BookingList from './_components/BookingList';
import GlobalApi from '@/app/_utils/GlobalApi';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';

function MyBooking() {
	const { user } = useKindeBrowserClient();
	const [bookingList, setBookingList] = useState([]);

	// Fetch user booking list when the user is available
	useEffect(() => {
		if (user) {
			getUserBookingList();
		}
	}, [user]);

	// Fetch booking list from the API
	const getUserBookingList = () => {
		GlobalApi.getUserBookingList(user?.email).then(resp => {
			console.log(resp.data.data);
			setBookingList(resp.data.data);
		}).catch(error => {
			console.error("Error fetching booking list:", error);
		});
	};

	/**
	 * Filter user bookings based on type (upcoming or expired)
	 * @param {string} type - 'upcoming' or 'expired'
	 * @returns {Array} - Filtered booking list
	 */
	const filterUserBooking = (type) => {
		const currentDate = new Date();
		return bookingList.filter(item => {
			const bookingDate = new Date(item.documentId.Date);
			return type === 'upcoming' ? bookingDate >= currentDate : bookingDate < currentDate;
		});
	};

	return (
		<div className='px-4 sm:px-10 mt-10'>
			<h2 className='font-bold text-2xl'>My Booking</h2>
			<Tabs defaultValue="upcoming" className="w-full mt-5">
				<TabsList className="w-full justify-start">
					<TabsTrigger value="upcoming">Upcoming</TabsTrigger>
					<TabsTrigger value="expired">Expired</TabsTrigger>
				</TabsList>
				<TabsContent value="upcoming">
					<BookingList
						bookingList={filterUserBooking('upcoming')}
						updateRecord={getUserBookingList}
						expired={false}
					/>
				</TabsContent>
				<TabsContent value="expired">
					<BookingList
						bookingList={filterUserBooking('expired')}
						updateRecord={getUserBookingList}
						expired={true}
					/>
				</TabsContent>
			</Tabs>
		</div>
	);
}

export default MyBooking;
