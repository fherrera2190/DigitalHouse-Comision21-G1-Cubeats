window.addEventListener("load", function() {});

async function addItemToCart(product) {
  console.log(product);
  const response = await fetch("http://localhost:3000/api/carts/", {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      product: +product
    })
  });
  const result = await response.json();
  console.log(result);
}
