import api from "@/services/apiServices";
export default async function resetPassword(userData: {
    current_password: string;
    new_password: string;
  }) {
    console.log(userData);
    try {
      const response = await api.patch("/users/password/reset", userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  }