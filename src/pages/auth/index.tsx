import { Grid, Header, Form, Segment, Button} from "semantic-ui-react";
import { useMutation } from "@tanstack/react-query";
import { mutationLogin } from "./mutation";
import { useNavigate } from "react-router-dom";

export const Auth = () => {

    /*const { data, mutate} = useMutation({
        mutationKey: ["login"],
        mutationFn: mutationLogin});
    
    const handleLogin = async () =>{
        await mutate();
        localStorage.setItem("guest_session_id", data?.guest_session_id);
    };*/
    const navigate = useNavigate();

    const mutation = useMutation({
      mutationKey: ["login"],
      mutationFn: mutationLogin,
      onSuccess: (data) => {
        localStorage.setItem("guest_session_id", data.guest_session_id);
        navigate("/");
      },
      onError: (error) => {
        console.error("Login error:", error);
        // Handle error, e.g., show error message to user
      },
    });
  
    const handleLogin = () => {
      mutation.mutate();
    };

    return(
        <Grid textAlign="center" verticalAlign="middle" style={{height: "100vh"}}>
            <Grid.Column style={{maxWidth: 450}}>
                <Header as="h2" color="violet" textAlign="center">
                Welcome! Login by registering as a Guest below.
                </Header>
                <Form size="large">
                    <Segment stacked>
                        <Button color="violet" size="large" fluid onClick={handleLogin}>
                            Login
                        </Button>
                    </Segment>
                </Form>
            </Grid.Column>
        </Grid>
    );
};