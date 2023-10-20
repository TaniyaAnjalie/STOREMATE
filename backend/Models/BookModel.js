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
            type: integer,
            required: true,
        },
        stock: {
            type: integer,
            required: true,
        },
    },
    {
        timestamps:{}
    }
)

const books = mongoose.model('books' , bookSchema);

module.exports= books;