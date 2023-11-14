import * as React from 'react'
import { useState, useCallback } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import PercentageCell from '../PercentageCell/PercentageCell'
import styles from '../DataGridDemo/styles.module.css'
import TextField from '@mui/material/TextField'
import Modal from '../Modal/Modal'
import Dev from '../Dev/Dev'

export default function DataGridDemo({ data, onInitialDataChange }) {
  // Modal
  const [isModalOpen, setModalOpen] = useState(false)
  const [initialValue, setInitialValue] = useState('')
  const [selectedRowId, setSelectedRowId] = useState(null)

  React.useEffect(() => {}, [initialValue])

  const handleUpdate = (id, updatedValue) => {
    console.log(id, updatedValue) // correct
    onInitialDataChange(id, 'total1', updatedValue)
  }

  const onSubmitHandle = () => {
    closeModal()
  }

  const openModal = (cellData, columnName) => {
    const valueToSet =
      cellData && columnName in cellData ? cellData[columnName] : ''
    setSelectedRowId(cellData.id)
    setInitialValue(valueToSet)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }
  // Modal

  // Column definitions

  const columns = React.useMemo(
    () => [
      {
        field: 'id',
        headerName: 'ID',
        flex: 0.5,
        headerClassName: `${styles.boldHeader} ${styles.headerBgColor}`,
      },
      {
        field: 'department',
        headerName: 'Department',
        flex: 3,
        renderCell: (params) => (
          <div className={styles.dataGridCell}>{params.value}</div>
        ),
        headerClassName: `${styles.boldHeader} ${styles.headerBgColor}`,
      },
      {
        field: 'positionname',
        headerName: 'Position Name',
        flex: 1.5,
        renderCell: (params) => (
          <div className={styles.dataGridCell}>{params.value}</div>
        ),
        headerClassName: `${styles.boldHeader} ${styles.headerBgColor}`,
      },
      {
        field: 'value',
        headerName: 'Value',
        flex: 1,
        renderCell: (params) => (
          <div className={styles.dataGridCell}>{params.value}</div>
        ),
        headerClassName: `${styles.boldHeader} ${styles.headerBgColor}`,
      },
      {
        field: 'total',
        headerName: 'Total',
        flex: 1,
        renderCell: (params) => (
          <div className={styles.dataGridCell}>{params.value}</div>
        ),
        headerClassName: `${styles.boldHeader} ${styles.headerBgColor}`,
      },
      {
        field: 'percentage',
        headerName: 'Percentage',
        flex: 1,
        renderCell: (params) => (
          <PercentageCell
            className={styles.dataGridCell}
            value={params.value}
          />
        ),
        headerClassName: `${styles.boldHeader} ${styles.headerBgColor}`,
      },

      {
        field: 'total1',
        headerName: 'total1',
        flex: 1,
        renderCell: (params) => (
          <div
            onClick={(e) => {
              e.stopPropagation()
              openModal(params.row, 'total1')
            }}
          >
            <TextField
              size="small"
              variant="outlined"
              value={params.value}
              onChange={(e) => {}}
              InputProps={{
                sx: {
                  fontSize: '0.875rem',
                  height: '100%',
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'transparent',
                  },
                },
              }}
              sx={{
                '& .MuiTextField-root': { m: 0, height: '100%' },
              }}
            />
          </div>
        ),
        headerClassName: `${styles.boldHeader} ${styles.headerBgColor}`,
      },
    ],
    [openModal]
  )

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <DataGrid
        columnVisibilityModel={{
          id: false,
        }}
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        showColumnVerticalBorder={false}
        sx={{
          '& .MuiDataGrid-cell': {
            border: '1px solid #ccc',
            borderRight: '0',
            borderTop: '0',
          },
        }}
      />

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <Dev
          onSubmitHandle={onSubmitHandle}
          initialValue={initialValue}
          handleUpdate={handleUpdate}
          rowId={selectedRowId}
        />
      </Modal>
    </div>
  )
}
