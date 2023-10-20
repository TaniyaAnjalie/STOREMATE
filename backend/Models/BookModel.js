const express = require('express')

const {default:mongoose} = require('mongoose')

const bookSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
        },
        price: {
            type: Number,
            required: true,
        },
        stock: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps:{}
    }
)

const books = mongoose.model('books' , bookSchema);

module.exports= books;