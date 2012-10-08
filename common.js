$(function(){

  $("#events_type a").on("click", function(e) {
    $.ajax("http://frankivsk-online.com/wp-content/themes/eventsguide_if/page-movie.php", {
      success : function(data) {
        $(".archive").html(data.items[0]);
      }
    })
    e.preventDefault();
  })


});