import "./App.css";
import { Link, Route, Routes } from "react-router";
import { GraphQL } from "./GraphQL";
import { Rest } from "./Rest";

function App() {
    return (
        <div>
            <Routes>
                <Route
                    path="/"
                    element={
                        <div style={{ display: "flex", gap: 8 }}>
                            <Link to="/rest">
                                <div
                                    style={{ padding: 12, border: "1px solid" }}
                                >
                                    <h2>REST</h2>
                                </div>
                            </Link>
                            <Link to="/graphql">
                                <div
                                    style={{ padding: 12, border: "1px solid" }}
                                >
                                    <h2>GraphQL</h2>
                                </div>
                            </Link>
                        </div>
                    }
                />
                <Route path="/graphql" element={<GraphQL />} />
                <Route path="/rest" element={<Rest />} />
            </Routes>
        </div>
    );
}

export default App;
