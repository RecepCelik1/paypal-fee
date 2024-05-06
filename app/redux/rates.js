import { createSlice } from '@reduxjs/toolkit'

const initialState = {

    usDomestic : [
        {value : 0, rate : 3.49, fixed : 0.49, label : "3.49%+ $0.49 (Invoicing, PayPal Checkout, Venmo)"},
        {value : 1, rate : 2.99, fixed : 0.49, label : "2.99% $0.49 (Credit and Debit Cards)"},
        {value : 2, rate : 2.89, fixed : 0.49, label : "2.89% $0.49 (Goods and Services, Donations)"},
        {value : 3, rate : 1.99, fixed : 0.49, label : "1.99% $0.49 (Charity)"},
        {value : 4, rate : 4.99, fixed : 0.09, label : "4.99% $0.09 (Micropayment)"},
        {value : 5, rate : 3.5, fixed : 0, label : "3.5% (PayPal Guest Checkout - American Express Payments)"},
        {value : 6, rate : 1.9, fixed : 0.1, label : "1.9%+ $0.1 (QR code - $10.01 and above)"},
        {value : 7, rate : 2.4, fixed : 0.05, label : "2.4% $0.05 (QR code - $10 and below)"},
    ],
    usInt : [
        {value : 0, rate : 4.99, fixed : 0.49, label : "4.99%+ $0.49 (Invoicing, PayPal Checkout, Venmo)"},   
        {value : 1, rate : 4.49, fixed : 0.49, label : "4.49%+ $0.49 (Credit and Debit Cards)"},   
        {value : 2, rate : 4.39, fixed : 0.49, label : "4.39%+ $0.49 (Goods and Services, Donations)"},   
        {value : 3, rate : 3.49, fixed : 0.49, label : "3.49%+ $0.49 (Charity)"},   
        {value : 4, rate : 6.49, fixed : 0.09, label : "6.49%+ $0.09 (Micropayment)"},   
    ],
    caDomestic : [
        {value : 0, rate : 2.9, fixed : 0.3, label : "2.9% + $0.3"},   
        {value : 1, rate : 1.6, fixed : 0.3, label : "1.6% + $0.3 (Charitable Organizations)"},   
        {value : 2, rate : 2.9, fixed : 0.3, label : "2.9% + $0.3 (PayPal Payments Pro)"},   
        {value : 3, rate : 3.1, fixed : 0.3, label : "3.1%+ $0.3 (Virtual Terminal)"},   
        {value : 4, rate : 5, fixed : 0.05, label : "5%+ $0.05 (Micropayment)"},   
    ],
    caFromUs : [
        {value : 0, rate : 3.7, fixed : 0.3, label : "3.7% + $0.3"},
        {value : 1, rate : 1.6, fixed : 0.3, label : "1.6% + $0.3 (Charitable Organizations)"},
        {value : 2, rate : 3.7, fixed : 0.3, label : "3.7% + $0.3 (PayPal Payments Pro)"},
        {value : 3, rate : 3.9, fixed : 0.3, label : "3.9%+ $0.3 (Virtual Terminal)"},
        {value : 4, rate : 5, fixed : 0.05, label : "5%+ $0.05 (Micropayment)"},
    ],
    caFromOutside : [
        {value : 0, rate : 3.9, fixed : 0.3, label : "3.7% + $0.3"},
        {value : 1, rate : 2.6, fixed : 0.3, label : "1.6% + $0.3 (Charitable Organizations)"},
        {value : 2, rate : 3.9, fixed : 0.3, label : "3.7% + $0.3 (PayPal Payments Pro)"},
        {value : 3, rate : 4.1, fixed : 0.3, label : "3.9%+ $0.3 (Virtual Terminal)"},
        {value : 4, rate : 6, fixed : 0.05, label : "5%+ $0.05 (Micropayment)"},
    ],
    caAmeriacanExpress : [
        {value : 0, rate : 3.5, fixed : 0, label : "3.5%"},
    ],
    inLocal : [
        {value : 0, rate : 2.5, fixed : 3, label : "2.5% + ₹3"},
    ],
    inInt : [
        {value : 0, rate : 4.4, fixed : 3, label : "4.4%+ 3 (Up to $3000 monthly sales)"},  
        {value : 1, rate : 3.9, fixed : 3, label : "3.9% + ₹3 ($3000+ to $10,000 monthly sales)"},  
        {value : 2, rate : 3.7, fixed : 3, label : "3.7% + ₹3 ($10,000+ to $100,000 monthly sales)"},  
        {value : 3, rate : 3.4, fixed : 3, label : "3.4%+ ₹3 ($100,000+ monthly sales)"},  
    ],
    uk : [
        {value : 0, rate : 2.9, fixed : 0.3, label : "2.9% + £0.3 (Domestic)"},   
        {value : 1, rate : 3.4, fixed : 0.3, label : "3.4% £0.3 (From Europe I, Northern Europe)"},   
        {value : 2, rate : 4.9, fixed : 0.3, label : "4.9% + £0.3 (From Canada, USA, Europe II, rest of the world)"},   
        {value : 3, rate : 1.4, fixed : 0.2, label : "1.4% + £0.2 (Charity)"},   
        {value : 4, rate : 5, fixed : 0.05, label : "5% £0.05 (Micropayment)"},   
    ],
    
    selectedRate : {value : 0, rate : 3.49, fixed : 0.49, label : "3.49%+ $0.49 (Invoicing, PayPal Checkout, Venmo)"},

}

export const rates = createSlice({
  name: 'rates',
  initialState,
  reducers: {
    setSelectedRate: (state, action) => {
        state.selectedRate = action.payload;
    },
  },
})

export const { setSelectedRate } = rates.actions

export default rates.reducer