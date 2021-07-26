const Authors = require("../controllers/Authors.controller");

module.exports = app => {
    app.get('/api/authors', Authors.getAll);
    app.post('/api/authors', Authors.create);
    app.get("/api/authors/:_id", Authors.getOne);
    app.delete('/api/authors/:_id', Authors.delete);
    app.put("/api/authors/:_id", Authors.update);
}