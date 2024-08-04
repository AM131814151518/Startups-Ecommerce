"use strict";

/**
 *  order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
    const {
      Name,
      Amount,
      ShippingAdress,
      city,
      state,
      Pincode,
      items,
      Phone,
      Message,
    } = ctx.request.body;

    const order = await strapi.db.query("api::order.order").create({
      data: {
        Name,
        ShippingAdress,
        Phone,
        city,
        state,
        Pincode,
        Message,
        Amount,
        items,
        User: ctx.state.user.email
      },
    });
    return order;
  },
}));
