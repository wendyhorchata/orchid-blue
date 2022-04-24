const express = require('express');
const router = express.Router();
const Product = require('../models/flowers');
const ejs = require('ejs')


//Index
router.get('/flowers', (req, res) => {
	try{
		 Product.find({}, (err, products) => {
		if (err) console.log(err);
		ejs.renderFile('./views/index.ejs', {allProducts: products}, {}, function (err, str) {
			if (err) console.log(err);
				if (err) res.sendStatus(500)
			else res.send(str)
		})
	}) } catch (err) {console.error (err) }
})

// New
router.get('/flowers/new', (req, res) => {
	ejs.renderFile('./views/new.ejs', {}, {}, function (err, str) {
		if (err) console.log(err);
		if (err) res.sendStatus(500)
		else res.send(str)
	})
});

//Show
router.get('/flowers/:id', (req, res) => {
	Product.findById(req.params.id, (err, product) => {
		if (err) console.log(err);
		ejs.renderFile('./views/show.ejs', {productObj: product,}, {}, function (err, str) {
			if (err) console.log(err);
				if (err) res.sendStatus(500)
			else res.send(str)
		}) 
	});
});

//Create
router.post('/flowers', (req, res) => {
	Product.create(req.body, (err, product) => {
		if (err) console.log(err);
		console.log(product);
		res.redirect('/flowers');
	});
});

//Delete
router.delete('/flowers/:id', (req, res) => {
	Product.findByIdAndRemove(req.params.id, (err, product) => {
		if (err) console.log(err);
		console.log(product);
		res.redirect('/flowers');
	});
});

//Edit
router.get('/flowers/:id/edit', (req, res) => {
	Product.findById(req.params.id, (err, product) => {
		if (err) console.log(err);
		ejs.renderFile('./views/edit.ejs', {productObj: product,}, {}, function (err, str) {
			if (err) console.log(err);
				if (err) res.sendStatus(500)
			else res.send(str)
		}) 
	});
});

//Buy
router.put('/flowers/:id/buy', (req, res) => {
	Product.findById(req.params.id, (err, product) => {
		if (err) console.log(err);
		let originQty = product.qty;

		Product.findByIdAndUpdate(
			req.params.id,
			{ qty: originQty - req.body.qty },
			{ new: true },
			(err, product) => {
				if (err) console.log(err);
				console.log(product);
				res.redirect('/flowers/' + req.params.id);
			}
		);
	});
});

//Update
router.put('/flowers/:id', (req, res) => {
	Product.findByIdAndUpdate(
		req.params.id,
		req.body,
		{ new: true },
		(err, product) => {
			if (err) console.log(err);
			console.log(product);
			res.redirect('/flowers/' + req.params.id);
		}
	);
});


module.exports = router