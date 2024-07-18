export interface User {
  fullName: string;
  email: string;
  phone: string;
  role: "ADMIN" | "CUSTOMER" | "MANAGER" | "STAFF";
  id: number;
}
