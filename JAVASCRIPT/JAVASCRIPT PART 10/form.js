// let form =document.querySelector("form");

// form.addEventListener("submit", function(event)
// {
//     event.preventDefault();
//     // alert("form submitted")
//     console.dir(form);
//     let user =  this.elements[0];
//     let pass =this.elements[1];

//     console.log(user.value);
//     console.log(pass.value);

//     alert(`Hi  ${user.value}, your password is set to ${pass.value}`);
    
//     // let inp = document.querySelector("input");
//     // console.log(inp);
//     // console.dir(inp);
//     // console.log(inp.value)
// });


// More Events

let form = document.querySelector("form");

form.addEventListener("submit", function (event){
    event.preventDefault();
}); 

let user = document.querySelector("#user");

user.addEventListener("change", function (){
    console.log("change event");
    console.log("final value = ", this.value);
});

user.addEventListener("input", function (){
    console.log("input event");
    console.log("final value = ", this.value);
});
