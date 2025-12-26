import { useState } from "react";
import type { ApiCallConfig } from "./apiCall";

export const Rest = ({ apiCalls }: { apiCalls: ApiCallConfig[] }) => {
    const [selectedApi, setSelectedApi] = useState<ApiCallConfig>();
    const [data, setData] = useState<unknown>();
    const [loading, setLoading] = useState(false);

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                {apiCalls.map((apiObject) => (
                    <button
                        key={apiObject.name}
                        className={
                            selectedApi?.name === apiObject.name
                                ? "selected"
                                : ""
                        }
                        onClick={() => {
                            setLoading(true);
                            apiObject
                                .api()
                                .then((data) => {
                                    setData(data);
                                    setLoading(false);
                                })
                                .catch((error) => {
                                    setData(error);
                                    setLoading(false);
                                });
                            setSelectedApi(apiObject);
                        }}
                    >
                        {apiObject.name}
                    </button>
                ))}
            </div>
            <hr style={{ width: "100%" }} />
            <div>
                <h4>Request:</h4>
                url: {selectedApi?.url}
                {selectedApi?.params && (
                    <div>params: {JSON.stringify(selectedApi?.params)}</div>
                )}
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
