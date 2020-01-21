export function api<T>(url: string): Promise<T> {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json<T>();
  });
}

export interface ApiResponse {
  status: string;
  totalResults: number;
  articles: ArticleProps[];
}

import { ArticleProps } from "../components/ArticleCell";
