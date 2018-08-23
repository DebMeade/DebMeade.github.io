console.log("script loaded");
$(".portfolioLink").on("click", function(event) {
    console.log(this.dataset.topic);
    window.location="./contact.html";
})