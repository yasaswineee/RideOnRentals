import axios from "axios";
import { API_BASE_URL } from "./constants";

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

// Example API calls
export const getVehicles = () => api.get("/vehicles");
export const getBookings = () => api.get("/bookings");
export const getCustomers = () => api.get("/customers");
