import axios from "axios";
export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID wYUR94NVVyzGdc1IAg_oD-TZePAhCJTcdHGidkCUUiI"
  }
});
