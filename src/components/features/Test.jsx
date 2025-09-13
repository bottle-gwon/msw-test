import { useProducts } from "../../hooks/useProducts";

export default function Test () {
  const { data: products, isLoading, isError, error } = useProducts();


  console.log(products)
  return(
  
  <>
  
  </>
  
)
}