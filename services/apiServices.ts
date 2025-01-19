import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from "axios";
import { getSession } from "next-auth/react";
import Cookies from "js-cookie";

// Define your base URL
const BASE_URL = process.env.NEXT_PUBLIC_API_ADMIN_URL;

// Create an Axios instance
const api: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 60000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor for token authorization
// This interceptor is used to add the Authorization header to all requests if a token is present in the localStorage

api.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const session = await getSession();
    const tk = Cookies.get("next-auth.session-token");

    if (tk) {
      config.headers.Authorization = `Bearer ${tk}`;
      console.log("Session Token:", tk);
    } else if (session && (session as any).access_token) {
      config.headers.Authorization = `Bearer ${(session as any).access_token}`;
    //   console.log("Session Access Token:", (session as any).access_token);
    }
    // console.log("Request Config:", config);
    return config;
  },
  (error: AxiosError) => {
    console.error("Request Error:", error);
    return Promise.reject(error);
  }
);

// Interceptor for error handling
// This interceptor is used to handle all response errors
api.interceptors.response.use(
  (response: AxiosResponse) => {
    // console.log("Response Data:", response.data);
    return response;
  },
  (error: AxiosError) => {
    console.error(
      "Response Error:",
      error.response ? error.response.data : error.message
    );
    return Promise.reject(error);
  }
);

export const apiService = {
  // Example GET request
  // This method makes a GET request to the '/users' endpoint
  getUsers: async () => {
    try {
      const response = await api.get("/users/details");
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getUser: async () => {
    try {
      const response = await api.get("/users/update");
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getCountries: async (options: { headers?: Record<string, string> } = {}) => {
    try {
      const response = await api.get("/startups/countries", {
        headers: {
          ...options.headers, // Merge custom headers with defaults
        },
      });
      return response.data; // Return the data from the API response
    } catch (error) {
      console.error("Error fetching countries:", error);
      throw error; // Rethrow the error to be handled by the caller
    }
  },
  getStates: async (
    countryId: string,
    options: { headers?: Record<string, string> } = {}
  ) => {
    try {
      const response = await api.get(`/startups/countries/${countryId}`, {
        headers: {
          ...options.headers, // Merge custom headers with defaults
        },
      });
      return response.data; // Return the data from the API response
    } catch (error) {
      console.error("Error fetching states:", error);
      throw error; // Rethrow the error to be handled by the caller
    }
  },
  getRoles: async (options: { headers?: Record<string, string> } = {}) => {
    try {
      const response = await api.get(`/startups/userrole`, {
        headers: {
          ...options.headers, // Merge custom headers with defaults
        },
      });
      return response.data; // Return the data from the API response
    } catch (error) {
      console.error("Error fetching roles:", error);
      throw error; // Rethrow the error to be handled by the caller
    }
  },

  // Example POST request
  // This method makes a POST request to the '/users' endpoint with the provided user data
  createUser: async (userData: any) => {
    try {
      const response = await api.post("/users", userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  updateUser: async (userData: any) => {
    try {
      const response = await api.put("/users/update", userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Add more API methods as needed
  // Verify Email
  // regEmail: async (email: string) => {
  //   try {
  //     const response = await api.post("/users", email);
  //     return response.data;
  //   } catch (error) {
  //     throw error;
  //   }
  // },
  // Enter Otp
  // regOtp: async (otp: number) => {
  //   try {
  //     const response = await api.post("/users", otp);
  //     return response.data;
  //   } catch (error) {
  //     throw error;
  //   }
  // },
  // Enter Otp
  // regPassword: async (password: string) => {
  //   try {
  //     const response = await api.post("/users", password);
  //     return response.data;
  //   } catch (error) {
  //     throw error;
  //   }
  // },

  // Login
  createLogin: async (userData: { email: string; password: string }) => {
    try {
      const response = await api.post("/users", userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  oAuthUserLogin: async (userData: { email: any; picture: any }) => {
    try {
      const response = await api.post("/socials/oauth/success", userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
// This is the base API instance
let baseApi = api;
export default baseApi;
