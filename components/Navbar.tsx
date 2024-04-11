import Image from "next/image";
import React from "react";
import { Button } from ".";

const Navbar = () => {
    return (
        <header className="container">
            <nav className="flex justify-between items-start">
                <Image
                    src="logo.svg"
                    alt=""
                    width={118}
                    height={18}
                    className="object-contain"
                />

                <Button title="Sign In" />
            </nav>
        </header>
    );
};

export default Navbar;
