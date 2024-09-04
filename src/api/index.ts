type HttpMethod = "get" | "post" | "put" | "delete";

export const fetcher = async <T>(
  url: string,
  method: HttpMethod = "get",
  body?: T
) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}${url}`, {
    method,
    ...(body && { headers: { "Content-Type": "application/json" } }),
    ...(body && { body: JSON.stringify(body) }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch");
  }

  if (response.status === 204) {
    return null;
  }

  return await response.json();
};
