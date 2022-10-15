import axios from "axios";

export const ENDPOINTS = {
  search: '/searchFlightEverywhereDetails'
}

const { NEXT_APP_RAPID_API_KEY, NEXT_APP_RAPID_HOST } = process.env;

export const api = axios.create({
  timeout: 1000,
  baseURL: "https://skyscanner50.p.rapidapi.com/api/v1",
  headers: {
    'X-RapidAPI-Key': NEXT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': NEXT_APP_RAPID_HOST
  }

})

