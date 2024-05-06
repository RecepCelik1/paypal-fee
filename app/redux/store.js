import { configureStore } from '@reduxjs/toolkit'
import dropdownSlice from './dropdownCountry'
import rates from './rates'

export const store = configureStore({
  reducer: {
    dropdownCountry : dropdownSlice,
    feeRates : rates,
  },
})