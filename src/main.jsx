import ReactDOM from "react-dom/client";

// import axios from "axios"

// const promise = axios.get("http://localhost:3001/employees")
// console.log(promise)
// promise.then(response => {
//     console.log(response)
// })

// axios
//     .get("http://localhost:3001/employees")
//     .then(response => {
//         const employees = response.data
//         console.log(employees)
//     })

// const promise2 = axios.get("http://localhost:3001/foobar")
// console.log(promise2)

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
