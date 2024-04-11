"use client";
import React, { useEffect, useState } from "react";
import { CarCard, SearchBar } from ".";
import { fetchCars } from "@/utils";

const Catalogue = () => {
    const [allCars, setAllCars] = useState([]);
    const [manufacturer, setManufacturer] = useState("");
    const [model, setModel] = useState("");

    const getCars = async () => {
        const data = await fetchCars({
            manufacturer: manufacturer,
            model: model,
            year: 2022,
            fuel: "",
            limit: 10,
        });
        //  console.log(data);

        setAllCars(data);
    };

    useEffect(() => {
        getCars();
    }, [manufacturer, model]);

    return (
        <div className="container">
            <h3 className="text-3xl font-extrabold">Catalogue</h3>
            <p className="font-light">Explore out cars you might like</p>

            <SearchBar setManufacturer={setManufacturer} setModel={setModel} />

            {/* list */}
            {allCars && (
                <div className="grid grid-cols-4 gap-5 my-5">
                    {allCars.map((car, index) => (
                        <CarCard car={car} key={index} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Catalogue;
