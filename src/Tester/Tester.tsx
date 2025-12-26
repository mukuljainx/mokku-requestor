import axios from "axios";
import { useState, type FormEvent } from "react";

const methods = ["GET", "POST", "PUT", "DELETE", "PATCH"] as const;

export const Tester = () => {
    const [url, setUrl] = useState("http://demo5488429.mockable.io/a");
    const [method, setMethod] = useState("GET");
    const [body, setBody] = useState("");

    const [data, setData] = useState<unknown>();

    const handleSend = (event: FormEvent) => {
        event.preventDefault();
        axios({
            method,
            url,
            data: body ? JSON.parse(body) : undefined,
        })
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                setData(error.message);
            });
    };

    return (
        <div>
            <h1>Tester</h1>
            <form onSubmit={handleSend}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 12,
                    }}
                >
                    <input
                        data-testid="url-input"
                        value={url}
                        onChange={(event) => setUrl(event.target.value)}
                    />
                    <select
                        value={method}
                        name="method"
                        id="method"
                        data-testid="method-input"
                        onChange={(event) => setMethod(event.target.value)}
                    >
                        {methods.map((m) => (
                            <option key={m} value={m}>
                                {m}
                            </option>
                        ))}
                    </select>
                    <textarea
                        data-testid="body-input"
                        rows={10}
                        value={body}
                        onChange={(event) => setBody(event.target.value)}
                    />
                    <button type="submit" data-testid="send-request">
                        Send
                    </button>
                </div>
            </form>
            <hr />
            <div>
                <h2>Response:</h2>
                <pre>
                    {typeof data === "string"
                        ? data
                        : JSON.stringify(data, null, 2)}
                </pre>
            </div>
        </div>
    );
};
