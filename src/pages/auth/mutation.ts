export const mutationLogin = async () => {
    const res = await fetch(
        "http://api.themoviedb.org/3/authentication/guest_session/new",
        {
            headers: {
                Authorization: 
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZWFkMzVmM2JkMDIyNjY5ODFkNjI2ZTEwYjYzYWMxZCIsIm5iZiI6MTczMjAwNDI4NS42NTkwMDAyLCJzdWIiOiI2NzNjNDliZGZmMzMwYmRjNTc4MjIwZTciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.PuIjMhBsYN59qdwBghWO3FyA2UvJLhyfc9Vq9O4MNG4",
            }
        }
    );
    /*console.log(res.json());

    return res.json();*/
    const data = await res.json();
    //console.log(data); // If you want to log it
    return data;
}