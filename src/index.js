import express from "express";
import cors from "cors";
import passport from 'passport';
import { jwtStrategy } from './common/jwt.strategy.js';
import authRouter from "./controllers/authController.js"
import movimientosRouter from "./controllers/movimientosController.js"
import userRouter from "./controllers/userController.js"




const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
passport.use(jwtStrategy);

app.use(passport.initialize());
app.use("/auth", authRouter);
app.use("/movimientos", movimientosRouter);
app.use("/user", userRouter)





app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});