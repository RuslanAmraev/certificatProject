const express = require('express');
const router = express.Router();

const multer = require('multer');
const upload = multer({dest: 'client/public/images/products'})
const path = require('path');
const fs = require('fs');

const Post = require('../modeles/post.js');

const addPostValidation = require('../validation/addPostValidation.js');
const commentValidation = require('../validation/commentValidation.js');
const isEmpty = require('../validation/isEmpty.js');

const moveUploadedFile = function(file, product){
	let tempPath = file.path;
	let fileName = file.originalname;
	let fileExtension = file.originalname.split('.').slice(-1)[0];
	let targetPath = `client/public/images/post/${post._id}`;

	if(!fs.existsSync(targetPath)){
		fs.mkdirSync(targetPath);
	}

	let location = path.resolve(`${targetPath}/${fileName}`);
	fs.renameSync(tempPath, location);

	return `${targetPath}/${fileName}`;

}
	

router.post('/add', (req,res)=>{
	let data = req.body
	let validation = addPostValidation(data)
	let bodyMenu = ''
	if( !validation.isValid ){
		console.log(validation.errors)
		return(res.status(500).send(validation.errors))
	}
	if( data.bodyMenu == 'Седан' || data.bodyMenu == 'Универсал' || data.bodyMenu == 'Купе' || data.bodyMenu == 'Кабриолет' || data.bodyMenu == 'Хэтчбек/лифтбек' || data.bodyMenu == 'Родстер'){
		bodyMenu = '1'
	}
	if( data.bodyMenu == 'Внедорожник' || data.bodyMenu == 'Кроссовер' || data.bodyMenu == 'Пикап' ){
		bodyMenu = '2'
	}	
	if( data.bodyMenu == 'Лимузин' || data.bodyMenu == 'Микровен' || data.bodyMenu == 'Минивен' ||data.bodyMenu == 'Микроавтобус' || data.bodyMenu == 'Фургон' ){
		bodyMenu = '3'
	}


	let info = {
		outside: 	 data.outside,
		optic: 		 data.optic,
		salon: 		 data.salon,
		media: 		 data.media,
		option:  	 data.option,
		addition: 	 data.additionaly,
	}
	
	let infoRes = ''

	if(info){for( key in info ){
		for( key2 in info[key] ){
			if( info[key][key2] != false )
			infoRes = infoRes + info[key][key2] + ', '
		}
	}
}

	infoRes = infoRes.slice(0, -2) + '.'


	let phone = data.contact.phoneNumber
		if(phone[0] == 8){
			phone[0] = 7
		}
		phone = '+' + phone[0] + '(' + phone[1] + phone[2] + phone[3] + ') ' + phone[4] + phone[5] + phone[6] + ' ' + phone[7] + phone[8] + ' ' + phone[9] + phone[10]

	const newPost = new Post({
		city: data.contact.city,
		phone: [phone],
		mark: data.mark,
		model: data.model,
		year: data.year,
		price: data.price,
		engineVolume: data.engineVolume,
		engineType: data.engineType,
		transmission: data.transmission,
		body: data.body,
		color: data.color,
		drive: data.drive,
		custom: data.customs,
		info: infoRes,
		sellerText: data.postText,
		mileage: data.mileage,
		rudder: data.rudder,
		bodyMenu: [bodyMenu],
		seller: data.seller,
		condition: data.condition
	})
	newPost
		.save()
		.then(newPost=>{
			res.status(200).send(newPost)
		})
	.catch(err=>{
	res.status(400).send(err)
	})
})


router.post('/addcomment', (req, res)=>{

	let validation = commentValidation(req.body)
	if( !validation.isValid ){
		return res.status(500).send(validation.errors)
	}

	let postId = req.body.post
	let comment = { comment:req.body.text, user: req.body.user }
	Post
	.findById( postId )
	.then(post =>{
		post.comments.push( comment )
		post.save()
		.then( newPost =>{
			res.status(200).send( newPost )
		})
		.catch( err =>{
			res.status(500).send( {message: err.message} )
		})
	})
	.catch( err =>{
		res.status(500).send( {message: err.message} )
	})
})


router.post('/removecomment', (req, res)=>{
	Post.updateOne({ _id: req.body.postid }, {"$pull": {"comments": {'_id': req.body.target }}}, { safe: true, multi: true}, function(err, obj){})
	Post.findById( req.body.postid )
	.then( post =>{
		res.status(200).send(post)
	})
	.catch(err=>{
		res.status(500).send(err)
	})
})






	// .save((err, newPost) =>{
	// 	if(err){
	// 		res.status(500).send(err)
	// 		console.log(err)
	// 	}else{
	// 		moveUploadedFile(req.file, newPost._id)
	// 		.then(location =>{
	// 			newPost.mainImg = location;
	// 			newPost.save(postWithImage => {
	// 				res.status(200).send(postWithImage)

	// 			})
	// 		})
	// 	}
	// })


router.get('/seller/:id', (req, res)=>{
	Post
	.find({seller: req.params.id})
	.then(post =>{
		res.status(200).send(post)
	})
	.catch(err =>{
		res.status(500).send(err)
	})
})


router.get('/getpost/:id', (req, res)=>{
	Post
	.findById(req.params.id)
	.then(post=>{
		post.views++
		post.save()
		.then( newPost => {
				if( post ){
				res.status(200).send(post)
			}else{
				res.status(400).end()
			}
		})
	})
	.catch(err=>{
		res.status(500).send({message: err.message});
	});
})

router.get('/getHot', (req, res)=>{
	let random = Math.random()
	Post
	.find()
	.limit(10)
	.skip(random)
	.then(adds=>{
		if( adds ){
			res.status(200).send(adds)
		}else{
			res.status(400).end()
		}
	})
	.catch(err=>{
		res.status(500).send({message: err.message});
	});
})

router.post('/findPosts', (req, res)=>{
	let data = req.body
	let query = {}

	if(data.city){
		query.city = data.city
	}
	if(data.mark){
		query.mark = data.mark
	}
	if(data.model){
		query.model = data.model
	}
	if(data.bodyMenu){
		query.bodyMenu = data.bodyMenu
	}
	if(data.body){
		query.body = data.body
	}
	if(data.rudder){
		query.rudder = data.rudder
	}
	if(data.transmission){
		query.transmission = data.transmission
	}
	if(data.drive){
		query.drive = data.drive
	}
	if(data.engineType){
		query.engineType = data.engineType
	}
	if(data.condition){
		query.condition = data.condition
	}
	Post
	.find(query)
	.then(post=>{
		if(post){
			res.status(200).send(post)
		}else{
			res.status(404).end()
		}
	})
	.catch(err=>{
		res.status(500).send({message: err.message})
	})
})

// router.get('/count', (req, res)=>{
// 	Post
// 	.countDocuments()
// 	.then(count=>{
// 		res.status(200).send(count)
// 	})
// 	.catch(err=>{
// 		res.status(500).send({message: err.message})
// 	})
// })

router.get('/all', (req, res)=>{
	Post
	.find()
	.then(post=>{
		if(post){
			res.status(200).send(post)
		}else{
			res.status(404).end()
		}
	})
	.catch(err=>{
		res.status(500).send({message: err.message})
	})
})

module.exports = router;


// router.post('/count', (req, res) =>{
// 	let data = req.body
// 	let query = {}

// 	if(data.city){
// 		query.city = data.city
// 	}
// 	if(data.mark){
// 		query.mark = data.mark
// 	}
// 	if(data.model){
// 		query.model = data.model
// 	}
// 	if(data.body){
// 		query.body = data.body
// 	}
// 	Post
// 	.find(query)
// 	.then(post=>{
// 		if(post){
// 			res.status(200).send(post.length)
// 		}else{
// 			res.status(404).end()
// 		}
// 	})
// })
