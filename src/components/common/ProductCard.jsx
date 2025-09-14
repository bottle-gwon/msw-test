export default function ProductCard({data}) {
    
    
  return(
  <div className="flex flex-col w-1/6">
    <img src={`https://picsum.photos/id/${data.product_id}/400/600`} alt={data.name}/>
    {data.product_id}
    {data.name}
  </div>
  )
}