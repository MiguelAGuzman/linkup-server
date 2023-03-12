import express from "express";
import { createPost } from "../Controller/PostController";

const router = express.Router()

router.post('/', createPost)

// router.get('/', async (req, res) => {
//     res.send("Post Route")
// })

export default router;