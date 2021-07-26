const Author = require("../models/Authors.models");

class AuthorController{
    getAll(req, res){
        Author.find({})
            .then(Authors => res.json(Authors))
            .catch(err => res.json(err));
    }
    
    create(req, res){
        const newAuthor = new Author(req.body);
        newAuthor.save()
        .then(()=> res.json({msg: "Author added"}))
        .catch(err => res.json(err));
    }

    delete(req, res){
        Author.findOneAndDelete({_id: req.params._id})
            .then(() => res.json({msg: "Deleted "}))
            .catch(err => res.json(err));
    }

    getOne(req, res){
        Author.findOne({_id: req.params._id})
            .then(author => res.json(author))
            .catch(err => res.json(err));
    }
    
    update(req, res){
        Author.findOneAndUpdate({_id: req.params._id}, req.body)
            .then(() => res.json({msg: "Updated "}))
            .catch(err => res.json(err));
    }
}

module.exports = new AuthorController();