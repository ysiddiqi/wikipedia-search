$("document").ready(function() {
  $("#search").click(function() {
    var searchTerm = $("#searchTerm").val();

    var url =
      "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
      searchTerm +
      "&format=json&callback=?";
    $.ajax({
      type: "Get",
      url: url,
      dataType: "json",
      async: false,
      success: function(data) {
        $("#output").html("");
        //console.log(data[1][0]);
        //console.log(data[2][0]);

        for (var i = 0; i < data[1].length; i++) {
          $("#output").append(
            "<li><a href= " +
              data[3][i] +
              ' target="blank">' +
              data[1][i] +
              " <p>" +
              data[2][i] +
              "</p></li>"
          );
        }
        $("#searchTerm").val("");
      },
      error: function(errorMessage) {
        alret("Error");
      }
    });
  });
});