$(document).ready(function() {
  $('form#vacation').submit(function(event) {
    var person = $("input:radio[name=person]:checked").val();
    var trip = $("input:radio[name=trip]:checked").val();
    var activity = $("input:radio[name=activity]:checked").val();
    var level = $("input:radio[name=level]:checked").val();
    var prefer = $("input:radio[name=prefer]:checked").val();

    if (person === 'solo' || person === 'child' || person === 'adult')
      if (trip === 'weekend' || trip === 'holiday')
        if (activity === 'park')
         if (level === 'easy' || level ==='active' || level ==='beyond')
          if (prefer === 'seperate' || prefer === 'group' || prefer === 'guided'){
            $("#disney").show()
          }
          if (person === 'solo' || person === 'child' || person === 'adult')
            if (trip === 'weekend' || trip === 'holiday')
              if (activity === 'nightlife')
                if (level === 'easy' || level ==='active' || level ==='beyond')
                  if (prefer === 'seperate' || prefer === 'group' || prefer === 'guided'){
                    $("#vegas").show()
          }

    event.preventDefault();

  });
});
