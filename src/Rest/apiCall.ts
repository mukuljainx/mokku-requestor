import axios from "axios";

export interface ApiCallConfig {
    url: string;
    params?: Record<string, unknown>;
    body?: unknown;
    api: () => Promise<unknown>;
    name: string;
}

export const apiCallObjects: ApiCallConfig[] = [
    {
        url: "http://localhost:5173/rest/api/test",
        api: () => axios.get("http://localhost:5173/rest/api/test"),
        name: "local-get",
    },
    {
        url: "https://demo5488429.mockable.io/a",
        api: () => axios.get("https://demo5488429.mockable.io/a"),
        name: "api",
    },
    {
        url: "https://test.mokku.app/hello",
        api: () => axios.get("https://test.mokku.app/hello"),
        name: "api-self",
    },
    {
        url: "https://demo5488429.mockable.io/b",
        params: { z: 444, a: 22 },
        body: { message: "hello world" },
        api: () =>
            axios.post("https://demo5488429.mockable.io/b?z=444&a=22", {
                message: "hello world",
            }),
        name: "apiWithQueryParam",
    },
    {
        url: "https://demo5488429.mockable.io/a",
        api: async () => {
            const urlInstance = new URL(
                "/a",
                "https://demo5488429.mockable.io",
            );
            const response = await fetch(urlInstance);
            const json = await response.json();
            return json;
        },
        name: "fetchWithUrlInstance",
    },
    {
        url: "https://demo5488429.mockable.io/a",
        params: { z: 444 },
        api: async () => {
            const request = new Request(
                "https://demo5488429.mockable.io/a?z=444",
                { method: "GET" },
            );
            const response = await fetch(request);
            const json = await response.json();
            return json;
        },
        name: "fetchWithRequestObject",
    },
    {
        url: "https://demo5488429.mockable.io/a",
        api: () => fetch("https://demo5488429.mockable.io/a"),
        name: "fetchApi",
    },
    {
        url: "https://demo5488429.mockable.io/patients/empi/P032/goals/ff2",
        api: () =>
            axios.get(
                "https://demo5488429.mockable.io/patients/empi/P032/goals/ff2",
            ),
        name: "apiDynamic1",
    },
    {
        url: "https://demo5488429.mockable.io/patients/empi/P032/goals/ff2",
        api: () =>
            axios.post(
                "https://demo5488429.mockable.io/patients/empi/P032/goals/ff2?a=2&b=3",
                { test: "data" },
            ),
        name: "apiDynamic1 POST",
    },
    {
        url: "https://demo5488429.mockable.io/patients/empi/P012/goals/ff24",
        api: () =>
            axios.get(
                "https://demo5488429.mockable.io/patients/empi/P012/goals/ff24",
            ),
        name: "apiDynamic2",
    },
    {
        url: "https://demo6210424.mockable.io/409",
        api: () => axios.get("https://demo6210424.mockable.io/409"),
        name: "api409",
    },
    {
        url: "https://demo6210424.mockable.io/404",
        api: () => axios.get("https://demo6210424.mockable.io/404"),
        name: "api404",
    },
    {
        url: "https://demo3101470.mockable.io/events",
        body: { message: "hello world" },
        api: () =>
            axios.post("https://demo3101470.mockable.io/events", {
                message: "hello world",
            }),
        name: "apiPost",
    },
    {
        url: "https://demo3101470.mockable.io/events",
        body: { username: "example" },
        api: async () => {
            const request1 = new Request(
                "https://demo3101470.mockable.io/events",
                {
                    method: "POST",
                    body: JSON.stringify({ username: "example" }),
                },
            );
            const response = await fetch(request1);
            const json = await response.json();
            return json;
        },
        name: "postReqWithRequest",
    },
];

// function api() {
//     return axios.get("https://demo5488429.mockable.io/a");
// }

// function apiWithQueryParam() {
//     return axios.post("https://demo5488429.mockable.io/b?z=444&a=22", {
//         message: "hello world",
//     });
// }

// // with url object
// async function fetchWithUrlInstance() {
//     const urlInstance = new URL("/a", "https://demo5488429.mockable.io");

//     const response = await fetch(urlInstance);
//     const json = await response.json();
//     return json;
// }

// // with Request object
// async function fetchWithRequestObject() {
//     const request = new Request("https://demo5488429.mockable.io/a?z=444", {
//         method: "GET",
//     });

//     const response = await fetch(request);
//     const json = await response.json();
//     return json;
// }

// function fetchApi() {
//     return fetch("https://demo5488429.mockable.io/a");
// }

// function apiDynamic1() {
//     return axios.get(
//         "https://demo5488429.mockable.io/patients/empi/P032/goals/ff2",
//     );
// }

// function apiDynamic2() {
//     return axios.get(
//         "https://demo5488429.mockable.io/patients/empi/P012/goals/ff24",
//     );
// }

// function api409() {
//     return axios.get("https://demo6210424.mockable.io/409");
// }

// function api404() {
//     return axios.get("https://demo6210424.mockable.io/404");
// }

// function apiPost() {
//     return axios.post("https://demo3101470.mockable.io/events", {
//         message: "hello world",
//     });
// }

// async function postReqWithRequest() {
//     const request1 = new Request("https://demo3101470.mockable.io/events", {
//         method: "POST",
//         body: JSON.stringify({ username: "example" }),
//     });

//     const response = await fetch(request1);
//     const json = await response.json();

//     return json;
// }

// // function uploadFile(event) {
// //     event.preventDefault();
// //     const formData = new FormData();
// //     const imageFile = document.querySelector("#file");
// //     if (!imageFile) {
// //         return;
// //     }

// //     formData.append("image", imageFile.files[0]);
// //     return axios.post("upload_file", formData, {
// //         headers: {
// //             "Content-Type": "multipart/form-data",
// //         },
// //     });
// // }

// export const restApiCalls = {
//     api,
//     api404,
//     api409,
//     apiWithQueryParam,
//     fetchWithUrlInstance,
//     fetchWithRequestObject,
//     fetchApi,
//     apiDynamic1,
//     apiDynamic2,
//     apiPost,
//     postReqWithRequest,
// };
