import { useState } from "react";
import { Button } from "semantic-ui-react";
import { ColumnDisplay } from "./column-display";

import { fetchMovies,fetchTvShows } from "./query";
import { useQuery } from "@tanstack/react-query";
import { Navigate } from "react-router-dom";

export enum DisplayType {
    Movies= "movies",
    TvShows= "tvShows",
}

export const Home = () =>{

    const [displayType, setdisplayType] = useState<DisplayType>(
        DisplayType.Movies
    );

    const {data: movieData, isLoading: isLoadingMovies} = useQuery({ queryKey: ["movies"], queryFn: fetchMovies});

    const {data: tvData, isLoading: isLoadingTv} = useQuery({ queryKey: ["tvShows"], queryFn: fetchTvShows});

    if (localStorage.getItem("guest_session_id") === null) {
        return <Navigate to="/auth" />
    }

    return(
        <div style={{ marginTop: 50, height: "auto"}}>
            <Button.Group >
                <Button color={displayType === DisplayType.Movies ? "violet": undefined} onClick={() => setdisplayType(DisplayType.Movies)}>
                    Movies
                </Button>
                <Button color={displayType === DisplayType.TvShows ? "violet": undefined} onClick={() => setdisplayType(DisplayType.TvShows)}>
                    TV Shows
                </Button>
            </Button.Group>
            {isLoadingMovies || isLoadingTv ? (
                <div>Loading...</div>
            ) : (
            <div style={{marginTop: 20}}>
                {displayType === DisplayType.Movies ? 
                <ColumnDisplay data={movieData.results} displayType={DisplayType.Movies}/> : 
                <ColumnDisplay data={tvData.results} displayType={DisplayType.TvShows}/>
                }
            </div>
            )}
        </div>
    );
};