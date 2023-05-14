import express from "express";
import {
    getTopic, 
    getTopicById,
    createTopic,
    updateTopic,
    deleteTopic
} from "../controllers/TopicController.js";

const router = express.Router();

router.get('/topics', getTopic);
router.get('/topics/:id', getTopicById);
router.post('/topics', createTopic);
router.patch('/topics/:id', updateTopic);
router.delete('/topics/:id', deleteTopic);

export default router;