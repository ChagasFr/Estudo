const url = "https://jsonplaceholder.typicode.com/post"

const loadingElement = document.querySelector('#loading')
const postsContainer = document.querySelector('#posts-container')

const postPage = document.querySelector("#post");
const postContainer = document.querySelector("#post-container");
const commentContainer = document.querySelector("#comments-container");

const commentForm = document.querySelector("comment-form");
const emailInput = document.querySelector("email");
const bodyInput = document.querySelector("body");

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

    const title = document.querySelector("h1");
    const body = document.querySelector("p");

    title.innerText = dataPost.title;
    body.innerText = dataPost.body;

    console.log(dataComments);

    dataComments.map((comment) => {
        createComment(comment);
    });

    function createComment(comment) {
        const div = document.querySelector("div");
        const email = document.querySelector("h3");
        const commentBody = document.querySelector("p");
    }

    emial.innerText = coment.email;
    commentBody = comment.body;

    div.appendChild(email);
    div.appendChild(commentBody);

    commentsContainer.appendChild(div);
}

if (!postId) {
    getAllPosts();
} else {
    getPost(postId);

    // add event to comment form
    commentForm.addEventListener("Submit", (e) => {
        e.preventDefault();

        let comment = {
            email: emailInput.value,
            body: bodyInput.value
        };

        comment = JSON.stringify(comment);

        postComment(comment);
    })
}