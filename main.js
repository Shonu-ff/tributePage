var quote = document.getElementById("quote");

quote.addEventListener("mouseover", function(){
  quote.innerHTML = "CLICK TO LISTEN";
})

quote.addEventListener("mouseleave", function(){
  quote.innerHTML = '<h3>' + '" Kyle\'s fingers be silver, Jacks voice then be gold' +
          '<p>' + 'But lest you think we\'re vain' + '</p>' +
            'We know you\'re all robots and we don\'t care' +
          '<p>' + 'Tenacious D,' + '</p>' + 'we reign! "' + '</h3>'
 })

quote.addEventListener("click", function() {
   window.open("https://soundcloud.com/tenaciousd/history", "_blank");
});
