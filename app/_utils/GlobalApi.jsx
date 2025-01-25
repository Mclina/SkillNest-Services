const { default: axios } = require("axios");


const API_KEY=process.env.NEXT_PUBLIC_STRAPI_API_KEY;

const axiosClient=axios.create({
    baseURL:'http://localhost:1337/api',
    headers:{
        'Authorization':`Bearer ${API_KEY}`
    }
})

const getCategory=()=>axiosClient.get('/categories?populate=*');

 const getBusinessList=()=>axiosClient.get('/business?populate=*')
 
 const getBusinessByCategory=(category)=>axiosClient.get('/business?filters[categories][Name][$in]='+category+"&populate=*")
 
 const getBusinessById=(id)=>axiosClient.get('/business/'+id+"?populate=*")

 const bookingSection=(data)=>axiosClient.post('/bookings',data);
 
 const getUserBookingList=(userEmail)=>axiosClient.get("/bookings?[filters][Email][$eq]="+userEmail+"&populate[business][populate][image][populate][0]=url&populate=*")

 const deleteBooking=(id)=>axiosClient.delete('/bookings/'+id)

 const sendEmail=(data)=>axios.post('/api/sendEmail',data);
 export default{
 getCategory,
 getBusinessList,
 getBusinessByCategory,
 getBusinessById,
 bookingSection,
 getUserBookingList,
 deleteBooking,
 sendEmail
}