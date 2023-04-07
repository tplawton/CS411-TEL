const mongoose = require('mongoose')
const course = require('../models/weatherSchema')// to get the schema for workout


const getAlldata = async (req, res) => {
    const Courses = await course.find({}).sort({_id: 1})
    
    res.status(200).json(Courses)
}