//import swal from 'sweetalert';
//import { ftruncate } from 'fs';

var app = new Vue({
    el: "#invitations",
    data:{
        name:"",
        email:"",
        Number:"",
        fname:"",
        lname:"",
        email:"",
        tel:"",
        subject:"",
        message:"",
        wishes:""
    },
    methods: {
        WillAttend: function() {
            if(this.name.length == 0){
                swal("Your name is missing!", "Please write your first and last name.", "error");
            }else if(this.Number.length == 0){
                swal("Number of attendance is missing!", "Please write number of people will attend.", "error");
            }else{
                axios
                .post("/api/rsvp", {
                name: this.name,
                email: this.email,
                numGuests: this.Number,
                RSVPanswer: "true",
                })
                .then(function(response) {
                console.log(response);
                swal("Thank you!", "Thank you for your response.", "success")
                })
                .catch(function(error) {
                console.log(error.response);
                });
            }
        },
        WillNotAttend: function(){
            if(this.name.length == 0){
                swal("Your name is missing!", "Please write your first and last name.", "error");
            }else{
                axios
                .post("/api/rsvp", {
                name: this.name,
                email: this.email,
                numGuests: this.Number,
                RSVPanswer: "false",
                })
                .then(function(response) {
                console.log(response);
                swal("Thank you!", "Thank you for your response.", "success")
                })
                .catch(function(error) {
                console.log(error.response);
                });
            }	
        },
        ConntactUs:function(){
            if(this.fname.length == 0){
                swal("First name is missing!", "Please write your first name.", "error");
            }else if(this.lname.length == 0){
                swal("Last name is missing!", "Please write your last name.", "error");
            }else if(this.email.length == 0 && this.tel.length == 0){
                swal("email or telephone number is missing!", "Please write your email or telephone number.", "error");
            }else if(this.message.length == 0){
                swal("Message is missing!", "Please write some message.", "error");
            }else{
                axios
                .post("/api/contact", {
                    FirstName: this.fname,
                    LastName: this.lname,
                    Email: this.email,
                    tel: this.tel,
                    Subject: this.subject,
                    Message: this.message
                })
                .then(function(response) {
                console.log(response);
                swal("Thank you!", "We have recived your massage.", "success")
                })
                .catch(function(error) {
                console.log(error.response);
                });
            }
        },
        SendWishes:function(){
            if(this.fname.length == 0){
                swal("First name is missing!", "Please write your first name.", "error");
            }else if(this.lname.length == 0){
                swal("Last name is missing!", "Please write your last name.", "error");
            }else if(this.wishes.length == 0){
                swal("Wishes is missing!", "Please write some wishes.", "error");
            }else{
                axios
                .post("/api/wishes", {
                    FirstName: this.fname,
                    LastName: this.lname,
                    Wishes: this.wishes,
                })
                .then(function(response) {
                console.log(response);
                swal("Thank you!", "Thank you for your worm wishes.", "success")
                })
                .catch(function(error) {
                console.log(error.response);
                });
            }
        }
    }
});