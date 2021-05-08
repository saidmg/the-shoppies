/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const BASEURL = "https://www.omdbapi.com/?s=";
const APIKEY = "&apikey=100ee64f";
const TYPE = "&type=movie"


// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  searchByTitle: function (query) {
    return axios.get(BASEURL + query + TYPE + APIKEY);
  }
};
