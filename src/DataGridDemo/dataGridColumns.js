import PercentageCell from '../PercentageCell/PercentageCell'
import TextField from '@mui/material/TextField'

const getDataGridColumns = (openModal, styles) => [
  {
    field: 'id',
    headerName: 'ID',
    flex: 0.5,
    headerClassName: `${styles.boldHeader} ${styles.headerBgColor}`,
  },
  /* {
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
      }, */

  {
    field: 'installationcomments',
    headerName: 'СМР',
    flex: 1,
    renderCell: (params) => (
      <div
        onClick={(e) => {
          e.stopPropagation()
          openModal(params.row, params.field)
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

  {
    field: 'pnrcomments',
    headerName: 'ПНР',
    flex: 1,
    renderCell: (params) => (
      <div
        onClick={(e) => {
          e.stopPropagation()
          openModal(params.row, params.field)
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

  {
    field: 'iddoccomments',
    headerName: 'ИД',
    flex: 1,
    renderCell: (params) => (
      <div
        onClick={(e) => {
          e.stopPropagation()
          openModal(params.row, params.field)
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
]

export default getDataGridColumns
