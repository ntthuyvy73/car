"use client";
import React, { FormEvent, useState } from "react";
import { SearchManufacturer } from ".";
import Image from "next/image";

const SearchButton = () => {
    return (
        <button type="submit">
            <Image
                src="/magnifying-glass.svg"
                alt=""
                width={40}
                height={40}
                className="object-contain"
            />
        </button>
    );
};

const SearchBar = ({ setManufacturer, setModel }) => {
    const [searchManufacturer, setSearchManufacturer] = useState("");
    const [searchModel, setSearchModel] = useState("");

    // console.log(searchManufacturer);

    const hanldeSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        //  console.log("submit");

        e.preventDefault();
        setManufacturer(searchManufacturer.toLowerCase());
        setModel(searchModel.toLowerCase());
    };

    return (
        <form className="" onSubmit={hanldeSubmit}>
            <div className="flex-1 max-sm:w-full flex justify-start items-center mb-3">
                <SearchManufacturer
                    manufacturer={searchManufacturer}
                    setManufacturer={setSearchManufacturer}
                />
                <SearchButton />
            </div>

            <div className="flex-1 max-sm:w-full flex justify-start items-center">
                <Image
                    src="/model-icon.png"
                    alt=""
                    width={20}
                    height={20}
                    className="object-contain absolute ml-4"
                />
                <input
                    value={searchModel}
                    onChange={(e) => setSearchModel(e.target.value)}
                    placeholder="Search model ..."
                    className="w-full h-[48px] pl-12 p-4 rounded-full bg-gray-300 outline-none"
                />
                <SearchButton />
            </div>
        </form>
    );
};

export default SearchBar;
