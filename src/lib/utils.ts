import { type ClassValue, clsx } from "clsx"
import mongoose, { ConnectionStates } from "mongoose";
import { twMerge } from "tailwind-merge"

type Connection = {
  isConnected: ConnectionStates
};

const conn: Connection = { isConnected: 0 }

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const connectToDb = async () => {
  try {
    if (conn.isConnected) {
      console.log('Using existing connection')
      return
    }
    const db = await mongoose.connect(process.env.MONGO as string);
    conn.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to connect');
  }
}