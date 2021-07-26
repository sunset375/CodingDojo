const Jokes = require("../controllers/joke.controller")

module.exports = app => {
    app.get("/api/jokes", Jokes.getAll);
    app.post("/api/jokes", Jokes.create);
    app.delete("/api/jokes/:_id", Jokes.delete);
    app.get("/api/jokes/random",Jokes.random);
    app.get("/api/jokes/:_id",Jokes.getOne);
}