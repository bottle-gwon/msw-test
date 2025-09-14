import ProductCard from "./ProductCard";

export default function ProductList({datas, isLoading}){

  //임시 로딩
  if(isLoading){
    return(<>
      로딩....
    </>)
  }
  console.log(datas)

  return(
    <div>
      <div className="flex items-center justify-between">
        <p>{`결과 ${datas.total}개`}</p>
        <p>정렬 기준</p>
      </div>
      <div className="flex flex-wrap items-center justify-center pt-5">
        {datas.items.map((el)=> <ProductCard data={el}/>)}
      </div>
    </div>
  )
}