"use client"
import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { LuDot } from "react-icons/lu";
import { setSelectedCountry } from "../redux/dropdownCountry";
import rates, { setSelectedRate } from "../redux/rates";

const App = () => {
    const dispatch = useDispatch()
    const customStyles = useSelector(state => state.dropdownCountry.customStyles);
    
    const [ showResults , setShowResults ] = useState(false);
    const [ price , setPrice ] = useState("")

    const countries = useSelector(state => state.dropdownCountry.countries);
    const selectedCountry = useSelector(state => state.dropdownCountry.selectedCountry);
    const currency = selectedCountry.currency;

    const feeRates = useSelector(state => state.feeRates);
    const selectedFeeRate = useSelector(state => state.feeRates.selectedRate)

    const handleInputChange = (event) => {
        setPrice(event)
    }

    let money = (price === "" || price === "-") ? 0 : parseFloat(price);
    let feeRate = selectedFeeRate.rate;
    let fixedFee = money === 0 ? 0 : selectedFeeRate.fixed;
    let PaypalFee = (money*feeRate)/100 + fixedFee;

    let breakEven = (money + fixedFee)*100 / (100 - feeRate);

    const formatNumberWithCommas = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      };

    return (
    <div className="w-full max-w-[400px] flex flex-col bg-white p-6 rounded-2xl">

        <div className="w-full flex flex-col">
            <div className="font-gabarito text-xl">Enter an invoice amount</div>
            <div className="w-full mt-4 relative">
                <input
                    type="number"
                    className="w-full h-11 p-5 text-lg font-gabarito border border-[#6e6e6d] rounded-full focus:outline-none"
                    placeholder={`${currency}0,000.00`}
                    style={{
                        WebkitAppearance: "none",
                        margin: 0,
                    }}
                    onChange={(e) => handleInputChange(e.target.value)}
                    />
                    <span className="absolute font-gabarito left-[10px] top-1/2 transform -translate-y-1/2 pb-[2px]">{price === "" ? "" : `${currency}`}</span>
                    {showResults === false ? (
                        <div className="rounded-full w-32 bg-sky-600 h-11 flex justify-center items-center text-white gabarito-semibold text-lg cursor-pointer absolute right-0 top-0 shadow-sky-600 hover:shadow-2xl"
                        onClick={(e) => setShowResults(true)}
                        >Calculate</div>
                    ) : (<div className="flex justify-center items-center text-[12px] bg-sky-200 text-sky-600 font-gabarito absolute right-4 top-1/2 transform -translate-y-1/2 pr-1 pl-1">
                        <LuDot className="mr-1 thick-icon"/>
                        Auto calculate
                    </div>)}

            </div>
        </div>

        <div className="w-full flex flex-col mt-6">
            <div className="font-gabarito text-xl">Country or Region (currency)</div>
            <div className="mt-4">
                <Select
                    styles={customStyles}
                    isSearchable
                    options={countries}
                    onChange={(selectedOption) => {dispatch(setSelectedCountry(selectedOption));
                        dispatch(setSelectedRate(feeRates[selectedOption.value][0]))
                    }}
                    value={selectedCountry}
                />
            </div>
        </div>
        
        <div className="w-full flex flex-col mt-6 border-b border-[#6e6e6d]">
            <div className="font-gabarito text-xl">Fee rate</div>
            <div className="mt-4 mb-6">
                <Select
                    styles={customStyles}
                    isSearchable
                    options={feeRates[selectedCountry.value]}
                    value={selectedFeeRate}
                    onChange={(selectedOption) => dispatch(setSelectedRate(selectedOption))}
                />
            </div>
        </div>

        <div className="w-full flex flex-col sm:flex-row mt-6">
            <div className="flex flex-row sm:flex-col justify-between sm:justify-start w-full sm:w-4/5">
                <div className="font-gabarito text-gray-600">Paypal fee</div>
                <div className="gabarito-semibold mt-2 overflow-hidden whitespace-nowrap text-overflow-ellipsis" style={{ maxWidth: '90px', overflow: 'hidden'}}>{currency}{formatNumberWithCommas((money === 0 || showResults === false) ? '-' : `${PaypalFee.toFixed(2)}`)}</div>
            </div>
            <div className="flex flex-row sm:flex-col justify-between sm:justify-start w-full">
                <div className="font-gabarito text-gray-600">You will receive</div>
                <div className="gabarito-semibold mt-2 overflow-hidden whitespace-nowrap text-overflow-ellipsis" style={{ maxWidth: '90px', overflow: 'hidden'}}>{currency}{formatNumberWithCommas((money === 0 || showResults === false) ? '-' : `${(money-PaypalFee).toFixed(2)}`)}</div>
            </div>
            <div className="flex flex-row sm:flex-col justify-between sm:justify-start w-full">
                <div className="font-gabarito text-gray-600">You should ask for</div>
                <div className="gabarito-semibold mt-2 overflow-hidden whitespace-nowrap text-overflow-ellipsis" style={{ maxWidth: '90px', overflow: 'hidden'}}>{currency}{formatNumberWithCommas((money === 0 || showResults === false) ? '-' : `${breakEven.toFixed(2)}`)}</div>
            </div>
        </div>
        
        {selectedFeeRate.fixed !== 0 ? (
            <div className="font-gabarito text-gray-600 mt-6">The amounts are calculated based on the PayPal fees of {feeRate}% + {currency}{selectedFeeRate.fixed} per transaction.</div>
        ) : (<div className="font-gabarito text-gray-600 mt-6">The amounts are calculated based on the PayPal fees of {feeRate}%.</div>)}



    </div>
)}

export default App