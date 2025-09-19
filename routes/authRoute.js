import express from "express";
import { registerController, 
         loginController,
         testController,
         forgotPasswordController,
         updateProfileController,
         getOrdersController,
         getAllOrdersController,
         orderStatusController 

 } from "../controllers/authController.js";
import {isAdmin, requireSignIn } from "./../middlewares/authMiddleware.js";

const router = express.Router();

// Register route
router.post('/register', registerController);

// Login route
router.post('/login', loginController);

//Forgot Password || POST
router.post("/forgot-password", forgotPasswordController);

router.get('/test',requireSignIn, isAdmin, testController);

//protected User route auth
router.get("/user-auth", requireSignIn, (_req, res) => {
  res.status(200).send({ ok: true });
});
//protected Admin route auth
router.get("/admin-auth", requireSignIn, isAdmin, (_req, res) => {
  res.status(200).send({ ok: true });
});
//update profile
router.put("/profile", requireSignIn, updateProfileController);

//orders
router.get("/orders", requireSignIn, getOrdersController);

//all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);


export default router;
