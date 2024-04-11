"use client";
import { CarCardProps } from "@/types";
import { calculateCarRent } from "@/utils";
import Image from "next/image";
import { Button, CarDetail } from ".";
import { useState } from "react";

const CarCard = ({ car }: CarCardProps) => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const { city_mpg, year, make, model, transmission, drive } = car;

    const carRent = calculateCarRent(city_mpg, year);

    return (
        <div className="group relative flex flex-col p-6 justify-center bg-blue-100 rounded-3xl hover:bg-white hover:shadow-xl gap-5">
            <h2 className="text-3xl font-semibold capitalize">
                {make} {model}
            </h2>

            <p className="flex mt-6 text-[32px] leading-[38px] font-extrabold">
                <span className="self-start text-[14px] leading-[17px] font-semibold">
                    $
                </span>
                {carRent}
                <span className="self-end text-[14px] leading-[17px] font-medium">
                    /day
                </span>
            </p>

            {/* image */}
            <div className="relative  w-full h-40 my-3">
                <Image
                    src="/hero.png"
                    alt=""
                    fill
                    priority
                    className=" object-contain"
                />
            </div>

            {/* actions */}
            <div className=" relative flex w-full">
                <div className="flex justify-between gap-3 group-hover:invisible w-full">
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image
                            src="/steering-wheel.svg"
                            alt=""
                            width={20}
                            height={20}
                            priority
                            className=" object-contain"
                        />
                        <p className="text-[17px] leading-[17px]">
                            {transmission === "a" ? "Automatic" : "Manual"}
                        </p>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image
                            src="/tire.svg"
                            alt=""
                            width={20}
                            height={20}
                            priority
                            className=" object-contain"
                        />
                        <p className="text-[17px] leading-[17px]">
                            {drive.toUpperCase()}
                        </p>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image
                            src="/gas.svg"
                            alt=""
                            width={20}
                            height={20}
                            priority
                            className=" object-contain"
                        />
                        <p className="text-[17px] leading-[17px]">
                            {city_mpg} MPG
                        </p>
                    </div>
                </div>

                <div className="hidden group-hover:flex  absolute  bottom-0 w-full z-10">
                    <Button
                        title="View More"
                        rightIcon="/right-arrow.svg"
                        classes=" w-full"
                        handleClick={() => setIsOpenModal(true)}
                    />
                </div>
            </div>

            {isOpenModal && (
                <CarDetail
                    car={car}
                    isOpenModal={isOpenModal}
                    closeModal={() => setIsOpenModal(false)}
                />
            )}
        </div>
    );
};

export default CarCard;
