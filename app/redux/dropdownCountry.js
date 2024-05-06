import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    customStyles: { //=> for dropdown menu customize
        option: (provided, state) => ({
          ...provided, 
          color: state.isSelected ? 'white' : 'black',
          background: state.isSelected ? '#0285c7' : state.isFocused ? '#38bdf8' : 'white',
          fontSize : '12px',
        }),
        control: (provided) => ({
          ...provided,
          width: '100%',
          minHeight: "44px",
          height : '44px',
          borderRadius: '100px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize : "16px",
          maxHeight: '12px',
          fontFamily : "gabarito",
          paddingLeft : "4px"
        }),
        menu: (provided, state) => ({
            ...provided,
            borderRadius: '10px',
            overflowY: 'auto',
            
          }),
          indicatorSeparator: () => ({
            display: 'none',
          }),
          menuList: (provided, state) => ({
            ...provided,
            padding: 0,
            fontSize: '14px', 
            backgroundColor: state.isFocused ? '#e6f7ff' : 'white', // 
            borderRadius: '8px',
            fontFamily : "gabarito"
        }),
          dropdownIndicator: (provided, state) => ({
            display : "flex",
            alignItems: 'items-center',
            justifyContent: 'center',
            marginRight : "10px",
          }),
      },
      countries : [
        {value : "usDomestic", label : "United States - Domestic (USD)", currency : "$"},
        {value : "usInt", label : "United States - International (USD)", currency : "$"},
        {value : "caDomestic", label : "Canada - Domestic (CAD)", currency : "$"},
        {value : "caFromUs", label : "Canada - From U.S. (CAD)", currency : "$"},
        {value : "caFromOutside", label : "Canada - From Outside Canada or U.S. (CAD)", currency : "$"},
        {value : "caAmeriacanExpress", label : "Canada - American Express (CAD)", currency : "$"},
        {value : "inLocal", label : "India - Local (INR)", currency : "₹"},
        {value : "inInt", label : "India - International (INR)", currency : "₹"},
        {value : "uk", label : "United Kingdom (GBP)", currency : "£"},
      ],

      selectedCountry : {value : "usDomestic", label : "United States - Domestic (USD)", currency : "$"},

}

export const dropdownSlice = createSlice({
  name: 'dropdown',
  initialState,
  reducers: {
    setSelectedCountry: (state, action) => {
      state.selectedCountry = action.payload
    },
  },
})

export const { setSelectedCountry } = dropdownSlice.actions

export default dropdownSlice.reducer