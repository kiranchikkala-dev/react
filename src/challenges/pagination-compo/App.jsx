import React, { useEffect, useState } from 'react';

const App = () => {
  const [list, setListed] = useState([]);
  const fetchApi = async () => {
    const pageNumber = 1;
    const limit = 10;

    fetch(
      `https://jsonplaceholder.typicode.com/photos?_page=${pageNumber}&_limit=${limit}`
    )
      .then((res) => res.json())
      .then((data) => setListed(data))
      .catch((err) => {
        if (err.name === 'AbortError') {
          console.log('Fetch aborted');
        } else {
          console.error('Fetch error:', err);
        }
      });
  };
  useEffect(() => {
    fetchApi();
  }, []);

  return <div>{console.log(list)}</div>;
};

export default App;
