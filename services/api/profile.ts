import api from "@/services/apiServices";
export async function profileUpdate(formData: FormData) {
    try {
      const response = await api.put(
        "/users/profile",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
  
      return response?.data?.data;
    } catch (error) {
      console.log(error, "error");
      throw error;
    }
  }

 
  