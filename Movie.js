// SomeComponent.js
import React, { useEffect, useState } from 'react';
import { fetchData } from './MovieRequests';

const Movie = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
       
      const result = await fetchData(1, 10, 'json');
      if (result && result.data) {
        setData(result.data);
      } else {
        setData([]); // 응답이 없을 때 빈 배열 설정
      }
      setLoading(false);
    };

    getData();
  }, []);

  if (loading) {
    return <div>로딩 중...</div>;
  }

  if (!data.length) {
    return <div>데이터가 없습니다.</div>;
  }

  return (
   <div>
      <h1>서울특별시 성동구_영화상영관현황</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {item.상영관명} - {item.상영관소재지주소} - {item.전화번호}
          </li>
        ))}
      </ul>
   </div>
  );
};

export default Movie;