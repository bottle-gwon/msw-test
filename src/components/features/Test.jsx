import { useProducts } from "../../hooks/useProducts";
import ProductList from "../common/ProductList";

export default function Test () {
  const { data: products, isLoading, isError, error } = useProducts();


  //임시 에러
  if(isError){
    return(<>
      {error}
    </>)
  }

  return(
  
  <>
    <ProductList datas={products} isLoading={isLoading}/>
  </>
  
)
}