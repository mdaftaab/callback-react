import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyComponent2 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data.map((item) => (
        <div className='title' key={item.id}>{item.id}. {item.name} <span>{item.email}</span></div>
      ))}
    </div>
  );
};

export default MyComponent2;
