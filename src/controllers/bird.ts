import { Request, Response } from "express";
import Bird from "../models/bird";
// though it was empty i moved the crud operations here for better file structure
export const getAllBirds = async (req: Request, res: Response) => {
  try {
    const birds = await Bird.find();
    res.json(birds);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const createBird = async (req: Request, res: Response) => {
  try {
    const bird = new Bird(req.body);
    await bird.save();
    res.status(201).json(bird);
  } catch (error) {
    res.status(400).json({ error: "Bad Request" });
  }
};

export const getBirdById = async (req: Request, res: Response) => {
  try {
    const bird = await Bird.findById(req.params.id);
    if (!bird) {
      res.status(404).json({ error: "Bird not found" });
    } else {
      res.json(bird);
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateBird = async (req: Request, res: Response) => {
  try {
    const bird = await Bird.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!bird) {
      res.status(404).json({ error: "Bird not found" });
    } else {
      res.json(bird);
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteBird = async (req: Request, res: Response) => {
  try {
    const bird = await Bird.findByIdAndDelete(req.params.id);
    if (!bird) {
      res.status(404).json({ error: "Bird not found" });
    } else {
      res.status(204).send();
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
