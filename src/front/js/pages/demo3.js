import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

export const Demo3 = () => {
    const { actions } = useContext(Context);
    const [selectedOption, setSelectedOption] = useState("Que estas buscando?");
    const [selectedOption2, setSelectedOption2] = useState("Quieres que sea una pelicula animada?");
    const [showSecondSelect, setShowSecondSelect] = useState(false);
    const [nextClicked, setNextClicked] = useState(false);
    const [funnyMovies, setFunnyMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => {
        console.log(funnyMovies, "<----Estas son las funny movies");
    }, [funnyMovies])
    
    useEffect(() => {
        if (selectedMovie) {
            console.log("Película seleccionada:", selectedMovie);
        }
    }, [selectedMovie]);

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
        setShowSecondSelect(false);
    };

    const handleFunnyRecomendation = async () => {
        try {
            const funnyMovies = await actions.getFunnyRecommendation();
            
            setFunnyMovies(funnyMovies);
            console.log(funnyMovies, "<----Estas son las funny movies");
            setShowSecondSelect(true);
            setNextClicked(true);
           
        } catch (error) {
            console.error("Error al obtener recomendaciones divertidas:", error);
        }
    };

    const handleApplySecondFilter = () => {
        if (selectedOption2 === "yes" || selectedOption2 === "no") {
            setShowSecondSelect(true);

            if (selectedOption2 === "yes") {
                const animatedFunnyMovies = funnyMovies.filter(movie => movie.animation === true);
                setFilteredMovies(animatedFunnyMovies);
                console.log(animatedFunnyMovies)
                showRandomMovie(animatedFunnyMovies);
        
            } else if (selectedOption2 ==="no") {
                const animatedFunnyMovies = funnyMovies.filter(movie => movie.animation === false);
                setFilteredMovies(animatedFunnyMovies);
                console.log(animatedFunnyMovies)
                showRandomMovie(animatedFunnyMovies);
        }}};

        const showRandomMovie = (filteredMovies) => {
            if (filteredMovies.length > 0) {
                const randomIndex = Math.floor(Math.random() * filteredMovies.length);
                const randomMovie = filteredMovies[randomIndex];
                console.log("Película seleccionada:", randomMovie);
                setSelectedMovie(randomMovie);
            }
        };


    return (
        <>
            <select value={selectedOption} onChange={handleSelectChange}>
                <option disabled>Que estas buscando?</option>
                <option value={"funny"}>Una pelicula divertida</option>
            </select>

            {selectedOption === "funny" && (
                <>
                    <div>
                        <button onClick={() => handleFunnyRecomendation()}>Siguiente</button>
                    </div>

                    {nextClicked && (
                        <select value={selectedOption2} onChange={(event) => setSelectedOption2(event.target.value)}>
                            <option disabled> Quieres que sea una pelicula animada?</option>
                            <option value={"yes"}>Si!</option>
                            <option value={"no"}>No</option>
                        </select>
                    )}

                    {nextClicked && showSecondSelect && (
                        <div>
                            <button onClick={() => handleApplySecondFilter()}>Aplicar Segundo Filtro</button>
                        </div>
                    )}

                    {selectedMovie && (
                    <div>
                         <h2>{selectedMovie.name}</h2>
                         <p>{selectedMovie.description}</p>
                         <img src={selectedMovie.poster} alt={selectedMovie.name} />
                         <p>Release date: {selectedMovie.relese_date}</p>
                     </div>
                    )}
                </>
            )}
        </>
    );
};
