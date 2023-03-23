import express from "express";
import { createPost } from "../Controller/PostController.js";

const router = express.Router()

router.post('/', createPost)
router.get('/:id', getPost)

// router.get('/', async (req, res) => {
//     res.send("Post Route")
// })

export default router;