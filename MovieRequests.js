const BASE_URL = process.env.REACT_APP_API_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchData = async (page = 1, perPage = 10) => {
    try {
      const endpoint = '/15084626/v1/uddi:816991ec-cc50-4be7-80fc-a4ebccc1ccd9'; // 엔드포인트 추가
      
      // 요청 URL을 출력
      console.log(`${BASE_URL}${endpoint}이다${page}페이지이다${perPage}퍼페이지이다`);
      
      const url = `${BASE_URL}${endpoint}?page=${page}&perPage=${perPage}&serviceKey=${API_KEY}`;
      console.log('요청 URL:', url);
  
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        }
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
      return null;
    }
  };