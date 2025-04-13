import React, { useEffect, useState } from 'react';
import './App.css';
import Card from './Components/Card';
import Papa from 'papaparse';
import axios from 'axios';
const url = `https://docs.google.com/spreadsheets/d/e/2PACX-1vTe_LJ-lD32kI0-wSiTLIEbYYgcWGshVMEB1DgmeeQGJfE3KhMHzGNmW8crHZ7jpRYKqULKIjUXS8-t/pub?gid=0&single=true&output=csv`;

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url, { responseType: 'blob' }); // Загружаем CSV как blob
        Papa.parse(response.data, {
          header: true, // Учитываем заголовки колонок
          complete: (result) => {
            const formattedData = result.data.map((row) => ({
              id: row.id,
              title: row.title,
              image: row.image_link,
              collected: row.collected === 'true', // Преобразуем строку в boolean
            }));
            setData(formattedData);
          },
          error: (error) => {
            console.error('Error parsing CSV:', error);
          },
        });
      } catch (error) {
        console.error('Error fetching CSV:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="app-container">
      <header className="app-header">My Retro Games Collection</header>
      <div className="card-box">
        {data.map((console) => (
          <Card
            key={console.id}
            title={console.title}
            image={console.image}
            collected={console.collected}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
