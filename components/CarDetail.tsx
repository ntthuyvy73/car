"use client";
import { CarDetailProps } from "@/types";
import { Dialog } from "@headlessui/react";
import Image from "next/image";

const CarDetail = ({ car, isOpenModal, closeModal }: CarDetailProps) => {
    return (
        <>
            <Dialog
                as="div"
                open={isOpenModal}
                onClose={closeModal}
                className="relative z-10"
            >
                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                    <Dialog.Panel className="relative  w-full max-w-lg  max-h-[90vh] overflow-y-auto  rounded-2xl bg-white p-6 text-left flex flex-col gap-5 transform transition-all shadow-xl">
                        <button
                            className="absolute top-2 right-2 z-10 p-2 rounded-full bg-primary-blue-100"
                            onClick={closeModal}
                        >
                            <Image
                                src="/close.svg"
                                alt=""
                                width={20}
                                height={20}
                                className="object-contain"
                            />
                        </button>

                        {/* img */}
                        <div className=" flex flex-col gap-3">
                            <div className="relative w-full h-40  bg-pattern bg-cover">
                                <Image
                                    src="/hero.png"
                                    alt=""
                                    fill
                                    priority
                                    className="object-contain"
                                />
                            </div>

                            <div className="flex gap-5">
                                <div className="relative w-full h-24  bg-blue-200 rounded-lg">
                                    <Image
                                        src="/hero.png"
                                        alt=""
                                        fill
                                        priority
                                        className="object-contain"
                                    />
                                </div>

                                <div className="relative w-full h-24  bg-blue-200 rounded-lg">
                                    <Image
                                        src="/hero.png"
                                        alt=""
                                        fill
                                        priority
                                        className="object-contain"
                                    />
                                </div>

                                <div className="relative w-full h-24  bg-blue-200 rounded-lg">
                                    <Image
                                        src="/hero.png"
                                        alt=""
                                        fill
                                        priority
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* informations */}
                        <div className="">
                            <h3 className="text-2xl font-extrabold capitalize">
                                {car.make} {car.model}
                            </h3>

                            {Object.entries(car).map((item, index) => (
                                <div
                                    className="flex justify-between items-center text-black-100"
                                    key={"detail" + index}
                                >
                                    <p className="capitalize my-2">
                                        {item[0].replace("_", " ")}
                                    </p>
                                    <p className="font-bold">{item[1]}</p>
                                </div>
                            ))}
                        </div>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </>
    );
};

export default CarDetail;
