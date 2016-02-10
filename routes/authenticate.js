/*Copyright 2016 Wipro Limited, NIIT Limited

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

This code is written by Prateek Reddy Yammanuru, Shiva Manognya Kandikuppa, Uday Kumar Mydam, Nirup TNL, Sandeep Reddy G, Deepak Kumar*/

var express = require('express');
var router = express.Router();
var passport=require('passport');
//require('.././localAuth');
module.exports = function(){
console.log("in authenticate");
	//sends successful login state back to angular


	router.get('/success', function(req, res){
		console.log("called auth success");
		console.log(req.user);
		req.session.user=req.user;
		res.send({state: 'success', user: req.user ? req.user : null});
	});

	router.get('/google/success',function(req,res) {
		// console.log("*****************************************************************");
		// console.log(req);
		// console.log(res);
		// console.log("*****************************************************************");
		res.cookie('google',req.user.google.id);
		res.redirect("http://qt2.stackroute.in:8080/#/");
	});

	//sends failure login state back to angular
	router.get('/failure', function(req, res){
		res.send({state: 'failure', user: null, message: "Invalid username or password"});
	});

	//log in
	router.post('/login',
	passport.authenticate('login', {
		successRedirect: '/auth/success',
		failureRedirect: '/auth/failure'
	}));

	//sign up
	router.post('/signup', passport.authenticate('signup', {
		successRedirect: '/auth/success',
		failureRedirect: '/auth/failure'
	}));

	//log out
	router.get('/signout', function(req, res) {
		req.logout();
		res.send({state:'logout',message:"Logged Out Successfully"});
	});

	router.get('/google', passport.authenticate('google', { scope : ['profile', 'email'] }));

    // the callback after google has authenticated the user
  router.get('/google/callback',
            passport.authenticate('google', {
                  failureRedirect : '/',
									successRedirect: '/auth/google/success'}
									));

	return router;

}
