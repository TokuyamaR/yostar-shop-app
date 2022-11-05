"use strict";

/**
 * order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

const stripe = require("stripe")(
  "sk_test_51Lx3CLJOZdakL4qGUxhtRD0xuiRPCegBQgxvUL05bgRwbfsjA8STOtwktX97OE9vIgKRec0EyqeD8m2s1TYWEpJg003Vgjs2Tn"
);

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  create: async (ctx) => {
    const { address, amount, items, token } = JSON.parse(ctx.request.body);
    const charge = await stripe.charges.create({
      amount: amount,
      currency: "jpy",
      source: token,
      description: `Ordered at ${new Date()} by ${ctx.state.user._id}`,
    });

    const order = await strapi.service('api::order.order').create({
      data: {
        user: ctx.state.user.id,
        charge_id: charge.id,
        amount,
        address,
        items,
      }
    });

    return order;
  },
}));
