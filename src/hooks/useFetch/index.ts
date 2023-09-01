import { useState, useCallback } from "react";

export type CustomFetch = <T>() => {
  loading: boolean;
  data: T | null;
  error: any;
  load: (input: RequestInfo, init: RequestInit) => void;
}

export const useFetch: CustomFetch = <T,>() => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | any>(null);
  const [data, setData] = useState<T | null>(null);

  const customFetch = useCallback((input: RequestInfo, init: RequestInit) => {
    setData(null);
    setError(null)
    if (!input) return;
    (async () => {
      setLoading(true);
      try {
        const response = await fetch(input, init);
        const responseText = await response.text();
        const data: T = responseText ? JSON.parse(responseText) : {}
        
        setLoading(false);
        if(response.ok) setData(data);
        else setError({status: response.status, statusText: response.statusText, data})
      
      } catch (error) {
        setError(error);
      }
    })();
  }, []);

  return { loading, data, error, load: customFetch };
};