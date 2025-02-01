import api from "@/services/apiServices";
export async function getAllDomains() {
    try {
      const response = await api.get(`/users/blacklist`);
      return response.data;
    } catch (error) {
      console.error("Error fetching domains:", error);
      throw new Error("Failed to fetch domains");
    }
  }

  export default async function addToBlackList(userData: {
    domain: string;
  }) {
    console.log(userData);
    try {
      const response = await api.put("users/blacklist", userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  export async function deleteDomain(id: string) {
    try {
      const response = await api.delete(`/users/blacklist/${id}`);
      return response?.data?.data;
    } catch (error) {
      throw error;
    }
  }