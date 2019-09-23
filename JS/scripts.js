$(document).ready(function) {
  $("#form-control").submit(function)(event) {
    var javascriptInput = $("input#javascript").val()
    var pythonInput = $("input#python").val()
    var cplusInput = $("input#cplus").val()
    var csharpeInput = $("input#csharp").val()
    var rubyInput = $("input#ruby").val()

    $(".javascript").text(javascriptinput);
    $(".python").text(pythoninput);
    $(".cplus").text(cplusinput);
    $(".csharpe").text(csharpinput);
    $(".ruby").text(rubyinput);

    $("#form-control").show();

    event.preventDefault();
  }
