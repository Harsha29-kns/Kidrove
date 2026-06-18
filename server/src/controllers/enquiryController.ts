import { Request, Response } from "express";
import { Enquiry, enquirySchema } from "../models/Enquiry";

export const createEnquiry = async (req: Request, res: Response) => {
  try {
    // Validate request body against Zod schema
    const validationResult = enquirySchema.safeParse(req.body);
    
    if (!validationResult.success) {
      return res.status(400).json({
        success: false,
        message: "Validation Error",
        errors: validationResult.error.issues,
      });
    }

    // Save to database
    const newEnquiry = new Enquiry(validationResult.data);
    await newEnquiry.save();

    return res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully",
      data: newEnquiry,
    });
  } catch (error) {
    console.error("Error creating enquiry:", error);
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export const getEnquiries = async (req: Request, res: Response) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    return res.status(200).json({
      success: true,
      data: enquiries,
      count: enquiries.length
    });
  } catch (error) {
    console.error("Error fetching enquiries:", error);
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
