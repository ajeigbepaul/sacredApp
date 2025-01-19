import api from "@/services/apiServices"
export default async function login(userData: {
    email: string;
    password: string;
  }) {
    console.log(userData, "USER DATA");
    try {
      const response = await api.post("/auth/signin", userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  