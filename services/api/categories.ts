import api from "@/services/apiServices";
// Define a function to fetch activities
export async function getCategories() {
    try {
      const response = await api.get(`/users/categories/`);
      return response.data;
    } catch (error) {
      console.error("Error fetching categories:", error);
      throw new Error("Failed to fetch categories");
    }
  }

export const postCategoryUpdate = async (blacklistCategory: string) => {
  try {
    const response = await api.post("/users/categories/toggle", {
      blacklist_category: blacklistCategory,
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to update category");
  }
};

