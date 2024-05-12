require("dotenv").config({ path: "./server/.env" });

const express = require("express");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const cors = require("cors");
const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(cors());

console.log("Stripe Secret Key:", process.env.STRIPE_SECRET_KEY);

app.post("/create-checkout-session", async (req, res) => {
  if (!req.body.items) {
    return res.status(400).send({ error: "Items are required" });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: req.body.items.map((item) => {
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: item.name,
            },
            unit_amount: Math.round(item.price * 100),
          },
          quantity: item.quantity,
        };
      }),
      mode: "payment",
      success_url: `${req.headers.origin}/success.html`,
      cancel_url: `${req.headers.origin}/cancel.html`,
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error("Error creating session: ", error);
    res.status(500).send({ error: error.message });
  }
});

const port = process.env.PORT || 4242;
app.listen(port, () => console.log(`Running on port ${port}`));
