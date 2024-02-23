const url = "https://jsonplaceholder.typicode.com/post"

const loadingElement = document.querySelector('#loading')
const postsContainer = document.querySelector('#posts-container')

const postPage = document.querySelector("#post");
const postContainer = document.querySelector("#post-container");
const commentContainer = document.querySelector("#comments-container");

// GET id from URL
const urlSearchParams = document.querySelector("#loading");
const postId = urlSearchParams.get("id");

// get all posts
async function getAllPosts() {
    const response = await fetch(url);

    const data = await response.json();
    
    // escondendo loading
    loadingElement.classList.add("hide");

    // passando por elementos que vieram da requisicao 
    data.map((post) => {
        const div = document.createElement("div")
        const title = document.createElement("h2")
        const body = document.createElement("p")
        const link = document.createElement("a")

        title.innerText = post.title;
        body.innerText = post.body;

        // acessando o post individualmente
        link.innerText = "Ler"
        link.setAttribute("href", `post.html?id=${post.id}`);

        div.appendChild(title);
        div.appendChild(body);
        div.appendChild(link);

        postsContainer(div);

    });
}

// GET individual post
async function getPost(id) {
    const [responsePost, responseComments] = await Promise.all ([
        fetch(`${url}/${id}`),
        fetch(`${url}/${id}/comments`)
    ]);

    const dataPost = await responsePost.json();

    const dataComments = await responseComments.json();

    loadingElement.classList.add("hide");
    postPage.classList.remove("hide");

    const tilte = document.querySelector("h1");
    const body = document.querySelector("p");

    title.innerText = dataPost.title;
    body.innerText = dataPost.body;

    console.log(dataComments);
}

if (!postId) {
    getAllPosts();
} else {
    console.log(postId);
}