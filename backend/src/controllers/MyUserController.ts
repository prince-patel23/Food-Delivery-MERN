import { Request, Response } from "express";
import User from "../models/user";

const createCurrentUser = async (req: Request, res: Response) => {
  //1.check if the user exists.
  try {
    const { auth0Id } = req.body;
    const existingUser = await User.findOne({ auth0Id });

    //2.create the user if it doesn't exist.
    if (existingUser) {
      return res.status(200).send();
    }

    const newUser = new User(req.body);
    await newUser.save();

    //3.return the user object to the calling client.
    res.status(201).json(newUser.toObject());
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error Creating User" });
  }
};
export default {
  createCurrentUser,
};
