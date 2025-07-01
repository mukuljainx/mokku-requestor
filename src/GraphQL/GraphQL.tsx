import { useState } from "react";
import { useLocationsQuery } from "../queries/locations";
import { useMoviesQuery } from "../queries/movies";

export const GraphQL = () => {
    const [view, setView] = useState<"movies" | "locations">();
    const [fetchMovies, movies] = useMoviesQuery();
    const [fetchLocation, locations] = useLocationsQuery();

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
