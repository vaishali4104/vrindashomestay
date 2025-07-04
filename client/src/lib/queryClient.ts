// import { QueryClient, QueryFunction } from "@tanstack/react-query";

// async function throwIfResNotOk(res: Response) {
//   if (!res.ok) {
//     const text = (await res.text()) || res.statusText;
//     throw new Error(`${res.status}: ${text}`);
//   }
// }

// export async function apiRequest(
//   method: string,
//   url: string,
//   data?: unknown | undefined,
// ): Promise<Response> {
//   const res = await fetch(url, {
//     method,
//     headers: data ? { "Content-Type": "application/json" } : {},
//     body: data ? JSON.stringify(data) : undefined,
//     credentials: "include",
//   });

//   await throwIfResNotOk(res);
//   return res;
// }

// type UnauthorizedBehavior = "returnNull" | "throw";
// export const getQueryFn: <T>(options: {
//   on401: UnauthorizedBehavior;
// }) => QueryFunction<T> =
//   ({ on401: unauthorizedBehavior }) =>
//   async ({ queryKey }) => {
//     const res = await fetch(queryKey[0] as string, {
//       credentials: "include",
//     });

//     if (unauthorizedBehavior === "returnNull" && res.status === 401) {
//       return null;
//     }

//     await throwIfResNotOk(res);
//     return await res.json();
//   };

// export const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       queryFn: getQueryFn({ on401: "throw" }),
//       refetchInterval: false,
//       refetchOnWindowFocus: false,
//       staleTime: Infinity,
//       retry: false,
//     },
//     mutations: {
//       retry: false,
//     },
//   },
// });
// import { QueryClient } from "@tanstack/react-query";

// export const queryClient = new QueryClient();

// export async function apiRequest(method: string, url: string, data?: any) {
//   const response = await fetch(url, {
//     method,
//     headers: { 'Content-Type': 'application/json' },
//     body: data ? JSON.stringify(data) : undefined,
//   });

//   if (!response.ok) {
//     const error = await response.json();
//     throw new Error(error.message || 'Something went wrong');
//   }

//   return response.json();
// }



// src/lib/queryclient.ts
// import { QueryClient } from "@tanstack/react-query";

// export const queryClient = new QueryClient();

// export async function apiRequest(method: string, url: string, data?: any) {
//   const response = await fetch(url, {
//     method,
//     headers: { "Content-Type": "application/json" },
//     body: data ? JSON.stringify(data) : undefined,
//   });

//   if (!response.ok) {
//     const errorData = await response.json();
//     throw new Error(errorData.message || "Request failed");
//   }

//   return await response.json();
// }
import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

export async function apiRequest(method: string, url: string, data?: any) {
  const BASE_URL = "http://localhost:5000";  //  yahan backend URL de diya
  // const BASE_URL = "https://vrindashomestay.com";

  const response = await fetch(BASE_URL + url, {
    method,
    headers: { "Content-Type": "application/json" },
    body: data ? JSON.stringify(data) : undefined,
  });

  if (!response.ok) {
    // Handle non-JSON error responses safely
    let errorMessage = "Request failed";
    try {
      const errorData = await response.json();
      errorMessage = errorData.message || errorMessage;
    } catch {
      // ignore JSON parse errors (like 404 returning HTML)
    }
    throw new Error(errorMessage);
  }

  // If no content (204), skip json parsing
  if (response.status === 204) return null;

  return await response.json();
}
