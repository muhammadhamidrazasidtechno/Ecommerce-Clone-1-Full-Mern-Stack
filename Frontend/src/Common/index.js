import axios from "axios";

const BackendDomain = "http://localhost:5000";

const SummaryApi = {
  signup: { url: `${BackendDomain}/api/signup`, method: "POST" },
  login: { url: `${BackendDomain}/api/login`, method: "POST" },
  getUser: { url: `${BackendDomain}/api/user`, method: "GET" },
  updateUser: { url: `${BackendDomain}/api/user`, method: "PUT" },
  deleteUser: { url: `${BackendDomain}/api/user`, method: "DELETE" },
  getProducts: { url: `${BackendDomain}/api/products`, method: "GET" },
  getProductById: (id) => ({
    url: `${BackendDomain}/api/products/${id}`,
    method: "GET",
  }),
  createProduct: { url: `${BackendDomain}/api/products`, method: "POST" },
  updateProduct: (id) => ({
    url: `${BackendDomain}/api/products/${id}`,
    method: "PUT",
  }),
  deleteProduct: (id) => ({
    url: `${BackendDomain}/api/products/${id}`,
    method: "DELETE",
  }),
};

const apiCall = async ({ url, method }, data = null) => {
  try {
    const response = await axios({
      method,
      url,
      data,
    });
    return response.data;
  } catch (error) {
    console.error("API call error:", error);
    throw (
      error.response?.data?.message || { message: "An unknown error occurred" }
    );
  }
};

export const signup = (data) => apiCall(SummaryApi.signup, data);
export const login = (data) => apiCall(SummaryApi.login, data);
export const getUser = () => apiCall(SummaryApi.getUser);
export const updateUser = (data) => apiCall(SummaryApi.updateUser, data);
export const deleteUser = () => apiCall(SummaryApi.deleteUser);
export const getProducts = () => apiCall(SummaryApi.getProducts);
export const getProductById = (id) => apiCall(SummaryApi.getProductById(id));
export const createProduct = (data) => apiCall(SummaryApi.createProduct, data);
export const updateProduct = (id, data) =>
  apiCall(SummaryApi.updateProduct(id), data);
export const deleteProduct = (id) => apiCall(SummaryApi.deleteProduct(id));
