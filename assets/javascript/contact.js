function handleSendEmail (event) {
  event.preventDefault ()
  var formData = { 
    email: $("#youremail").val().trim(),
    name: $("#name").val().trim(),
    message: $("#message").val().trim(),
    _after: "https://debmeade.github.io/"
  }
  console.log(formData);

  fetch('https://mailthis.to/DebbieMeade', 
  {
    method: "POST",
    body: formData
  })
  .then(function() {
    // window.open("https://mailthis.to/confirm")
    location.href = "https://mailthis.to/confirm"
  });
}

$("#emailForm").on("submit", handleSendEmail)

// $.post('https://mailthis.to/test@example.com', {
//   email: 'foo@bar.co',
//   _subject: 'hi!',
//   message: 'Test'
// }).then(function () {
//   location.href = 'https://mailthis.to/confirm'
// });