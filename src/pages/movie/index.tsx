import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { Grid, Header, Loader, Segment, Image, List, Label } from "semantic-ui-react";
import { fetchMovieDetails } from "./query";

export const Movie = () => {
    const {id} = useParams<string>();

    if (!id) {
        return <div>Invalid movie ID</div>;
    }

    const {data, isLoading} = useQuery({ 
        queryKey: ["movie"],
        queryFn: () => fetchMovieDetails(id),
    });
    
    if (isLoading) {
        return <Loader active/>
    }
    return( <div style={{marginTop: 50}}>
        <Segment>
            <Header style={{color:"rgb(96, 11, 184)"}}>{data.title}</Header>
            <Grid columns={2} divided textAlign="left" style={{marginTop: 20,backgroundColor:"black"}}>
                <Grid.Row>
                    <Grid.Column width={6}>
                        <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "100%",
                        }}>
                            <Image 
                            size="medium" 
                            centered 
                            src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
                            />
                        </div>
                    </Grid.Column>
                    <Grid.Column>
                        <List> 
                        {/* The list component aloows us to dispaly a bunch of on top of the other.*/} 
                        <List.Item>
                            <List.Header style={{color: "rgb(96, 11, 184)"}}>Is the movie for adults:</List.Header>
                            <List.Description style={{color: "lightgray"}}>
                            {data.adult ? "Yes" : "No"}
                            </List.Description>
                        </List.Item>
                        <List.Item>
                            <List.Header style={{color: "rgb(96, 11, 184)"}}>Budget:</List.Header>
                            <List.Description style={{color: "lightgray"}}>
                            {data.budget + " ＄"}
                            </List.Description>
                        </List.Item>
                        <List.Item>
                            <List.Header style={{color: "rgb(96, 11, 184)"}}>Revenue:</List.Header>
                            <List.Description style={{color: "lightgray"}}>
                            {data.revenue + " ＄"}
                            </List.Description>
                        </List.Item>
                        <List.Item>
                            <List.Header style={{color: "rgb(96, 11, 184)"}}>Genres: </List.Header>
                            {data.genres.map((genre: any) => (
                                <Label color="violet" key={genre.id}>{genre.name}</Label>
                            ))}
                        </List.Item>
                        <List.Item>
                            <List.Header style={{color: "rgb(96, 11, 184)"}}>IMDB id: </List.Header>
                            <List.Description style={{color: "lightgray"}}>
                            {data.imdb_id}
                            </List.Description>
                        </List.Item>
                        <List.Item>
                            <List.Header style={{color: "rgb(96, 11, 184)"}}>Popularity: </List.Header>
                            <List.Description style={{color: "lightgray"}}>
                            {data.popularity}
                            </List.Description>
                        </List.Item>
                        <List.Item>
                            <List.Header style={{color: "rgb(96, 11, 184)"}}>Production Companies:</List.Header>
                            <List.Description style={{color: "lightgray"}}>
                            {data.production_companies
                            .map((company: any) => company.name)
                            .join(", ")}
                            </List.Description>
                        </List.Item>
                        <List.Item>
                            <List.Header style={{color: "rgb(96, 11, 184)"}}>Release Date:</List.Header>
                            <List.Description style={{color: "lightgray"}}>
                            {data.release_date}
                            </List.Description>
                        </List.Item>
                        <List.Item>
                            <List.Header style={{color: "rgb(96, 11, 184)"}}>Runtime:</List.Header>
                            <List.Description style={{color: "lightgray"}}>
                            {data.runtime + " minutes"}
                            </List.Description>
                        </List.Item>
                        <List.Item>
                            <List.Header style={{color: "rgb(96, 11, 184)"}}>Vote average:</List.Header>
                            <List.Description style={{color: "lightgray"}}>
                            {data.vote_average + " ⭐️"}
                            </List.Description>
                        </List.Item>
                        <List.Item>
                            <List.Header style={{color: "rgb(96, 11, 184)"}}>Language:</List.Header>
                            <List.Description style={{color: "lightgray"}}>
                            {data.spoken_languages
                            .map((language: any) => language.name)}
                            </List.Description>
                        </List.Item>
                        <List.Item>
                            <List.Header style={{color: "rgb(96, 11, 184)"}}>Overview:</List.Header>
                            <List.Description style={{color: "lightgray"}}>
                            {data.overview.slice(0,700) + "..."}
                            </List.Description>
                        </List.Item>
                        </List>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    </div>);
};