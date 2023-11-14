import * as React from 'react'
import { useState } from 'react'
import { useMemo } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import styles from '../DataGridDemo/styles.module.css'
import Modal from '../Modal/Modal'
import Dev from '../Dev/Dev'

import getDataGridColumns from './dataGridColumns'

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

    console.log(cellData)
    setSelectedRowId(cellData.id)
    setInitialValue(valueToSet)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }
  // Modal

  // Column definitions
  const columns = useMemo(() => getDataGridColumns(openModal, styles), [])

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
