window.onload = () => {
  console.log(document.cookie);
};

const likefunction = async id => {
  const heart = document.getElementById("svg-heart-path-" + id);
  const response = await fetch("/api/products/like?id=" + id);
  const result = await response.json();
  console.log(result.ok);
  if (result.ok) {
    heart.setAttribute("fill","#a1a1aa");
    heart.removeAttribute("fill-rule");
  } else {
    heart.removeAttribute("fill");
    heart.setAttribute("fill-rule","evenodd");
  }
};
