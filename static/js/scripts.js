$(document).ready(function () {
    set_temp();
    show_comment();
});
function set_temp() {
  $.ajax({
      type: "GET",
      url: "http://spartacodingclub.shop/sparta_api/weather/seoul",
      data: {},
      success: function (response) {
        $("#temp").text(response["temp"]);
      },
    });
}
function save_comment() {
    let name = $("#name").val();
    let comment = $("#comment").val();
    $.ajax({
      type: "POST",
      url: "/homework",
      data: {
        name_give: name,
        comment_give: comment,
      },
      success: function (response) {
        alert(response["msg"]);
        window.location.reload();
      },
    });
}
function show_comment() {
    $('#comment-list').empty();
    $.ajax({
      type: "GET",
      url: "/homework",
      data: {},
      success: function (response) {
        let messages = response['messages'];
        for (let i = 0; i < messages.length; i++) {
          let name = messages[i]['name'];
          let comment = messages[i]['comment'];
          let temp_html = `
          <div class="card">
    <div class="card-body">
      <blockquote class="blockquote mb-0">
        <p>${comment}</p>
        <footer class="blockquote-footer">${name}</footer>
      </blockquote>
    </div>
  </div>
          `;

          $('#comment-list').append(temp_html);
        }
      }
    })
}