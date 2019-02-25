$(document).ready(function() {
  $('form#vacation').submit(function(event) {
    var person = $("input:radio[name=person]:checked").val();
    var trip = $("input:radio[name=trip]:checked").val();
    var activity = $("input:radio[name=activity]:checked").val();
    var level = $("input:radio[name=level]:checked").val();
    var prefer = $("input:radio[name=prefer]:checked").val();


    event.preventDefault();

  });
});
