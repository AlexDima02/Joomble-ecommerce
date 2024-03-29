'use strict';
const stripe = require('stripe')(process.env.VITE_STRIPE_KEY);

/**
 * order controller
 */



const { createCoreController } = require('@strapi/strapi').factories;


module.exports = createCoreController("api::order.order", ({ strapi }) => ({
    async create(ctx) {
      // Produsele trimise din frontend
      const { products } = ctx.request.body;
      console.log(products)
      try {

        console.log(products)
        const lineItems = await Promise.all(
          products.map(async (product) => {
            // const item = await strapi.service("api::product.product").findOne(product.id);
            

            return {
              price_data: {
                currency: "usd",
                product_data: {
                  name: product.attributes.name,
                },
                unit_amount: product.attributes.price * 100,
              },
              quantity: product.quantity,
            };
          })
        );
          
        
        const session = await stripe.checkout.sessions.create({
          shipping_address_collection: {allowed_countries: ['PT', 'CA']},
          payment_method_types: ["card"],
          mode: "payment",
          success_url: `${process.env.VITE_CLIENT_URL}?success=true`,
          cancel_url: `${process.env.VITE_CLIENT_URL}?success=false`,
          line_items: lineItems,
        });
        
        console.log({url: session.id})

        // Creeaza comenzii in baza de date cu produsele comandate si id-ul comenzii
        await strapi.service("api::order.order").create({ data: {  products, stripeId: session.id } });
          
        return { stripeSession: session };

      } catch (error) {
        
        console.log(error)
        ctx.response.status = 500;
        return { error };

      }
    },
}));
