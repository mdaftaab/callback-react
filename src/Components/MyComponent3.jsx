import React, { useEffect, useState } from 'react';

const MyComponent3 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      {data.map((item) => (
        <div className='title' key={item.id}><span>{item.id}.</span> {item.title}</div>
      ))}
    </div>
  );
};

export default MyComponent3;
