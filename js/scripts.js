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
    if (person === 'solo' || person === 'child' || person === 'adult')
      if (trip === 'weekend' || trip === 'holiday' || trip === 'camping')
        if (activity === 'beach')
          if (level === 'easy' || level ==='active' || level ==='beyond')
            if (prefer === 'seperate' || prefer === 'group' || prefer === 'guided'){
              $("#hawaii").show()
    }
    if (person === 'solo' || person === 'child' || person === 'adult')
      if (trip === 'weekend' || trip === 'holiday' || trip === 'camping')
        if (activity === 'sightseeing')
          if (level === 'easy' || level ==='active' || level ==='beyond')
            if (prefer === 'seperate' || prefer === 'group' || prefer === 'guided'){
              $("#grandcanyon").show()
    } else {
      alert("OOOOPPSSS! There was an error. Please try again");
    }
    
    event.preventDefault();

  });
});
