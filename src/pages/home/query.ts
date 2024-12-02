export const fetchMovies = async () => {
    const res = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        {
            headers: {
                Authorization: 
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZWFkMzVmM2JkMDIyNjY5ODFkNjI2ZTEwYjYzYWMxZCIsIm5iZiI6MTczMjUyNTY4Ny45MTMxNzgyLCJzdWIiOiI2NzNjNDliZGZmMzMwYmRjNTc4MjIwZTciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.chGdsVw5KlTxKA4u6NvoZ44wAda4f1V1nXKT3GTK6qk",
            }
        }
    );
    /*console.log(res.json());

    return res.json();*/
    const data = await res.json();
    return data;
}
export const fetchTvShows = async () => {
    const res = await fetch(
        "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
        {
            headers: {
                Authorization: 
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZWFkMzVmM2JkMDIyNjY5ODFkNjI2ZTEwYjYzYWMxZCIsIm5iZiI6MTczMjUyNTY4Ny45MTMxNzgyLCJzdWIiOiI2NzNjNDliZGZmMzMwYmRjNTc4MjIwZTciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.chGdsVw5KlTxKA4u6NvoZ44wAda4f1V1nXKT3GTK6qk",
            }
        }
    );
    
    const data = await res.json();
    return data;
}