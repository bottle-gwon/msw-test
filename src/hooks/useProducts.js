import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/getProducts";

export function useProducts({params}) {
  return useQuery({
    queryKey: ['products', params],
    queryFn: getProducts,
    staleTime: 1000 * 60 * 5, //5분 지속

  })
}