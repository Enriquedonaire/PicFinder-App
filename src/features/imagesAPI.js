import axios from "axios";

import {API_KEY} from "../env";

export const fetchImg = async( img, page ) => {
    return await axios
        .get(`https://api.unsplash.com/search/photos?query=${img}&page=${page=4}&per_page=12&client_id=${API_KEY}`)
        .then((res) => res.data.results)
}
