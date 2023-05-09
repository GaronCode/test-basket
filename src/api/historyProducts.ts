import axios from "axios";
export default class HistoryApi {
    link: string;
    constructor() {
        this.link = 'https://fakestoreapi.com/products/'
    }

    loadProducts(){
        return axios.get(this.link);
    }
}