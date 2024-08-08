import React, { useState, useEffect } from 'react';

function APIuse() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const result = await response.json();
            setData(result);
        };
        fetchData();
    }, []);

    const DataCard = ({ prop }) => {
        return (
            <div className="card py-4 px-4">
                <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-300 dark:border-gray-700 dark:hover:bg-yellow-300">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-blue-900 dark:text-blue-600">{prop.id}</h5>
                    <p className="font-normal text-blue-700 dark:text-blue-900">{prop.name}</p>
                    <p className="font-normal text-blue-700 dark:text-blue-900">{prop.username}</p>
                    <p className="font-normal text-blue-700 dark:text-blue-900">{prop.email}</p>
                    <p className="font-normal text-blue-700 dark:text-blue-900">{prop.desc}</p>
                </a>
            </div>
        );
    };

    return (
        <div className='grid grid-cols-3'>
            {data.map((each) => (
                <DataCard key={each.id} prop={each} />
            ))}
        </div>
    );
}

export default APIuse;
