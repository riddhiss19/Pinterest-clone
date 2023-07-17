import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID -Q8inGBtbSHhZkhpPUpCpGiT45nSxx-YcjY_OIRdctQ" ,
    }, 
});
