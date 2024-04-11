"use client";
import { manufacturers } from "@/constants";
import { SearchManuFacturerProps } from "@/types";
import { Combobox } from "@headlessui/react";
import Image from "next/image";
import React, { useState } from "react";

const SearchManufacturer = ({
    manufacturer,
    setManufacturer,
}: SearchManuFacturerProps) => {
    const [query, setQuery] = useState("");

    const filterData =
        query === ""
            ? manufacturers
            : manufacturers.filter((item) =>
                  item
                      .toLowerCase()
                      .replace(/\s+/g, "")
                      .includes(query.toLowerCase().replace(/\s+/g, ""))
              );

    return (
        <div className="flex-1 max-sm:w-full flex justify-start items-center relative">
            <Combobox value={manufacturer} onChange={setManufacturer}>
                <Combobox.Button className="absolute top-[14px]">
                    <Image
                        src="/car-logo.svg"
                        width={20}
                        height={20}
                        className="ml-4 object-contain"
                        alt="car logo"
                    />
                </Combobox.Button>
                <Combobox.Input
                    onChange={(event) => setQuery(event.target.value)}
                    displayValue={(item: string) => item}
                    placeholder="Manufacturer ..."
                    className="h-[48px] w-full  pl-12 p-4 bg-gray-300 rounded-full outline-none cursor-pointer text-sm"
                />
                <Combobox.Options className="absolute mt-1  max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {filterData.map((item) => (
                        <Combobox.Option key={item} value={item}>
                            {item}
                        </Combobox.Option>
                    ))}
                </Combobox.Options>
            </Combobox>
        </div>
    );
};

export default SearchManufacturer;
