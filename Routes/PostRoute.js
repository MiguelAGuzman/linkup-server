import express from "express";
import { createPost } from "../Controller/PostController.js";
import { updatePost } from "../Controllers/PostController.js";

const router = express.Router()

router.post('/', createPost)
router.get('/:id', getPost)
router.put('/:id', updatePost)
router.delete('/:id', deletePost)

// router.get('/', async (req, res) => {
//     res.send("Post Route")
// })

export default router;