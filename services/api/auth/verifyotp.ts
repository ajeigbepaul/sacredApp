// Enter Otp
import api from "@/services/apiServices";
export default async function verifyOtp(userData: {
  email: string;
  otp: number;
  full_name: string;
  phone_number: string;
  country: string;
  state: string;
  user_role:string;
  password:string;
}) {
  try {
    const response = await api.post("/auth/verify/otp", userData);
    return response.data;
  } catch (error) {
    throw error;
  }
}
// export async function verifyOtpResetPassword(userData: {
//   email: string;
//   otp: number;
// }) {
//   try {
//     const response = await api.post(
//       "users/auth/verify/recovery/otp",
//       userData,
//     );
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// }
