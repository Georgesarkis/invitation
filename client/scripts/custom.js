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
                swal("Please write your first and last name.");
            }else if(this.Number.length == 0){
                swal("Please write number of people will attend.");
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
                swal("Thank you for your response.");
                })
                .catch(function(error) {
                console.log(error.response);
                });
            }
        },
        WillNotAttend: function(){
            if(this.name.length == 0){
                swal("Please write your first and last name.");
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
                swal("Thank you for your response.");
                })
                .catch(function(error) {
                console.log(error.response);
                });
            }	
        },
        ConntactUs:function(){
            if(this.fname.length == 0){
                swal("Please write your first name.");
            }else if(this.lname.length == 0){
                swal("Please write your last name.");
            }else if(this.email.length == 0 && this.tel.length == 0){
                swal("Please write your email or telephone number.");
            }else if(this.message.length == 0){
                swal("Please write some message.");
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
                swal("We have recived your massage!Thank you.");
                })
                .catch(function(error) {
                console.log(error.response);
                });
            }
        },
        SendWishes:function(){
            if(this.fname.length == 0){
                swal("Please write your first name.");
            }else if(this.lname.length == 0){
                swal("Please write your last name.");
            }else if(this.wishes.length == 0){
                swal("Please write some wishes.");
            }else{
                axios
                .post("/api/wishes", {
                    FirstName: this.fname,
                    LastName: this.lname,
                    Wishes: this.wishes,
                })
                .then(function(response) {
                console.log(response);
                swal("Thank you for your worm wishes");
                })
                .catch(function(error) {
                console.log(error.response);
                });
            }
        }
    }
});