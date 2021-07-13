import axios from "axios";

export default axios.create(
{
    baseURL:'https://api.unsplash.com',
    headers:{
        
            Authorization : 'Client-ID r0_DXCNmntknj2zkapRjrxci_fNTP40SEPO6ZxYCbrs'
        
    }


}


)