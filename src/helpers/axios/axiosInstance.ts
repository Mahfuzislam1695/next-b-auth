// import axios from "axios";
// import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";
// import { getNewAccessToken } from "@/services/auth.service";
// import { authKey } from "@/constants/auth/storageKey";
// import { IGenericErrorResponse, ResponseSuccessType } from "@/types";
// import { getBaseUrl } from "@/config/envConfig";

// const instance = axios.create({
//   baseURL: getBaseUrl(),
//   withCredentials: true,
// });

// instance.defaults.headers.post["Content-Type"] = "application/json";
// instance.defaults.headers["Accept"] = "application/json";
// instance.defaults.timeout = 60000;

// // Request interceptor
// instance.interceptors.request.use(
//   function (config) {
//     const accessToken = getFromLocalStorage(authKey);
//     if (accessToken) {
//       config.headers.Authorization = `Bearer ${accessToken}`;
//     }
//     return config;
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );

// // Response interceptor
// instance.interceptors.response.use(
//   //@ts-expect-error: response type is not always consistent
//   function (response) {
//     const responseObject: ResponseSuccessType = {
//       data: response?.data?.data,
//       meta: response?.data?.meta,
//     };
//     return responseObject;
//   },
//   async function (error) {
//     const config = await error.config;
//     if (error?.response?.status === 401 && !config?.sent) {
//       config.sent = true;
//       const errorMessage = error?.response?.data?.message || "You are not authorized";

//       if (errorMessage.includes("No token provided")) {
//         console.error("401: You are not authorized");
//       } else if (errorMessage.includes("expired")) {
//         const response = await getNewAccessToken();
//         const newAccessToken = response.data.accessToken;

//         config.headers["Authorization"] = `Bearer ${newAccessToken}`;

//         setToLocalStorage(authKey, newAccessToken);

//         return instance(config);
//       } else if (errorMessage.includes("Invalid token")) {
//         console.error("401: Invalid token");
//       } else if (errorMessage.includes("Password is incorrect")) {
//         const responseObject: IGenericErrorResponse = {
//           statusCode: error?.response?.data?.statusCode || 500,
//           message: error?.response?.data?.message || "Something went wrong",
//           errorMessages: error?.response?.data?.message,
//         };
//         return Promise.reject(responseObject);
//       } else {
//         console.error("401: You are not authorized");
//       }
//     } else if (error?.response?.status === 403) {
//       console.error("403: Forbidden");
//     } else {
//       const responseObject: IGenericErrorResponse = {
//         statusCode: error?.response?.data?.statusCode || 500,
//         message: error?.response?.data?.message || "Something went wrong",
//         errorMessages: error?.response?.data?.message,
//       };
//       return Promise.reject(responseObject);
//     }
//   }
// );

// export { instance as axiosInstance };


// import axios from "axios";
// import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";
// import { getNewAccessToken } from "@/services/auth.service";
// import { authKey } from "@/constants/auth/storageKey";
// import { IGenericErrorResponse, ResponseSuccessType } from "@/types";
// import { getBaseUrl } from "@/config/envConfig";

// const instance = axios.create({
//   baseURL: getBaseUrl(),
//   withCredentials: true,
// });

// instance.defaults.headers.post["Content-Type"] = "application/json";
// instance.defaults.headers["Accept"] = "application/json";
// instance.defaults.timeout = 60000;

// // Request interceptor
// instance.interceptors.request.use(
//   function (config) {
//     const accessToken = getFromLocalStorage(authKey);
//     if (accessToken) {
//       config.headers.Authorization = accessToken;
//     }
//     return config;
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );

// // Response interceptor
// instance.interceptors.response.use(
//   //@ts-expect-error: response type is not always consistent
//   function (response) {
//     const responseObject: ResponseSuccessType = {
//       data: response?.data?.data,
//       meta: response?.data?.meta,
//     };
//     return responseObject;
//   },
//   async function (error) {
//     const config = await error.config;
//     if (error?.response?.status === 401 && !config?.sent) {
//       config.sent = true;
//       const errorMessage = error?.response?.data?.message || "You are not authorized";

//       if (errorMessage.includes("No token provided")) {

//         console.error("401: You are not authorized");
//       } else if (errorMessage.includes("expired")) {
//         const response = await getNewAccessToken();
//         const newAccessToken = response.data.accessToken;

//         config.headers["Authorization"] = newAccessToken;

//         setToLocalStorage(authKey, newAccessToken);

//         return instance(config);

//       } else if (errorMessage.includes("Invalid token")) {
//         console.error("401: Invalid token");
//       } else if (errorMessage.includes("Password is incorrect")) {
//         const responseObject: IGenericErrorResponse = {
//           statusCode: error?.response?.data?.statusCode || 500,
//           message: error?.response?.data?.message || "Something went wrong",
//           errorMessages: error?.response?.data?.message,
//         };
//         return Promise.reject(responseObject);
//       } else {
//         console.error("401: You are not authorized");
//       }
//     } else if (error?.response?.status === 403) {
//       console.error("403: Forbidden")
//     } else {
//       const responseObject: IGenericErrorResponse = {
//         statusCode: error?.response?.data?.statusCode || 500,
//         message: error?.response?.data?.message || "Something went wrong",
//         errorMessages: error?.response?.data?.message,
//       };
//       return Promise.reject(responseObject);
//     }
//   }
// );

// export { instance as axiosInstance };

import axios from "axios";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";
import { getNewAccessToken } from "@/services/auth.service";
import { authKey } from "@/constants/auth/storageKey";
import { IGenericErrorResponse, ResponseSuccessType } from "@/types";
import { getBaseUrl } from "@/config/envConfig";

const instance = axios.create({
  baseURL: getBaseUrl(),
  withCredentials: true,
});

instance.defaults.headers.post["Content-Type"] = "application/json";
instance.defaults.headers["Accept"] = "application/json";
instance.defaults.timeout = 60000;

// Request interceptor
instance.interceptors.request.use(
  function (config) {
    // Skip adding Authorization header for login endpoint
    if (!config.url?.includes("/auth/login")) {
      const accessToken = getFromLocalStorage(authKey);
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Response interceptor
instance.interceptors.response.use(
  //@ts-expect-error: response type is not always consistent
  function (response) {
    const responseObject: ResponseSuccessType = {
      data: response?.data?.data,
      meta: response?.data?.meta,
    };
    return responseObject;
  },
  async function (error) {
    const config = await error.config;
    if (error?.response?.status === 401 && !config?.sent) {
      config.sent = true;
      const errorMessage = error?.response?.data?.message || "You are not authorized";

      if (errorMessage.includes("No token provided")) {
        console.error("401: You are not authorized");
      } else if (errorMessage.includes("expired")) {
        const response = await getNewAccessToken();
        const newAccessToken = response.data.accessToken;

        config.headers["Authorization"] = `Bearer ${newAccessToken}`;

        setToLocalStorage(authKey, newAccessToken);

        return instance(config);
      } else if (errorMessage.includes("Invalid token")) {
        console.error("401: Invalid token");
      } else if (errorMessage.includes("Password is incorrect")) {
        const responseObject: IGenericErrorResponse = {
          statusCode: error?.response?.data?.statusCode || 500,
          message: error?.response?.data?.message || "Something went wrong",
          errorMessages: error?.response?.data?.message,
        };
        return Promise.reject(responseObject);
      } else {
        console.error("401: You are not authorized");
      }
    } else if (error?.response?.status === 403) {
      console.error("403: Forbidden");
    } else {
      const responseObject: IGenericErrorResponse = {
        statusCode: error?.response?.data?.statusCode || 500,
        message: error?.response?.data?.message || "Something went wrong",
        errorMessages: error?.response?.data?.message,
      };
      return Promise.reject(responseObject);
    }
  }
);

export { instance as axiosInstance };