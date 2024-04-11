import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <footer className="container">
            <div className="w-full flex flex-col text-gray-400">
                {/* top */}
                <div className="flex flex-row justify-start  max-md:flex-col  max-md:gap-10">
                    {/* left */}
                    <div className="flex-1">
                        <Image
                            src="/logo.svg"
                            alt="logo"
                            width={118}
                            height={18}
                        />
                        <p className="mt-5">
                            Carhub 2023
                            <br />
                            All Rights Reserved ©
                        </p>
                    </div>

                    {/* right */}
                    <div className="flex gap-3  mx-20  max-md:flex-col max-md:mx-5">
                        {footerLinks.map((item) => (
                            <div className=" flex flex-col gap-3">
                                <h3 className="font-bold text-black-100">
                                    {item.title}
                                </h3>
                                <div className="flex flex-col flex-wrap ">
                                    {item.links.map((link) => (
                                        <Link
                                            href={link.url}
                                            className="my-3 min-w-[250px]"
                                        >
                                            {link.title}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* bottom */}
                <div className="flex justify-between max-md:flex-col max-md:mt-5">
                    {/* left */}
                    <div className="text-black-100">
                        @2023 CarHub. All rights reserved
                    </div>

                    {/* right */}
                    <div className="flex gap-10 ">
                        <Link href="/">Privacy & Policy</Link>
                        <Link href="/">Terms & Condition</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
