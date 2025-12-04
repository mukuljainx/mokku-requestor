import { useState } from "react";
import { useLocationsQuery } from "../queries/locations";
import { useMoviesQuery } from "../queries/movies";
import { useCreateLocationMutation } from "../queries/locations.mutation";

export const GraphQL = () => {
    const [view, setView] = useState<
        "movies" | "locations" | "createLocation"
    >();
    const [fetchMovies, movies] = useMoviesQuery();
    const [fetchLocation, locations] = useLocationsQuery();
    const [createLocation, creationData] = useCreateLocationMutation();

    let data;
    switch (view) {
        case "locations": {
            data = locations;
            break;
        }
        case "movies": {
            data = movies;
            break;
        }
        case "createLocation": {
            data = creationData;
            break;
        }
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ display: "flex", gap: 12 }}>
                <button
                    className={view === "movies" ? "selected" : ""}
                    onClick={() => {
                        fetchMovies();
                        setView("movies");
                    }}
                >
                    Get Movies
                </button>
                <button
                    className={view === "locations" ? "selected" : ""}
                    onClick={() => {
                        fetchLocation();
                        setView("locations");
                    }}
                >
                    Get Locations
                </button>
                <button
                    className={view === "createLocation" ? "selected" : ""}
                    onClick={() => {
                        createLocation();
                        setView("createLocation");
                    }}
                >
                    Create Location
                </button>
            </div>
            <hr style={{ width: "100%" }} />
            {data?.loading && <div>Loading</div>}
            {!data?.loading && (
                <div>
                    <pre>
                        {JSON.stringify(data?.data || data?.error, null, 2)}
                    </pre>
                </div>
            )}
        </div>
    );
};
