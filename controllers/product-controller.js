const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = (req,res,next) =>{

    Product
    .find({active: true},"title  slug price")
    .then(data => {
        res.status(200).send(data);
    }).catch(e =>{
        res.status(400).send( e);
    });
};


exports.getBySlug = (req,res,next) =>{

    Product
    .findOne( {
            slug : req.params.slug,
            active: true},"title slug price description tags")
    .then(data => {
        res.status(200).send(data);
    }).catch(e =>{
        res.status(400).send( e);
    });
};


exports.getByTags = (req,res,next) =>{

    Product
    .findOne( {
            tags : req.params.tags,
            active: true},"title slug price description tags")
    .then(data => {
        res.status(200).send(data);
    }).catch(e =>{
        res.status(400).send( e);
    });
};

exports.getById = (req,res,next) =>{

    Product
    .findById(req.params.id
          )
    .then(data => {
        res.status(200).send(data);
    }).catch(e =>{
        res.status(400).send( e);
    });
};

exports.post = (req,res,next) =>{

    var product = new Product(req.body);

    product
    .save()
    .then(x  => {
        res.status(201).send({
            message : 'Produto cadastrado com sucesso!'
        });
    }).catch(e =>{
        res.status(400).send({
            message : 'Falha ao cadastrar o produto!',
            data: e
        });
    });
};



exports.put = (req,res,next) =>{

    Product
    .findByIdAndUpdate(req.params.id,{
        $set:{
            title : req.body.tite,
            description : req.body.description,
            price: req.body.price,
            slug: req.body.slug
        }
    })
    .then(x  => {
        res.status(200).send({
            message : 'Produto atualizado com sucesso!'
        });
    }).catch(e =>{
        res.status(400).send({
            message : 'Falha ao atualizado o produto!',
            data: e
        });
    });
};

exports.delete = (req,res,next) =>{
    Product
    .findOneAndRemove(req.body.id)
    .then(x  => {
        res.status(200).send({
            message : 'Produto deletado com sucesso!'
        });
    }).catch(e =>{
        res.status(400).send({
            message : 'Falha ao deletar o produto!',
            data: e
        });
    });
};