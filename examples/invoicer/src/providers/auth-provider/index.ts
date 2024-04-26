import { AuthProvider } from "@refinedev/core";
import { AuthHelper } from "@refinedev/strapi-v4";
import { axiosInstance } from "../axios";
import { API_URL, TOKEN_KEY } from "../../utils/constants";

export const strapiAuthHelper = AuthHelper(`${API_URL}/api`);

export const authProvider: AuthProvider = {
  login: async ({ email, password }) => {
    try {
      const { data, status } = await strapiAuthHelper.login(email, password);
      if (status === 200) {
        localStorage.setItem(TOKEN_KEY, data.jwt);

        // set header axios instance
        axiosInstance.defaults.headers.common.Authorization = `Bearer ${data.jwt}`;

        return {
          success: true,
          redirectTo: "/",
        };
      }
    } catch (error: any) {
      const errorObj = error?.response?.data?.message?.[0]?.messages?.[0];
      return {
        success: false,
        error: {
          message: errorObj?.message || "Login failed",
          name: errorObj?.id || "Invalid email or password",
        },
      };
    }

    return {
      success: false,
      error: {
        message: "Login failed",
        name: "Invalid email or password",
      },
    };
  },
  logout: async () => {
    localStorage.removeItem(TOKEN_KEY);
    return {
      success: true,
      redirectTo: "/login",
    };
  },
  onError: async (error) => {
    if (error.response?.status === 401) {
      return {
        logout: true,
      };
    }

    return { error };
  },
  check: async () => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
      axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
      return {
        authenticated: true,
      };
    }

    return {
      authenticated: false,
      error: {
        message: "Authentication failed",
        name: "Token not found",
      },
      logout: true,
      redirectTo: "/login",
    };
  },
  getPermissions: async () => null,
  getIdentity: async () => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (!token) {
      return null;
    }

    const { data, status } = await strapiAuthHelper.me(token);
    if (status === 200) {
      const { id, username, email } = data;
      return {
        id,
        username,
        email,
      };
    }

    return null;
  },
};
