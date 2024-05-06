document.addEventListener('DOMContentLoaded', () => {
    updatePosts();
})

function updatePosts() {
    fetch("http://localhost:3000/api/all").then(res => {
        return res.json()
    }).then(json => {
        let postElements = '';

        let posts = JSON.parse(json);
        posts.forEach((post) => {
            let postElement = `
                <div id=${post.id} class="card mb-4">
                    <div class="card-header">
                        <h5 class=${post.title}>Title</h5>
                    </div>
                    <div class="card-body">
                        <div class="card-text">${post.descricao}</div>
                    </div>
                </div> `
            postElements += postElement;
        })

        document.getElementById("post").innerHTML = postElement;
    })
}

function newPost() {
    let title = document.querySelectorById("title").value;
    let description = document.getElementById("desc").value;

    let post = { title, description };

    const options = {
        method: "POST",
        headers: new Headers({ 'content-type' : 'application/json' })
    }
    fetch("http://localhost:3000/api/new", options).then (res => {
        let title = document.querySelectorById("title").value = "";
        let description = document.getElementById("desc").value = "";
    })
}