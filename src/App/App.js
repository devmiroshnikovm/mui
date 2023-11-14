import DataGridDemo from '../DataGridDemo/DataGridDemo'
import styles from '../App/styles.module.css'
import { useState, useCallback } from 'react'


import { createTheme, ThemeProvider } from '@mui/material/styles'

function App() {
  const theme = createTheme({
    components: {
      MuiDataGrid: {
        styleOverrides: {
          cell: {
            borderColor: 'rgba(255, 255, 255, 0.12)', // Custom border color
          },
        },
      },
    },
  })

 
    
  


  const [data, setData] = useState([
   
    {
      id: 1,
      department: 'Human Resources test 55555555555555555555555555555555555',
      positionname: 'HR Manager',
      value: 'High',
      total: 10,
      percentage: 0,
      total1: 8,
    },
    {
      id: 2,
      department: 'Engineering',
      positionname: 'Software Developer',
      value: 'Medium',
      total: 15,
      percentage: 100,
      total1: 234234,
    },
    {
      id: 3,
      department: 'Sales',
      positionname: 'Sales Representative',
      value: 'Low',
      total: 8,
      percentage: 4,
      total1: 1,
    }


  ]);


  const handleInitialDataChange = (id, field, value) => {
    const newData = data.map((row) => 
      row.id === id ? { ...row, [field]: value } : row
    );
    setData(newData);
  };



  return (
    <div className={styles.box}>
      <div className={styles.dataGridContainer}>
        <ThemeProvider theme={theme}>
          <DataGridDemo data={data} onInitialDataChange={handleInitialDataChange}/>
        </ThemeProvider>
      </div>
    </div>
  )
}

export default App
