import { useState } from "react";
import { restApiCalls } from "./apiCall";

type APICallNameType = keyof typeof restApiCalls;

const apiCalls = Object.keys(restApiCalls) as APICallNameType[];

export const Rest = () => {
    const [view, setView] = useState<APICallNameType>();
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                {apiCalls.map((apiCallName) => (
                    <button
                        className={view === apiCallName ? "selected" : ""}
                        onClick={() => {
                            setLoading(true);
                            restApiCalls[apiCallName]()
                                .then((data) => {
                                    setData(data);
                                    setLoading(false);
                                })
                                .catch((error) => {
                                    setData(error);
                                    setLoading(false);
                                });
                            setView(apiCallName);
                        }}
                    >
                        {apiCallName}
                    </button>
                ))}
            </div>
            <hr style={{ width: "100%" }} />
            {loading && <div>Loading</div>}
            {!loading && (
                <div>
                    <pre>
                        {typeof data === "string"
                            ? data
                            : JSON.stringify(data, null, 2)}
                    </pre>
                </div>
            )}
        </div>
    );
};
