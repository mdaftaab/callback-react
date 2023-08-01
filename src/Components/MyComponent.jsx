import React, { useEffect, useState } from 'react';

const MyComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data.map((item) => (
        <>
            <div className='title' key={item.id}>{item.id}. {item.title}</div>
            <div className='body'>{item.body}</div>
        </>
      ))}
    </div>
  );
};

export default MyComponent;
