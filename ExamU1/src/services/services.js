import axios from 'axios';

let API_URL = 'http://localhost:8080/api/vehiculos/page';



const get = async (number, size, sort) => {
    console.log("size"+size);
   const page = {
      number,
      size,
     sort
   };
   try {
      const response = await axios.post(API_URL,{ page });

      return response.data;
   } catch (error) {
      throw error;
   }
};
const save = async(modelo,marca,año,serie)=>{
   console.log(modelo);
   try {
      
   } catch (error) {
      throw error;

   }
}
export default {
   get
};