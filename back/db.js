
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const formidable = require('formidable');
const db = require("./models");
const { Filiere, Niveau, Ue, Enseignant } = require('./models')
const path = require('path');
const dotenv = require("dotenv")
app.use(cors())
app.use(express.json())

dotenv.config();
 mongoose.connect('mongodb://localhost:27017/gess-app')
const connectDB = async () =>{
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI,{
			useUnifiedTopology:true,
			useNewUrlParser: true,
		})
		console.log(`MongoDB connected ${conn.connection.host}`)
	} catch (error) {
		console.log(`Error: ${error.message}`)
		process.exit(1)
	}
}

//connectDB()

const createNiveau = function(filiereId, niveau) {
	return db.Niveau.create(niveau).then(docNiveau => {
	  console.log("\n>> Created Niveau:\n", docNiveau);
	  return db.Filiere.findByIdAndUpdate(
		filiereId,
		{ $push: { niveau: docNiveau._id } },
		{ new: true, useFindAndModify: false }
	  );
	});
  };

  const createUe = function(niveauId, ue) {
	return db.Ue.create(ue).then(docUe => {
	  console.log("\n>> Created Niveau:\n", docUe);
	  return db.Niveau.findByIdAndUpdate(
		niveauId,
		{ $push: { ue: docUe._id } },
		{ new: true, useFindAndModify: false }
	  );
	});
  };

  		
  const createEnseignant = function(filiereId, enseignant) {
	return db.Enseignant.create(enseignant).then(docEnseignant => {
	  console.log("\n>> Created Enseignant:\n", docEnseignant);
	  return db.Filiere.findByIdAndUpdate(
		filiereId,
		{ $push: { enseignant: docEnseignant._id } },
		{ new: true, useFindAndModify: false }
	  );
	});
  };


  const createFiliere = function(filiere) {
	return db.Filiere.create(filiere).then(docFiliere => {
	  console.log("\n>> Created Filiere:\n", docFiliere);
	  return docFiliere;
	});
  };




const run = async function() {
	var filiere = await createFiliere({
	  nom: "mat"
	});
	filiere = await createNiveau(filiere._id, {
	  nom: "l3"
	});
	console.log("\n>> Filiere:\n", filiere);
	filiere = await createEnseignant(filiere._id, {
		nom: "Adamou",
		prenom: "Hamza",
		email: "hamza@hamza.com"
	  });
	  filiere = await createEnseignant(filiere._id, {
		nom: "Thomas",
		prenom: "Messi",
		email: "messi@messi.com"
	  });
	  filiere = await createEnseignant(filiere._id, {
		nom: "Tsopze",
		prenom: "Norbert",
		email: "norbert@nobert.com"
	  });
	  filiere = await createEnseignant(filiere._id, {
		nom: "Domga",
		prenom: "Rodrigue",
		email: "domga@domga.com"
	  });
	  
	  console.log("\n>> Filiere:\n", filiere);
	filiere = await createNiveau(filiere._id, {
	  nom: "l2"
	});
	console.log("\n>> Filiere:\n", filiere);
  };
  
 
 // run()



app.post('/api/register', async (req, res) => {
	console.log(req.body)
	try {
		const newPassword = await bcrypt.hash(req.body.password, 10)
		await User.create({
			name: req.body.name,
      		surname: req.body.surname,
      		matricule: req.body.matricule,
			email: req.body.email,
		  	filiere: req.body.filiere,
      		niveau: req.body.niveau,
			password: newPassword,
			role:"etudiant"
		})
		res.json({ status: 'ok' })
	} catch (err) {
		res.json({ status: 'error', error: 'Duplicate email Or Matricule' })
	}
})


app.post('/api/ajouter/enseignant', async (req, res) => {
	console.log(req.body)
	try {
		const newPassword = await bcrypt.hash(req.body.password, 10)
		await Enseignant.create({
			nom: req.body.nom,
      		prenom: req.body.prenom,
			email: req.body.email,
			password: newPassword,
			role:"enseignant"
		})
		res.json({ status: 'ok' })
	} catch (err) {
		res.json({ status: 'error', error: 'Duplicate email Or Matricule' })
	}
})


app.post('/api/create/filiere',async (req,res)=>{
	console.log(req.body)
	try{
		await Filiere.create({
			nom : req.body.nom
		})
		res.json({status:'ok'})
	}catch(err){
		res.json({status:'error',error:'Duplicate Filiere'})
		console.log(err.message)
	}
})

app.post('/api/create/niveau',async (req,res)=>{
	console.log(req.body)
	try{
		var filiere = await Filiere.findOne({nom:req.body.name})
		console.log(filiere._id)
		console.log(req.body.newRowStr)
		  filiere = await createNiveau(filiere._id, {
			nom: req.body.newRowStr
		  });
		res.json({status:'ok'})
	}catch(err){
	res.json({status:'error', error:'Duplicate Niveau in this Filiere'})
	console.log(err.message)
	}
})

app.post('/api/create/ue',async(req,res)=>{
	try{
		var niveau =await Niveau.findOne({nom:req.body.niveau})
		niveau = await createUe(niveau._id,{
			code: req.body.code,
			intitule: req.body.intitule,
			niveau:niveau._id
		})
		res.json({status:'ok'})
	}catch(err){
		res.json({status:'error', error:'Duplicate Ue in this Niveau'})
		console.log(err.message)
	}
})

app.post('/api/delete/ue',async(req,res)=>{
	try {
		db.Ue.findOneAndRemove({code: req.body.code },
			function (err, docs) {
				if (err){
					console.log(err)
				}
				else{
					console.log("Removed Ue : ", docs);
				}
});
		res.json({status:'ok'})
	} catch (error) {
	res.json({status:'error', error:'The Ue is node Found'})
	console.log(error.message);	
	}
})

app.post('/api/create/assigne',async(req,res)=>{
	try{
		var ue = await db.Ue.findOne({code:req.body.code})
		var enseignant = await Enseignant.findOne({nom:req.body.nom})
		const query = { "code": req.body.code  };
		const update = {
			"$set": {
			  enseignant1:enseignant._id
			}
		  };
		  const options = { returnNewDocument: true };
		await db.Ue.findOneAndUpdate(query,update,options) 
		const query1 = { "nom": req.body.nom  };
		const update1 = {
			"$set": {
			  ue:ue._id
			}
		  };
		await Enseignant.findOneAndUpdate(query1,update1,options)
		res.json({status:'ok'})
	}catch(error){
		res.json({status:'erro', error:'Some Error Occur'})
		console.log(error.message);
	}
})

app.post('/api/login', async (req, res) => {
	let user = await User.findOne({
		email: req.body.email,
	})
	let enseignant = await Enseignant.findOne({
		email: req.body.email,
	})
	if (!user) {
		if(!enseignant){
			return { status: 'error', error: 'Invalid login' }
		}
		user=enseignant
	}
	const isPasswordValid = await bcrypt.compare(
		req.body.password,
		user.password
	)

	if (isPasswordValid) {
		const token = jwt.sign(
			{
				name: user.name,
				email: user.email,
			},
			'secret123'
		)

		return res.json({ status: 'ok', user: token })
	} else {
		return res.json({ status: 'error', user: false })
	}
})

app.get('/api/quote', async (req, res) => {
	const token = req.headers['x-access-token']

	try {
		const decoded = jwt.verify(token, 'secret123')
		const email = decoded.email
		const user = await User.findOne({ email: email })

		return res.json({ status: 'ok', quote: user.quote })
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'invalid token' })
	}
})

app.get('/api/create/filiere',async(req, res)=>{
	try{
		const filiere = await Filiere.find({})
		return res.json({filiere:filiere})
	}catch(error){
		console.log(error)
	}
})

app.get('/api/create/niveau',async(req,res)=>{
	try{
		const niveau = await Niveau.find({})
		return res.json({niveau:niveau})
	}catch(err){
		console.log(err.message);
	}
})

app.get('/api/create/ue',async(req,res)=>{
	try{
		const ue = await Ue.find({})
		return res.json({ue:ue})
	}catch(err){
		console.log(err.message);
	}
})

app.get('/api/create/enseignant',async(req,res)=>{
	try{
		const enseignant = await Enseignant.find({})
		return res.json({enseignant:enseignant})
	}catch(err){
		console.log(err.message);
	}
})

app.post('/api/quote', async (req, res) => {
	const token = req.headers['x-access-token']

	try {
		const decoded = jwt.verify(token, 'secret123')
		const email = decoded.email
		await User.updateOne(
			{ email: email },
			{ $set: { quote: req.body.quote } }
		)

		return res.json({ status: 'ok' })
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'invalid toke' })
	}
})


const PORT = process.env.PORT || 1337
app.listen(PORT, () => {
	console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}`)
})
