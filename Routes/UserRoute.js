import Express from "express";
import { getUser } from "../Controllers/UserController.js";

const router = express.Router();

router.get('/:id', getUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)
router.put('/:id/follow', followUser)

// router.get('/', async (req, res) => {
//     res.send("user route")
// })

export default router;