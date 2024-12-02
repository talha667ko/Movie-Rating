import { Card, Grid, Form, Label } from "semantic-ui-react";
import { DisplayType } from "."
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { rateMovie, rateTvShow } from "./mutation";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"


interface DisplayData {
    id: number;
    overview: string;
    poster_path: string;
    title?: string;
    name?: string;
    vote_average: number;
    release_date: string;
    rating?: number;
}

interface Props {
    data: DisplayData[];
    displayType: DisplayType;
    isRated?: boolean;
}

export const ColumnDisplay = (props: Props) => {

    const {data, displayType, isRated} = props;
    const [rating, setRating] = useState<number>(0);
   
    const onSuccess = () =>{
        toast.success("Successfully rated!",{
            autoClose: 1000,
            //Look at the react-tostify library to custom it!!
        });
    };
    const onError = () =>{
        toast.error("Could not rate!");
        console.log(rating);
    };
    const {mutate: rateMovieMutation} = useMutation({
        mutationKey: ["rateMovie"],
        mutationFn: (id: number) => rateMovie(id, rating), 
        onSuccess,
        onError,
    });

    const {mutate: rateTvShowMutation} = useMutation({
        mutationKey: ["rateTvShow"],
        mutationFn: (id: number) => rateTvShow(id, rating),
        onSuccess,
        onError,
    });
    
    const rate = displayType === DisplayType.Movies ? rateMovieMutation : rateTvShowMutation;
    return(
    <Grid 
        columns={3}
        stackable
        centered
        verticalAlign="top"
        padded="vertically"
    >
        {data.map((displayData: DisplayData) => (
            <Grid.Column key={displayData.id}>
                <Card.Group>
                    <Link to={`/${displayType === DisplayType.Movies ? "movie" : "tvshow"}/${displayData.id}`}>
                    <Card 
                    style={{height: 800, backgroundColor: "black", color: "white",border: "2px solid rgb(96, 11, 184)", borderRadius: "10px"}}
                    fluid
                    image={`https://image.tmdb.org/t/p/original/${displayData.poster_path}`}
                    header={
                        <p style={{color: "rgb(96, 11, 184)", fontWeight: "bold"}}>{displayType === DisplayType.Movies ? displayData.title : displayData.name}</p>}
                    meta={<p style={{color: "gray"}}>{`Release Date: ${displayData.release_date} | Rating: ${displayData.vote_average}`}</p>}
                    description={<p style={{color: "lightgray"}}>{displayData.overview.slice(0,350) + "..."}</p>} 
                    />
                    </Link>
                    {isRated && <Label style={{width: '100%', marginTop: 10}} color="green"> Your Rating : {displayData.rating}⭐️</Label>}
                    <Form style={{marginTop: 10}}>
                        <Form.Group inline >
                            <Form.Field>
                                <Form.Input type="number" min="0" max="10" step="0.1" onChange={(e) => setRating(Number(e.target.value))} 
                                action={{
                                    color: "violet",
                                    labelPosition: "right",
                                    icon: "star",
                                    content: "Rate",
                                    onClick: () => rate(displayData.id),
                                }} />
                            </Form.Field>
                        </Form.Group>
                    </Form>
                </Card.Group>
            </Grid.Column>
        ))}
    </Grid>
    );
}