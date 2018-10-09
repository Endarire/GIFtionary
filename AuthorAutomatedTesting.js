let Nightmare = require("nightmare");

// STORY: As a developer nerd, I want to be able to take courses on web tech.
new Nightmare({ show: true })
  // Visit login page
  .goto("http://localhost:8080")
  .wait(1000)
  
  // Make an author.
  .click("#manage-authors-button")
  .wait(2000)
  .type("#author-name", "Let Me Duck Duck Go That For You!")
  .click(".btn.btn-success")
  .wait(2000)
  .screenshot("login.png")
  .click("#9")
  .wait(2000)
  .click("#title")
  .type("#title", "Did Chrono Trigger Do It First?")
  .click("#body")
  .type("#body", "https://www.youtube.com/watch?v=lOeE06FUZL4")
  .click(".btn.btn-success.submit")

  // // Enter password.
  // .type("#login__user_password", "dummy*password")
  // // Take a screenshot of the login form.
  
  // // Click login button. Always check if you've done this where necessary!
  // // It's easy to forget.
  // .click("#user_submit")
  // .wait(1000)
  // // Click course catalog link.
  // .click("a[href='/catalog']")
  // .wait(1000)
  // // Scroll down a few hundred pixels.
  // .scrollTo(500, 0)
  // // Take a screenshot and save it to the current directory.
  // .screenshot("courses.png")
  // // End test

  
  .end()
  // Execute commands
  .then(function() {
    console.log("Done!");
  })
  // Catch errors
  .catch(function(err) {
    console.log(err);
  });