import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Demo2 = () => {
    const { store, actions } = useContext(Context);
    const [selectedOption, setSelectedOption] = useState(null);

    useEffect(() => {
        actions.getMovieListFromApi2();
    }, []);

    const handleGetMovieApi = () => {
        actions.getMovieListFromApi2();
    };

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <>
            <select value={selectedOption} onChange={handleSelectChange}>
                <option disabled>Select an option</option>
                <option value={"funny"}>Funny</option>
                <option value={"sad"}>Sad</option>
            </select>

            {selectedOption === "funny" && (
                <div>
                    <button onClick={() => actions.getFunnyRecommendation()}>Get a funny movie!</button>
                    {store.recommendedFunnyMovie && (
                        <div>
                            <h2>{store.recommendedFunnyMovie.name}</h2>
                            <p>{store.recommendedFunnyMovie.description}</p>
                            <img src={store.recommendedFunnyMovie.poster} alt={store.recommendedFunnyMovie.name} />
                            <p>Release date: {store.recommendedFunnyMovie.relese_date}</p>
                        </div>
                    )}
                </div>
            )}

            {selectedOption === "sad" && (
                <div>
                    <button onClick={() => actions.getSadRecommendation()}>Get a sad movie!</button>
                    {store.recommendedSadMovie && (
                        <div>
                            <h2>{store.recommendedSadMovie.name}</h2>
                            <p>{store.recommendedSadMovie.description}</p>
                            <img src={store.recommendedSadMovie.poster} alt={store.recommendedSadMovie.name} />
                            <p>Release date: {store.recommendedSadMovie.relese_date}</p>
                        </div>
                    )}
                </div>
            )}
        </>
    );
};