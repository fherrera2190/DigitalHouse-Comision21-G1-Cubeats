const nodemailer = require("nodemailer");

const config = require("../config/config");
const transport = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  auth: {
    user: config.NODEMAILER_GMAIL,
    pass: config.NODEMAILER_PASS
  }
});

// const result = await transport.sendMail({
//     from: "Vendedor <ferbeoulvedev@gmail.com>",
//     to: req.query.email,
//     subject: "Orden de compra",
//     html: `
//   <div>
//       <h1>Ticket: ${ticketResponse.code}</h1>
//       <ul>${purchasedProducts.forEach(product => {
//         `<li>${product.product
//           .title}---------------${product.quantity}x${product.product
//           .price}---------------${product.quantity *
//           product.product.price}</li>`;
//       })}
//       </ul>
//       <h2>Total: $${ticketResponse.amount}</h2>
//   </div>
//   `
//   });

module.exports = transport;
