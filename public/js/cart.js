window.addEventListener("load", function () {
  getCart();
  getTotal();
});

async function addItemToCart(product) {
  console.log(product);
  const response = await fetch("http://localhost:3000/api/carts/", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      product: +product,
    }),
  });
  const result = await response.json();
  console.log(result.data.mesagge);
}
async function getCart() {
  const response = await fetch("http://localhost:3000/api/carts/");
  const result = await response.json();
  const container = document.getElementById("cartContainer");
  const total = document.getElementById("total");
  container.innerHTML=""
  console.log(result);
  total.innerHTML = result.data.total;

  if(result.data.products.length >0){

  result.data.products.forEach((element) => {
    container.innerHTML += `<div class="flex w-full justify-between">
  <div class="flex gap-4">
    <img
      src="/img/products/${element.image}"
      alt=""
      class="w-14 h-14 object-cover block group-hover:hidden transition-all ease-in-out"
    />
    <div class="flex flex-col text-start">
      <p class="text-lg">${element.name}</p>
      <p class="text-zinc-400 font-normal">${element.username}</p>
    </div>
  </div>
  <div class="flex gap-2">
    <p class="text-lg text-zinc-400">$${element.price}</p>
    <button onclick="removeItemToCart(${element.id})">
    <svg
        width="23"
        height="23"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        class="fill-zinc-400"
        data-testid="remove-track"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.5868 12.0028L4.00444 18.5894L5.4182 20.0041L12.0009 13.4172L18.5831 20.0009L19.9972 18.5865L13.4147 12.0025L19.9983 5.41467L18.5845 4L12.0006 10.5882L5.41406 4.00015L4 5.41452L10.5868 12.0028Z"
        ></path>
      </svg>
  </button>
  </div>
</div>
<hr class="flex-1 border border-zinc-900 w-full" />`;
  });}else{
    container.innerHTML += `<p>No hay productos en tu carrito</p>`
  }
}

async function removeItemToCart(id) {
  const response = await fetch(
    `http://localhost:3000/api/carts/item?product=${id}`,
    {
      method: "delete",
    }
  );
  const result = await response.json();
  getCart();
  console.log(result);
}
