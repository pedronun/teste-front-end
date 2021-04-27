import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://econverse.digital/teste-front-end/junior/ninja-som/lista-produtos/products.json'
})