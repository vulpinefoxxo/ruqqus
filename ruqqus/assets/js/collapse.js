// Toggle comment collapse

$(".toggle-collapse").click(function (event) {
    event.preventDefault();

    var id = $(this).parent().attr("id");

    document.getElementById(id).classList.toggle("collapsed");
});