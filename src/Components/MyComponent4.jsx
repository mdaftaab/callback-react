import React from 'react';
import { useAsync } from 'react-async';

const fetchData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  return response.json();
};

const MyComponent4 = () => {
  const { data, error, isLoading } = useAsync({ promiseFn: fetchData });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}><span>{item.id}.</span> {item.title} {item.completed} </div>
      ))}
    </div>
  );
};

export default MyComponent4;
