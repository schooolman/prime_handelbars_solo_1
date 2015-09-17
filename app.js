$(function () {
  // Grab the template script
  var theTemplateScript = $("#myName-display").html();

  

  // Compile the template
  var theTemplate = Handlebars.compile(theTemplateScript);

  // Define our data object
  var person = {
      "name" : "Jake Schoolmeesters",
      "dog"  : "Tilly", 
      "city": "Minneapolis", 
  };

  // Pass our data to the template
  var theCompiledHtml = theTemplate(person);

  // Add the compiled html to the page
  $('.myName-placeholder').html(theCompiledHtml);

});
