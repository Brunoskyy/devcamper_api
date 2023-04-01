import { NextFunction, Request, Response } from "express";

// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
const getBootcamps = (
  req: Request, 
  res: Response, 
  next: NextFunction
  ) => {
    res.status(200).json({ success: true, msg: 'Show all bootcamps' });
}

// @desc    Get single bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  Public
const getBootcamp = (
  req: Request,
  res: Response,
  next: NextFunction
  ) => {
    res.status(200).json({ success: true, msg: `Show bootcamp ${req.params.id}` });
}

// @desc    Create new bootcamp
// @route   POST /api/v1/bootcamps
// @access  Private
const createBootcamp = (
  req: Request,
  res: Response,
  next: NextFunction
  ) => {
    res.status(200).json({ success: true, msg: 'Create bootcamps' });
}

// @desc    Update bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @access  Private
const updateBootcamp = (
  req: Request,
  res: Response,
  next: NextFunction
  ) => {
    res.status(200).json({ success: true, msg: `Update bootcamp ${req.params.id}` });
}

// @desc    Delete bootcamp
// @route   DELETE /api/v1/bootcamps/:id
// @access  Private
const deleteBootcamp = (
  req: Request,
  res: Response,
  next: NextFunction
  ) => {
    res.status(200).json({ success: true, msg: `Delete bootcamp ${req.params.id}` }); 
}

export { getBootcamps, getBootcamp, createBootcamp, updateBootcamp, deleteBootcamp };