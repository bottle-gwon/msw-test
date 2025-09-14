import axios from "axios"

/**
 * 
 * 테스트
 */
export async function getProducts() {
  try {
    const response = await axios.get('/api/v1/products');
    console.log(response.data)
    return response.data
  } catch (error) {
    console.error(`상품 가져오기 에러${error}`);
    //나중에 에러처리
  }
}