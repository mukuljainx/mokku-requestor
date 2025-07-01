import axios from "axios";

function api() {
    return axios.get("http://demo5488429.mockable.io/a");
}

function apiWithQueryParam() {
    return axios.post("http://demo5488429.mockable.io/b?z=444&a=22", {
        message: "hello world",
    });
}

// with url object
async function fetchWithUrlInstance() {
    const urlInstance = new URL("/a", "http://demo5488429.mockable.io");

    const response = await fetch(urlInstance);
    const json = await response.json();
    return json;
}

// with Request object
async function fetchWithRequestObject() {
    const request = new Request("http://demo5488429.mockable.io/a?z=444", {
        method: "GET",
    });

    const response = await fetch(request);
    const json = await response.json();
    return json;
}

function fetchApi() {
    return fetch("http://demo5488429.mockable.io/a");
}

function apiDynamic1() {
    return axios.get(
        "http://demo5488429.mockable.io/patients/empi/P032/goals/ff2",
    );
}

function apiDynamic2() {
    return axios.get(
        "http://demo5488429.mockable.io/patients/empi/P012/goals/ff24",
    );
}

function api409() {
    return axios.get("http://demo6210424.mockable.io/409");
}

function api404() {
    return axios.get("http://demo6210424.mockable.io/404");
}

function apiPost() {
    return axios.post("https://demo5468585.mockable.io/events", {
        message: "hello world",
    });
}

async function postReqWithRequest() {
    const request1 = new Request("https://demo5468585.mockable.io/events", {
        method: "POST",
        body: JSON.stringify({ username: "example" }),
    });

    const response = await fetch(request1);
    const json = await response.json();

    return json;
}

// function uploadFile(event) {
//     event.preventDefault();
//     const formData = new FormData();
//     const imageFile = document.querySelector("#file");
//     if (!imageFile) {
//         return;
//     }

//     formData.append("image", imageFile.files[0]);
//     return axios.post("upload_file", formData, {
//         headers: {
//             "Content-Type": "multipart/form-data",
//         },
//     });
// }

export const restApiCalls = {
    api,
    api404,
    api409,
    apiWithQueryParam,
    fetchWithUrlInstance,
    fetchWithRequestObject,
    fetchApi,
    apiDynamic1,
    apiDynamic2,
    apiPost,
    postReqWithRequest,
};
