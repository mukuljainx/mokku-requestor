import { gql, useLazyQuery } from "@apollo/client";

const GET_LOCATIONS = gql`
    query GetLocations {
        locations {
            id
            name
            description
            photo
        }
    }
`;

export const useLocationsQuery = () => useLazyQuery(GET_LOCATIONS);
