import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { Grid, Header, Loader, Segment, Image, List, Label, Accordion, Card } from "semantic-ui-react";
import { fetchTvShowDetails } from "./query";

export const TvShow = () => {
    const {id} = useParams<string>();

    if (!id) {
        return <div>Invalid Tv Show ID</div>;
    }

    const {data, isLoading} = useQuery({ 
        queryKey: ["tvShow"],
        queryFn: () => fetchTvShowDetails(id),
    });
    
    if (isLoading) {
        return <Loader active/>
    }

    const seasonPanel = data.seasons.map((season: any) => ({
        key: season.id,
        title: `Season ${season.season_number}`,
        content: {
            content:(
                <Card 
                style={{height: "70px"}}
                meta={season.air_date}
                description={`${season.episode_count} episodes`} 
                />
            )
        }
    }));

    return( <div style={{marginTop: 50}}>
        <Segment backgroundColor="black">
            <Header style={{color:"rgb(96, 11, 184)"}}>{data.name}</Header>
            <Grid columns={2} divided textAlign="left" style={{marginTop: 20, backgroundColor:"black"}}>
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
                            <List.Header style={{color: "rgb(96, 11, 184)"}}>Producer:</List.Header>
                            <List.Description style={{color: "lightgray"}}>
                            {data.created_by
                            .map((produced: any) => produced.name)
                            .join(", ")}
                            </List.Description>
                        </List.Item>
                        <List.Item>
                            <List.Header style={{color: "rgb(96, 11, 184)"}}>Espisode run time:</List.Header>
                            <List.Description style={{color: "lightgray"}}>
                            {data.episode_run_time.join(", ") +" min"}
                            </List.Description>
                        </List.Item>
                        <List.Item>
                            <List.Header style={{color: "rgb(96, 11, 184)"}}>Genres: </List.Header>
                            {data.genres.map((genre: any) => (
                                <Label color="violet" key={genre.id}>{genre.name}</Label>
                            ))}
                        </List.Item>
                        <List.Item>
                            <List.Header style={{color: "rgb(96, 11, 184)"}}>First Air date: </List.Header>
                            <List.Description style={{color: "lightgray"}}>
                            {data.first_air_date}
                            </List.Description>
                        </List.Item>
                        <List.Item>
                            <List.Header style={{color: "rgb(96, 11, 184)"}}>Networks: </List.Header>
                            {data.networks
                            .map((network: any) => (
                                <Image 
                                key={network.id}
                                src={`https://image.tmdb.org/t/p/original/${network.logo_path}`}
                                size="small"
                                style={{marginRight: 10}}/>
                            ))}
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
                            <List.Header style={{color: "rgb(96, 11, 184)"}}>Number of episodes:</List.Header>
                            <List.Description style={{color: "lightgray"}}>
                            {data.number_of_episodes}
                            </List.Description>
                        </List.Item>
                        <List.Item>
                            <List.Header style={{color: "rgb(96, 11, 184)"}}>Number of seasons:</List.Header>
                            <List.Description style={{color: "lightgray"}}>
                            {data.number_of_seasons}
                            </List.Description>
                        </List.Item>
                        <List.Item>
                            <List.Header style={{color: "rgb(96, 11, 184)"}}>Seasons:</List.Header>
                            <List.Description style={{height: "200px",overflowY: "scroll"}}>
                                <Accordion defaultActiveIndex={0} panels={seasonPanel} styled color="black"/>
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
                            .map((language: any) => language.name).join(", ")}
                            </List.Description>
                        </List.Item>
                        </List>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    </div>);
};