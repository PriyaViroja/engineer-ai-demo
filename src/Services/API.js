import axios from "axios"

export const getBlogs = async (pageno) => {
    return axios.get("https://hn.algolia.com/api/v1/search_by_date?tags=story&page=" + pageno)

}