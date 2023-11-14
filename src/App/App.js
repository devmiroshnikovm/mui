import DataGridDemo from '../DataGridDemo/DataGridDemo'
import styles from '../App/styles.module.css'
import { useState,useEffect } from 'react'
import getDate from "../services/getDate"
/* import { createTheme, ThemeProvider } from '@mui/material/styles' */

function App() {
/*   const theme = createTheme({
    components: {
      MuiDataGrid: {
        styleOverrides: {
          cell: {
            borderColor: 'rgba(255, 255, 255, 0.12)', // Custom border color
          },
        },
      },
    },
  }) */

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getDate(); 
        setData(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  


  const handleInitialDataChange = (id, field, value) => {
    const newData = data.map((row) => 
      row.id === id ? { ...row, [field]: value } : row
    );
    setData(newData);
  };



  return (
    <div className={styles.box}>
      <div className={styles.dataGridContainer}>
        {/* <ThemeProvider theme={theme}> */}
          <DataGridDemo data={data} onInitialDataChange={handleInitialDataChange}/>
      {/*   </ThemeProvider> */}
      </div>
    </div>
  )
}

export default App
