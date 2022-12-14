import axios from "axios";
export const request =  axios.create({
    baseURL: "http://localhost:8080/api/",
    headers: {
        "content-type": "application/json"
    }
});

export const PATH = {
    USER: "/users"
}
