import { api, ENDPOINTS } from "./base"

export const getFlight = async (origin = 'LOND', countryID = 'US', anytime = true, oneWay = false, currency = 'USD', countryCode = 'US', market = 'en-US') => {
  return await api.get(ENDPOINTS.search,
    {
      params: {
        origin: origin,
        CountryId: countryID,
        anytime: anytime,
        oneWay: oneWay,
        currency: currency,
        countryCode: countryCode,
        market: market
      }
    }
  )
}