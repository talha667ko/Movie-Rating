export const mutationLogin = async () => {
    const res = await fetch(
        "http://api.themoviedb.org/3/authentication/guest_session/new",
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
    //console.log(data); // If you want to log it
    return data;
}