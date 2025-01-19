import api from "@/services/apiServices"
export async function OtpRecovery(email: string) {
    console.log(email);
    try {
      const response = await api.post(
        "/auth/otp",
        { email: email },
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }