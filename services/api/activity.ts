import api from "@/services/apiServices";
// Define a function to fetch activities
export async function getActivities(type: string) {
    try {
      const response = await api.get(`/users/domainrequests?requestType=${type}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching activities:", error);
      throw new Error("Failed to fetch activities");
    }
  }
