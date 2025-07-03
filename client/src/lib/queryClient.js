// import { QueryClient, QueryFunction } from "@tanstack/react-query";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
import { QueryClient } from "@tanstack/react-query";
export const queryClient = new QueryClient();
export function apiRequest(method, url, data) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url, {
            method,
            headers: { "Content-Type": "application/json" },
            body: data ? JSON.stringify(data) : undefined,
        });
        if (!response.ok) {
            const errorData = yield response.json();
            throw new Error(errorData.message || "Request failed");
        }
        return yield response.json();
    });
}
