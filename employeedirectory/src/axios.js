import axios from "axios"


export default {
    employeeApi: function(){
    return axios.get("https://randomuser.me/api/?results=200&nat=us")
}
}