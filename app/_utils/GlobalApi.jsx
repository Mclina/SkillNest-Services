const { default: axios } = require("axios");


const API_KEY=process.env.NEXT_PUBLIC_STRAPI_API_KEY;

const axiosClient=axios.create({
    baseURL:'https://localhost:1337/api',
    headers:{
        'Authorization':`Bearer ${API_KEY}`
    }
})

const getCategory=()=>axiosClient.get('/categories?populate=*');

 const getBusinessList=()=>axiosClient.get('/business?populate=*')
 
 const getBusinessByCategory=(category)=>axiosClient.get('/business?filters[categories][Name][$in]='+category+"&populate=*")
 
 const getBusinessById=(id)=>axiosClient.get('/business/'+id+"?populate=*")

 export default{
   getCategory,
   getBusinessList,
   getBusinessByCategory,
    
}