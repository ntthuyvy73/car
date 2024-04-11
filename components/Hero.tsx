import React from "react";
import { Button } from ".";
import Image from "next/image";

const Hero = () => {
    return (
        <div className="container  flex h-full w-full ">
            {/* left */}
            <div className="flex-1">
                <h2 className="text-[62px] font-extrabold ">
                    Find, book, rent a car—quick and super easy!
                </h2>
                <p className="text-[27px] font-light text-black-100 my-5">
                    Streamline your car rental experience with our effortless
                    booking process.
                </p>

                <Button title="Explore Cars" />
            </div>
            {/* right */}
            <div className=" relative flex-[1.5] flex justify-end items-end w-full xl:h-screen ">
                <Image
                    src="/hero.png"
                    alt="hero"
                    fill
                    priority
                    className=" w-[90%] h-[590px] object-contain z-0"
                />
                <div className="bg-hero-bg bg-repeat-round absolute xl:-right1/2 -right-1/4 -top-27px w-[90%] h-[590px] -z-10" />
            </div>
        </div>
    );
};

export default Hero;
