import { gql, useLazyQuery } from "@apollo/client";

const GET_MOVIES = gql`
    query GetMovies {
        movies {
            id
            name
            description
            photo
        }
    }
`;

export const useMoviesQuery = () => useLazyQuery(GET_MOVIES);
