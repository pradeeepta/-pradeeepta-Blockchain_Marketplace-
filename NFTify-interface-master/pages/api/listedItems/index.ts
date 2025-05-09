import connectDB from "@/lib/connectDB";
import ListedItems, { IListedItem } from "@/lib/listedItemsSchema";
import { ListItemType } from "@/src/types/data";
import { ErrorRespond, SuccessRespond } from "@/src/types/server";
import type { NextApiRequest, NextApiResponse } from "next/types";

// -------------

// GET request handler
export const getItems = async (
  req: NextApiRequest,
  res: NextApiResponse<SuccessRespond | ErrorRespond>
) => {
  try {
    // Connect to database
    await connectDB();
    
    // options to use in fetching items
    let queryOptions: any = {};

    // Check if we have seller in our query
    if (req.query.seller) {
      const { seller } = req.query;
      queryOptions.seller = seller; // Remove regex for exact match
    }

    // Execute query with timeout
    const items: IListedItem[] = await ListedItems.find(queryOptions)
      .sort({ createdAt: -1 })
      .maxTimeMS(30000)
      .lean(); // Use lean() for better performance

    if (!items) {
      return res.status(200).json({
        status: "success",
        items: [],
      });
    }

    res.status(200).json({
      status: "success",
      items,
    });
  } catch (error: any) {
    console.error("Error in getItems:", error);
    res.status(500).json({
      status: "error",
      message: "Failed to fetch items",
      error: error.message || "Unknown error occurred",
    });
  }
};

// POST request handler
export const createItem = async (
  req: NextApiRequest,
  res: NextApiResponse<SuccessRespond | ErrorRespond>
) => {
  try {
    // Connect to database
    await connectDB();
    
    // New item that will be added
    const _newItem: ListItemType = req.body as ListItemType;

    // Validate required fields
    const requiredFields = [
      'collectionName',
      'imageUrl',
      'nftAddress',
      'price',
      'seller',
      'tokenId',
      'tokenURI'
    ];

    const missingFields = requiredFields.filter(field => !_newItem[field as keyof ListItemType]);

    if (missingFields.length > 0) {
      return res.status(400).json({
        status: "error",
        message: `Missing required fields: ${missingFields.join(', ')}`,
        error: "Missing required fields",
      });
    }

    // Create new item with timeout
    const newItem: IListedItem = await ListedItems.create<ListItemType>(_newItem);

    res.status(201).json({
      status: "success",
      newItem,
    });
  } catch (error: any) {
    console.error("Error in createItem:", error);
    res.status(500).json({
      status: "error",
      message: "Failed to create item",
      error: error.message || "Unknown error occurred",
    });
  }
};

// Main handler function
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    return getItems(req, res);
  }

  if (req.method === "POST") {
    return createItem(req, res);
  }

  res.status(405).json({
    status: "error",
    message: "Method not allowed",
  });
}
