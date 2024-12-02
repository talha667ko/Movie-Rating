/*export const fetchRatedMovies = async () => {
    const res = await fetch(
        `https://api.themoviedb.org/3/guest_session/${localStorage.getItem("guest_session_id")}/rated/movies?language=en-US&page=1&sort_by=created_at.asc&api_key=${import.meta.env.VITE_API_KEY}`,
        {
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZWFkMzVmM2JkMDIyNjY5ODFkNjI2ZTEwYjYzYWMxZCIsIm5iZiI6MTczMjUyNTY4Ny45MTMxNzgyLCJzdWIiOiI2NzNjNDliZGZmMzMwYmRjNTc4MjIwZTciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.chGdsVw5KlTxKA4u6NvoZ44wAda4f1V1nXKT3GTK6qk",
                accept: "application/json",
            },
        }
    );
    const data = await res.json();
    return data;
}

export const fetchRatedTvShows = async () => {
    const res = await fetch(
        `https://api.themoviedb.org/3/guest_session/${localStorage.getItem("guest_session_id")}/rated/tv?language=en-US&page=1&sort_by=created_at.asc&api_key=${import.meta.env.VITE_API_KEY}`,
        {
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZWFkMzVmM2JkMDIyNjY5ODFkNjI2ZTEwYjYzYWMxZCIsIm5iZiI6MTczMjUyNTY4Ny45MTMxNzgyLCJzdWIiOiI2NzNjNDliZGZmMzMwYmRjNTc4MjIwZTciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.chGdsVw5KlTxKA4u6NvoZ44wAda4f1V1nXKT3GTK6qk",
            accept: "application/json",
        },
    }
    );
    const data = await res.json();
    return data;
}*/
export const fetchRatedMovies = async () => {
    const guestSessionId = localStorage.getItem("guest_session_id");
    if (!guestSessionId) {
        throw new Error("Guest session ID is missing.");
    }
    const res = await fetch(
        `https://api.themoviedb.org/3/guest_session/${guestSessionId}/rated/movies?language=en-US&page=1&sort_by=created_at.asc&api_key=${import.meta.env.VITE_API_KEY}`,
        {
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZWFkMzVmM2JkMDIyNjY5ODFkNjI2ZTEwYjYzYWMxZCIsIm5iZiI6MTczMjUyNTY4Ny45MTMxNzgyLCJzdWIiOiI2NzNjNDliZGZmMzMwYmRjNTc4MjIwZTciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.chGdsVw5KlTxKA4u6NvoZ44wAda4f1V1nXKT3GTK6qk",
                accept: "application/json",
            },
        }
    );
    const data = await res.json();
    return data;
};

export const fetchRatedTvShows = async () => {
    const guestSessionId = localStorage.getItem("guest_session_id");
    if (!guestSessionId) {
        throw new Error("Guest session ID is missing.");
    }
    const res = await fetch(
        `https://api.themoviedb.org/3/guest_session/${guestSessionId}/rated/tv?language=en-US&page=1&sort_by=created_at.asc&api_key=${import.meta.env.VITE_API_KEY}`,
        {
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZWFkMzVmM2JkMDIyNjY5ODFkNjI2ZTEwYjYzYWMxZCIsIm5iZiI6MTczMjUyNTY4Ny45MTMxNzgyLCJzdWIiOiI2NzNjNDliZGZmMzMwYmRjNTc4MjIwZTciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.chGdsVw5KlTxKA4u6NvoZ44wAda4f1V1nXKT3GTK6qk",
                accept: "application/json",
            },
        }
    );
    const data = await res.json();
    return data;
};
