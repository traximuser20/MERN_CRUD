import express from "express";
import  {addUser, getUsers, getUser, editUser, deleteUser}  from "../controllers/user-controller.js";

const router = express.Router();

// const test = (req: Request, res: Response, next: NextFunction) => {
//     res.send('Hello World!');
// }

// router.get('/', test);

router.post('/add', addUser);
router.get('/all', getUsers);
router.get('/:id', getUser);
router.put('/:id', editUser);
router.delete('/:id', deleteUser);
// router.get('/', (req: Request, res: Response, next: NextFunction) => {
//     res.send('Hello World!');
// })

export default router;