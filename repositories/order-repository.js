'use strict';
const mongoose = require('mongoose');
const Order = mongoose.model('Order');




exports.getById = async(id) => {
    const res = await Order
        .findById(id);
    return res;
}


exports.get = async(data) => {
    var res = await Order
        .find({}, 'number status customer items')
        .populate('customer', 'name')
        .populate('items.product', 'title');
    return res;
}

exports.create = async(data) => {
    var order = new Order(data);
    await order.save();
}

exports.update = async(id, data) => {
    await Order
        .findByIdAndUpdate(id, {
            $set: {
                name: data.name,
                email: data.email,
                password: data.password,
            }
        });
}

exports.delete = async(id) => {
    await Order
        .findOneAndRemove(id);
}