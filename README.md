# ![🎬_Movie_Rating_App](https://github.com/user-attachments/assets/df8b11bd-786a-4fa1-b9f8-56d84d1415e1)

![Static Badge](https://img.shields.io/badge/Language-React-blue?style=plastic) <br/>
This web sites permits us to rate the popular movies.The data is fetched from [The Movie DataBase](https://developer.themoviedb.org/docs/getting-started) (TMDB) API's.

## Usage

- First you need to install the depedencies with `npm install`.
- Make a new account [(TMDB)](https://www.themoviedb.org/signup), get an API key, and assign it to a `VITE_API_KEY` variable in a `.env` file.
- Then, you can now run and log in with the **"Log in"** button; when clicked a `guest_session_id` is given from the API to the local storage (The id is deleted if not used within 60 minutes).
- After that, you can scroll down to see the popular movies available at the moment, view their details, and, more importantly, rate them as you wish. Click on 'Rate' to save your ratings, which will be displayed on the Rated page.
- Finally you can log out by using **"Log out"** button located at the top-right corner and end the session (the `guest_session_id` will be deleted).
<br/>

### 1.Page (Log in):

<img width="1440" alt="MovieR9" src="https://github.com/user-attachments/assets/7ffcf93f-9dc2-47d9-8aa0-fbb2f7fffda1">

### 2.Home Page (Movies / TV Shows):

<img width="1440" alt="MovieR1" src="https://github.com/user-attachments/assets/ac5336e6-2e29-45e5-a8e9-2e4e8d168abc">

#### -To see the details about the movie/tv show you just need to click on it 

#### -Movie Details:

<img width="1440" alt="MovieR7" src="https://github.com/user-attachments/assets/23911a1a-0c2e-44d3-aeda-23017dfd8966">

#### -TV Shows Details:

<img width="1440" alt="MovieR8" src="https://github.com/user-attachments/assets/30145ae8-46cd-4897-9579-391c44a88ea8">

### 3.Rated page (Movies / TV Shows)::

<img width="1440" alt="MovieR2" src="https://github.com/user-attachments/assets/7058afd2-ad89-49b6-93d8-fe23f896127c">

#### -You can see your rating at the bottom of the card.

<img width="1440" alt="MovieR3" src="https://github.com/user-attachments/assets/9e3565df-a6e8-4c3a-8158-a0344efd2087">

## Features

- React hooks (useState, useQuery,...)
- Semantic-Ui css/react
- React-toastify
- React-Query
- React-router-dom
- Typescript


