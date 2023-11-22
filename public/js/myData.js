window.addEventListener("load", function() {
  //alert("Hola");
  const image = document.getElementById("image");
  image.addEventListener("input", previewImage);
});

function previewImage() {
  var input = document.getElementById("image");
  var preview = document.getElementById("previewImage");

  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function(e) {
      preview.src = e.target.result;
    };

    reader.readAsDataURL(input.files[0]);
  }
}
