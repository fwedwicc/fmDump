import React from 'react'
import './styles.css'
import { TbMenu2, TbGridDots, TbSquareRounded, TbChevronLeft, TbHeartFilled, TbPencil, TbSquareRoundedChevronsDown, TbSettings, TbBell, TbChevronRight, TbSun, TbTemperature } from "react-icons/tb"
import { PiWifiHighFill, PiCellSignalFullFill } from "react-icons/pi"
import { MdOutlineWaterDrop } from "react-icons/md"
import { BiSolidBattery } from "react-icons/bi"

const Skeleton007 = () => {
    return (
        <div className='relative grid grid-cols-2 gap-0.5 w-full min-w-[28rem] h-133 rounded-3xl overflow-hidden'>
            <div className='flex justify-start size-full rounded-l-3xl py-0.5 pl-0.5 rounded-r-sm border'>
                <div className='h-full border rounded-l-[22px] rounded-r-sm w-51.75' />
            </div>
            <div className='flex justify-end size-full rounded-r-3xl py-0.5 pr-0.5 rounded-l-sm border'>
                <div className='h-full border rounded-r-[22px] rounded-l-sm w-51.75' />
            </div>
            <div className='absolute w-full h-full p-1'>
                <div className='size-full border rounded-[24px] p-1'>
                    <div className='flex flex-col size-full border rounded-[16px] overflow-hidden'>
                        <div className='relative w-full h-full flex-1 flex-col'>
                            <img src='https://placehold.co/30x30' alt='sample' className='size-full object-cover absolute z-40'></img>
                            <div className='flex items-center justify-between absolute py-1.5 px-2.25 w-full border-b bg-white z-50'>
                                <p className='text-[9px] leading-none'>14:19</p>
                                <div className='flex items-center gap-0.25'>
                                    <PiWifiHighFill className='size-2.5' />
                                    <PiCellSignalFullFill className='size-2.5 mt-[1.8px]' />
                                    <BiSolidBattery className='size-2.5 -rotate-90' />
                                </div>
                            </div>
                            <div className='flex flex-col justify-between h-full p-4.5 pt-10 relative z-50'>
                                <div className='space-y-2.5'>
                                    <div className='flex items-center justify-between -mt-3'>
                                        <p className='text-[17px] leading-none tracking-tight'>pl<span className='montecarlo-font text-[28px] leading-none'>a</span><span className='italic leading-none'>n</span>to</p>
                                        <div className='flex items-center gap-2'>
                                            <TbBell className='size-4.5 stroke-[1.5px]' />
                                            <TbSettings className='size-4.5 stroke-[1.5px]' />
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <div className='flex items-center gap-2'>
                                            <div className='flex items-center rounded-full border divide-x'>
                                                <div className='flex items-center justify-center pr-1.5 pl-2.5 py-1.25 overflow-hidden'>
                                                    <p className='text-xs leading-none'>Fred</p>
                                                </div>
                                                <div className='flex items-center justify-center pr-2.5 pl-2 py-1.25 overflow-hidden'>
                                                    <TbPencil className='size-4 stroke-[1.5px]' />
                                                </div>
                                            </div>
                                            <div className='flex items-center gap-1 py-1.75 px-2.75 pr-3 rounded-full border'>
                                                <TbHeartFilled className='size-3.25' />
                                                <p className='text-xs leading-none'>82%</p>
                                            </div>
                                        </div>
                                        <div className='size-7 flex items-center justify-center rounded-full border -mr-[4px]'>
                                            <TbSquareRoundedChevronsDown className='size-5 stroke-[1.5px]' />
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-end justify-between'>
                                    <div className='relative flex flex-col items-center gap-2.25 p-3 min-w-[7rem] border rounded-xl'>
                                        <TbChevronRight className='size-4 stroke-[2px] absolute right-1.5 top-2.25' />
                                        <div className='flex items-center justify-between w-full mb-1'>
                                            <p className='leading-none font-bold text-8px] mb-1'>Condition</p>
                                        </div>
                                        <div className='flex items-center w-full gap-2'>
                                            <div className='grid place-content-center pl-[0.8px] size-[26.5px] border rounded-full'>
                                                <MdOutlineWaterDrop className='size-4.25' />
                                            </div>
                                            <div className='space-y-0.5'>
                                                <p className='text-[7px] leading-none'>Water</p>
                                                <p className='text-[11.5px] font-medium leading-none'>90%</p>
                                            </div>
                                        </div>
                                        <div className='flex items-center w-full gap-2'>
                                            <div className='grid place-content-center pl-[0.8px] size-[26.5px] border rounded-full'>
                                                <TbSun className='size-4.25 stroke-[2px]' />
                                            </div>
                                            <div className='space-y-0.5'>
                                                <p className='text-[7px] leading-none'>Light</p>
                                                <p className='text-[11.5px] font-medium leading-none'>30%</p>
                                            </div>
                                        </div>
                                        <div className='flex items-center w-full gap-2'>
                                            <div className='grid place-content-center pl-[0.8px] size-[26.5px] border rounded-full'>
                                                <TbTemperature className='size-4.25 stroke-[2px]' />
                                            </div>
                                            <div className='space-y-0.5'>
                                                <p className='text-[7px] leading-none'>Temperture</p>
                                                <p className='text-[11.5px] font-medium leading-none'>24°</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-2.5 border px-1.25 py-[4.5px] pr-4.5 rounded-full'>
                                        <div className='px-5 py-[7.5px] border rounded-full'>
                                            <p className='font-bold text-[9px] leading-none'>Home</p>
                                        </div>
                                        <p className='text-[9px] leading-none'>Community</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center justify-between w-full px-8 h-7.75 border-t bg-white'>
                            <TbGridDots className='size-3.5 stroke-[2px]' />
                            <div className='flex items-center gap-6'>
                                <TbMenu2 className='size-3.5 stroke-[2px] rotate-90' />
                                <TbSquareRounded className='size-3.5 stroke-[2px]' />
                                <TbChevronLeft className='size-3.5 stroke-[2px]' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skeleton007