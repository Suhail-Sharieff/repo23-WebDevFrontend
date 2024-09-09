import { useState, useEffect } from 'react';

export function API() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        let raw = await fetch('https://jsonplaceholder.typicode.com/users');
        let json = await raw.json();

        const formattedData = json.map(user => [user.name, user.email]);
        setData(formattedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="flex flex-wrap gap-4 bg-violet-200 justify-center">
      {data.map((item, index) => (
        <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Name: {item[0]}</div>
            <p className="text-gray-700 text-base">
              Email: {item[1]}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
