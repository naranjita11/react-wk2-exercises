// import axios with configuration
import axios from "./axios";

// 1. Use console.log() to output an array with all of your article data from the API:

// axios.get("/articles").then(({ data }) => {
//     console.log(data.data);
// });


// 2. Create a new article using axios and then console.log() its ID

// axios.post("/articles", {
//     title: "Field Mice",
//     content: "They're little and cute and dinky.",
//     tags: ["mice", "cute"],
//     }).then(({ data }) => {
//             console.log(data.data.id);
//         });

// 3. Fetch one of your articles from the API and console.log() it:

axios.get("/articles/45").then(({ data }) => {
    console.log(data.data);
});

// 4. Add a new tag to one of your articles and console.log() the tags array from the response:

// axios.patch("/articles/45", {tags: ...tags, "cute"}).then(({ data }) => {
//     console.log(data.data.tags);
// });

