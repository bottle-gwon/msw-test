export default function ProductCard({data}) {
    
  const onClickhandler = () => {
    console.log('move to detail')
  }
    
  return(
  <div className="flex flex-col cursor-pointer w-1/4  pb-8" onClick={onClickhandler}>
    <img src={`https://picsum.photos/id/${data.product_id}/400/600`} alt={data.name}/>
    <p className={`font-extralight ${data?.is_active? 'text-black': 'text-gray-400'}`}>{data.category_id}</p>
    <p className={`font-medium ${data?.is_active? 'text-black': 'text-gray-400'}`}>{data.name}</p>
    <p className={`font-bold ${data?.is_active? 'text-black': 'text-gray-400'}`}>{data.price.toLocaleString()}원</p>
    <span>{data?.is_active ? '' : '품절'}</span>
  </div>
  )
}