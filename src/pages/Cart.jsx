import React from 'react'
import jacket from '../assets/jacket.jpeg'
import wishlist from '../assets/wishlist.svg'
import del from '../assets/delete.svg'
import add from '../assets/add.svg'
import remove from '../assets/remove.svg'
import promo from '../assets/giftcard.svg'
import mob from '../assets/mob.svg'
import more from '../assets/more.svg'
import location from '../assets/location.svg'
import google from '../assets/icons/google.png'
import paypal from '../assets/icons/paypal.svg'
import mcard from '../assets/icons/mastercard.svg'
import { useState, useEffect } from 'react'
import PaymentForm from '../components/PaymentForm'

const price = 700
const dPrice = 270
const name = "Aakanksha Satpute"
const mobile = "+91 6734362462"

const Cart = () => {
    const [count, setCount] = useState(0)
    const [discountPrice, setdiscountPrice] = useState(dPrice)
    useEffect(() => {

    }, [])

    useEffect(() => {
    }, [count])


    return (
        <div className='flex flex-col md:flex-row justify-center mt-32 gap-10'>
            <div className="flex flex-col">
            <div className='w-full flex flex-col items-center '>
                <div className="cards w-full flex flex-col gap-4 items-center justify-center">
                    <div className='flex gap-4 mx-3'>
                        <img src={location} alt="" width={15} />
                        <p>Delivery at Home- Flat no:301,SVR Encalve,Hyper Nagar,Vasavi,
                            Maharshtra</p>
                    </div>
                    <div className="card flex md:m-8 border border-[#9854AB] rounded-lg w-[96%] md:w-[90%] gap-20">
                        <div className='flex w-full'>
                            <img className='mx-4 my-4 rounded-lg w-[150px] h-[150px] md:w-[155px] md:h-[150px]' src={jacket} alt="" />
                            <div className="flex flex-col w-full info my-4">

                                <div className='flex justify-between w-full'>
                                    <div className='font-bold text-xl'>Blue Demin Jacket</div>
                                    <div className="actions flex flex-col gap-16 m-4">
                                        <div className='flex justify-end gap-2'>
                                            <img src={wishlist} alt="" />
                                            <img src={del} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className='mb-2 md:my-4 text-[#828282]'>for Men's - casual</div>
                                <div className='flex flex-col md:flex-row md:justify-start md:relative '>
                                    <div className='relative text-[#828282] mb-3'>₹ {price} <div className='absolute w-10 top-3 h-[1px] bg-[#828282]'></div> <span className='ml-5 text-black font-bold'>₹ {discountPrice}</span> </div>

                                    <div className='flex gap-3 md:absolute md:right-[20px]'>
                                        <div className='bg-[#DA1C5C] flex items-center justify-center text-white py-1 md:py-0 px-4 rounded-lg text-xs '>QTY.</div>
                                        <div className='flex gap-2'>
                                            <img onClick={() => { setCount(count + 1) }} src={add} alt="" />
                                            <button className='border border-[#828282] px-5'>{count}</button>
                                            <img onClick={() => { setCount(count - 1) }} src={remove} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="card border border-[#9854AB] md:m-2 rounded-lg w-[96%] md:w-[90%]">
                        <h3 className='font-bold p-2 pb-3 text-xl '>Offers</h3>
                        <div className="promocode flex items-center justify-between mx-10">
                            <div className='flex gap-2 items-center'>
                                <img src={promo} alt="" />
                                <span className='text-[#828282] text-[14px]'>Select a Promo-code</span>
                            </div>
                            <h3 className='text-[#FF0000]'>View Offers</h3>
                        </div>
                        <div className='flex flex-col md:flex-row items-center justify-between py-3 mt-3 ml-20 mr-4 '>
                            <label className='flex items-center gap-4'>
                                <p className='text-[#828282] text-[14px]'>Enter the Promo-code</p>
                                <input className='border w-32 border-[#828282] rounded-lg py-2 ' name="firstName" placeholder='PromoCode' />
                            </label>
                            <div className='bg-[#DA1C5C] flex items-center justify-center text-white py-2 px-10 mt-5 md:my-0 rounded-lg text-xs'>Apply</div>
                        </div>
                    </div>
                    <div className="card border border-[#9854AB] md:m-2 rounded-lg w-[96%] md:w-[90%]">
                        <div className="flex items-center justify-between mr-4">
                            <h3 className='font-bold p-2 pb-3 text-xl '>Offers</h3>
                            <p className='text-[#9854AB]'>Change</p>
                        </div>
                        <div className="custInfo text-[#828282] text-[14px]">
                            <div className='px-4 pb-2'>{name}</div>
                            <div className='flex gap-1 py-2 p-4'>
                                <img src={mob} alt="" />
                                {mobile}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <h3 className='flex items-start font-bold text-[18px] m-8'>Payment Options</h3>
            
                <div className="payOptions flex gap-5 mx-10">
                    <button className='flex items-center rounded-lg px-2 gap-1 border border-black'>
                        <img src={google} alt="" width={15} /><span> Pay</span>
                    </button>
                    <button className='flex items-center rounded-lg px-2 gap-1 border border-black'>
                        <img src={paypal} alt="" width={15} /><span> PayPal</span>
                    </button>
                    <button className='flex items-center rounded-lg px-2 gap-1 text-white bg-[#2544E5] '>
                        <img className='' src={mcard} alt="" width={15} /><span> Pay</span>
                    </button>

                </div>
                <PaymentForm />
            </div>
            </div>


            <div className=''>
                <div className="orderDetails border-2 border-[#9854AB] m-8 rounded-lg md:w-[20vw]">
                    <h4 className='text-[#828282] font-bold m-3 mt-6'>PRICE DETAILS</h4>
                    <hr />
                    <div className='flex items-center justify-between m-3 font-bold'>
                        <span>Price</span>
                        <span>₹ {price}</span>
                    </div>
                    <hr />
                    <div className='flex items-center justify-between m-3 font-bold'>
                        <span>Discount</span>
                        <span>-₹ {() => { setdiscountPrice(discountPrice - dPrice) }}</span>
                    </div>
                    <hr />
                    <div className='flex items-center justify-between m-3 font-bold'>
                        <span>Delivery Charges</span>
                        <span>₹ 40</span>
                    </div>
                    <hr />
                    <div className='flex items-center justify-between m-3 mb-8 font-bold'>
                        <span>total Amount</span>
                        <span>₹ {price}</span>
                    </div>
                </div>

                <div className='bg-[#DA1C5C] hidden md:visible text-white flex justify-between  m-8 rounded-lg py-2 gap-10'>
                    <div className="totalflex flex-col ml-8">
                        <div>₹ {price}</div>
                        <div className='text-xs'>Total</div>
                    </div>
                    <div className='flex items-center gap-8 mr-8'>
                        Place Order
                        <img src={more} alt="" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Cart
