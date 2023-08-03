// Immediately Invoked Function Expression (IIFE)

(function chai() {
  // named IIFE
  console.log("DB CONNECTED");
})();

// ()() => This is called IIFE. It is used to reduce the global pollution.
// chai() => Compare this and above
// use semicolon for ending the IIFE expression otherwise it disrupt the new IIFE expression
((name) => {
  // Unnamed IIFE
  console.log(`DB CONNECTED TWO ${name}`);
})("Dushyant");
