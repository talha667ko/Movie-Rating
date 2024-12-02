import { useState } from "react"
import { DisplayType } from "../home"
import { Container, Header, Loader, Menu, Segment } from "semantic-ui-react";
import { useQuery } from "@tanstack/react-query";
import { fetchRatedMovies, fetchRatedTvShows } from "./query";
import { ColumnDisplay } from "../home/column-display";
import { Navigate } from "react-router-dom";


export const Rated = () => {

    const [activeTabs, setActiveTabs] = useState<DisplayType>(DisplayType.Movies);

    const {data: ratedMovies = { results: [] }, isLoading: isLoadingRatedMovies} = useQuery({ 
        queryKey: ["ratedMovies"],
        queryFn: fetchRatedMovies,
    });
    const {data: ratedTvShows = { results: [] }, isLoading: isLoadingRatedTvShows} = useQuery({ 
        queryKey: ["ratedTvShows"],
        queryFn: fetchRatedTvShows,
    });

    if(isLoadingRatedMovies || isLoadingRatedTvShows){
        return <Loader active/>
    }
    if (localStorage.getItem("guest_session_id") === null) {
        return <Navigate to="/auth" />
    }
    return (
        <Container style={{marginTop: 50}}>
            <Menu pointing secondary color="violet">
                <Menu.Item name="Movies" active= {activeTabs === DisplayType.Movies} style={{color: "white"}} onClick={ () => setActiveTabs(DisplayType.Movies)} />
                <Menu.Item name="TV Shows" active= {activeTabs === DisplayType.TvShows } style={{color: "white"}} onClick={ () => setActiveTabs(DisplayType.TvShows)}/>
            </Menu >
            <Segment style={{backgroungColor: "black" }}>
            {activeTabs === DisplayType.Movies ? (
                <div style={{backgroundColor: "black"}}>
                    <Header as={"h2"} color="violet">Rated Movies</Header>
                    {isLoadingRatedMovies ? (
                        <p style={{color: "rgb(96, 11, 184)"}}>Loading Rated Movies...</p>
                    ) : ratedMovies && ratedMovies.results ? (
                    <ColumnDisplay data={ratedMovies.results} displayType={DisplayType.Movies} isRated/>
                    ) : (
                    <p style={{color: "rgb(96, 11, 184)"}}>No rated movies available.</p>
                    )}
                </div>
            ) : (
                <div style={{backgroundColor: "black"}}>
                    <Header as={"h2"} color="violet">Rated TV Shows</Header>
                    {isLoadingRatedTvShows ? (
                        <p style={{color: "rgb(96, 11, 184)"}}>Loading Rated TV Shows...</p>
                    ) : ratedTvShows && ratedTvShows.results ? (
                        <ColumnDisplay data={ratedTvShows.results} displayType={DisplayType.TvShows} isRated/>
                    ) : (
                        <p style={{color: "rgb(96, 11, 184)"}}>No rated TV shows available.</p>
                    )}
                </div>
            )}
                {/*{activeTabs === DisplayType.Movies ? (
                <div>
                    <Header as={"h2"}>Rated Movies</Header>
                    <ColumnDisplay data={ratedMovies.results} displayType={DisplayType.Movies} isRated/>
                </div> ) : (
                <div>
                    <Header as={"h2"}>Rated Tv Shows</Header>
                    <ColumnDisplay data={ratedTvShows.results} displayType={DisplayType.TvShows} isRated/>
                </div>
                )}*/}
            </Segment>
        </Container>
    );
}