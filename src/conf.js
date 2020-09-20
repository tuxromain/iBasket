const ENV = process.env.NODE_ENV;

export const BASE_API = ENV === "development" ? "http://localhost:3000" : null;