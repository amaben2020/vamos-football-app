import axios from "axios";

export const ENDPOINTS = {
  search: '/searchFlightEverywhereDetails'
}

const { NEXT_APP_RAPID_API_KEY, NEXT_APP_RAPID_HOST } = process?.env;

export const api = axios.create({
  // timeout: 1000,
  baseURL: "https://skyscanner50.p.rapidapi.com/api/v1",
  headers: {
    'X-RapidAPI-Key': "92edf024d9mshb47a37390764cd1p10a68djsna1e7fdce7ddd",
    'X-RapidAPI-Host': "skyscanner50.p.rapidapi.com"
  }
})

