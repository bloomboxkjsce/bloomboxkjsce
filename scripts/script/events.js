$('.carousel').carousel({
    interval: 100
});

$(document).ready(function() {
    $(".tab-content").each(function(i) {
      var tabTitle = $(this).data("tab-title");
      var current = $(this).hasClass("current") ? "current" : "";
      var newTab = $('<li class="tab-link"></li>');
      newTab
        .html(tabTitle)
        .addClass(current)
        .attr("data-tab", $(this).attr("id"));
      $("ul.tabs").append(newTab);
    });
  
    $(document).on("click", ".tabs li", function() {
      var tab_id = $(this).attr("data-tab");
  
      $(".tabs li").removeClass("current");
      $(".tab-content").removeClass("current");
  
      $(this).addClass("current");
      $("#" + tab_id).addClass("current");
    });
  });
  