'use strict'

const mongoose = require('mongoose');
const Document = mongoose.model('Empresa');

exports.get = async (filter, populate) => {

    var res;
    if (populate) {
        res = await Document
            .find({}, filter)
            .populate(populate);
        return res;
    }
    res = await Document.find({}, filter);
    return res;
}

exports.getBy = async (by, findOne, filter, populate) => {

    var res;

    if (findOne) {
        if (populate) {
            res = await Document
                .findOne(by, filter)
                .populate(populate);
        } else {
            res = await Document.findOne(by, filter);
        }
        return res;
    }
    if (populate) {
        res = await Document
            .find(by, filter)
            .populate(populate);
        return res;
    }

    res = await Document.find(by, filter);
    return res;
}

exports.create = async (data) => {
    var document = new Document(data);
    await document.save();
}

exports.update = async (id, data) => {
    await Document
        .findByIdAndUpdate(id, {
            $set: data
        });
}

exports.delete = async (id) => {
    await Document
        .findByIdAndDelete(id);
}