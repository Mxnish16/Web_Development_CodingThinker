console.log($("h1"));

$("h1").css({
  color: "white",
  backgroundColor: "blue",
  border: "2px solid black",
  textAlign: "center",
  borderRadius: "22px"
});

console.log($("h2").text("welcome to my web")); // this is for inserting a new text.

console.log($("input").attr("type",'password')); 

$('button').click(() => {
    // console.log('doneee');
    // $('h1').fadeOut() // this is for individual.
    // $('p').fadeToggle() // this is for both fadeIn & fadeOut.
})

// $('#fadeIn').click(() => {
//     $('h1').fadeIn() // this is for individual.
// })

$("div").css({
    color: "white",
    backgroundColor: "green",
    border: "2px solid black",
    textAlign: "center",
    marginTop: "50px",
    borderRadius: "22px"
  });
  

$('#fadeOut').click(() => {
    $('p').fadeOut()
})

$('#fadeIn').click(() => {
    $('p').fadeIn()
})

