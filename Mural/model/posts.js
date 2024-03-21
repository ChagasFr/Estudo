module.exports = {
    posts: [
        {
            id: "kaldjhalkjhdslkjas",
            title: "Teste do mural",
            description: "Descricao"
        },
    ],

    getAll() {
        return this.posts;
    }

    newPosts(title, description) {
        this.posts.push({ id: generateID(), title, description });
    }
}

// gerando Id
function generateID() {
    return Math.random().toString(36).substring(2,9);
}