// Old JQuery code - much longer and not so efficient way of coding...

/*$( document ).ready(function() {
var $petitions = $('#petitionTitle');
var $description = $('#petitiondescription');
var template = $('#petitionTemplate').html();
var html = Mustache.to_html(template, petitions);
  $.ajax({
    type: 'GET',
    url : './petitions.json',
    success : function(petitions){
    $.each(petitions, function(i, petition){
      $petitions.append(petition.title);
      $description.append(petition.description);
    });
    }
  });
}); */

// ......................... Load partials  ................
$(function(){
$( "#headerLoad" ).load( "partials/header.html" );
$( "#footerLoad" ).load( "partials/footer.html" );
});

// ......................... JQUERY code aiming to Mustache template ................

$(function(){
$.getJSON('./petitions.json', function(data){
  var template = $('#petitionTemplate').html();
  var html = Mustache.to_html(template, data);
  $('#petitions').html(html);
});
});
