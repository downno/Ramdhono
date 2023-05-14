import Topic from "../models/TopicModel.js";

export const getTopic = async(req, res) =>{
    try {
        const response = await Topic.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getTopicById = async(req, res) =>{
    try {
        const response = await Topic.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createTopic = async(req, res) =>{
    try {
        await Topic.create(req.body);
        res.status(201).json({msg: "Topic Created"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateTopic = async(req, res) =>{
    try {
        await Topic.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Topic Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteTopic = async(req, res) =>{
    try {
        await Topic.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "User Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}