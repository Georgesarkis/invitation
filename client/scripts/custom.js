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
        },
        WillNotAttend: function(){
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
        },
        ConntactUs:function(){
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
        },
        SendWishes:function(){
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
});