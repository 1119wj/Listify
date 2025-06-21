interface CustomRequestInit extends RequestInit {}

async function customFetch(
  input: string | URL | Request,
  init?: CustomRequestInit
) {
  const response = await fetch(input, init);

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    console.error("API Error:", errorBody);
    throw new Error(`API call failed with status: ${response.status}`);
  }
  return response;
}

async function requestWithBody<T>(
  method: "POST" | "PUT" | "PATCH",
  url: string,
  body: any,
  options?: CustomRequestInit
): Promise<T> {
  const response = await customFetch(url, {
    ...options,
    method: method,
    headers: { "Content-Type": "application/json", ...options?.headers },
    body: JSON.stringify(body),
  });
  return response.json();
}

export const http = {
  get: async <T>(url: string, options?: CustomRequestInit): Promise<T> => {
    const response = await customFetch(url, { ...options, method: "GET" });
    return response.json();
  },
  post: <T>(
    url: string,
    body: any,
    options?: CustomRequestInit
  ): Promise<T> => {
    return requestWithBody("POST", url, body, options);
  },
  put: <T>(url: string, body: any, options?: CustomRequestInit): Promise<T> => {
    return requestWithBody("PUT", url, body, options);
  },
  delete: async <T>(url: string, options?: CustomRequestInit): Promise<T> => {
    const response = await customFetch(url, {
      ...options,
      method: "DELETE",
    });

    const text = await response.text();
    return text ? JSON.parse(text) : ({} as T);
  },
};
