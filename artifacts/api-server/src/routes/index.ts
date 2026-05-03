import { Router, type IRouter } from "express";
import healthRouter from "./health";
import assessmentsRouter from "./assessments";
import contactsRouter from "./contacts";

const router: IRouter = Router();

router.use(healthRouter);
router.use(assessmentsRouter);
router.use(contactsRouter);

export default router;
