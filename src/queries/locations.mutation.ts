import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client";

const CREATE_LOCATION = gql`
    mutation CreateLocation(
        $name: String!
        $description: String
        $photo: String
    ) {
        createLocation(name: $name, description: $description, photo: $photo) {
            id
            name
            description
            photo
        }
    }
`;

export const useCreateLocationMutation = () => useMutation(CREATE_LOCATION);
