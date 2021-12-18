import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Container } from '@mui/material';



const Forms = () => {

  const [pageSize, setPageSize] = React.useState(5);

  

  const rows = [
    { id: 1, name: 'Gourav', age: 12 },
    { id: 2, name: 'Geek', age: 43 },
    { id: 3, name: 'Pranav', age: 41 },
    { id: 4, name: 'Abhay', age: 34 },
    { id: 5, name: 'Pranav', age: 73 },
    { id: 6, name: 'Disha', age: 61 },
    { id: 7, name: 'Raghav', age: 72 },
    { id: 8, name: 'Amit', age: 24 },
    { id: 9, name: 'Anuj', age: 48 },
  ];
  const columns = [
    { field: 'id', headerName: 'ID', width: 170,editable: true,  },
    { field: 'name', headerName: 'NAME', width: 170,editable: true, },
    { field: 'age', headerName: 'AGE', width: 170 , editable: true,},
  ];
 

  return (
    <>
    <Container>
       <div style={{ height: 400, width: '80%', background:'white', margin:"50px" }}>
      <h4 className='text-center'>  Use Pagination in DataGrid Component in ReactJS </h4>
      <DataGrid rows={rows} columns={columns} 
      pageSize={pageSize}
      onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
      rowsPerPageOptions={[5, 10, 20]}
      checkboxSelection={true}
      editMode="true"
      onEditRowsModelChange={true}
      disableSelectionOnClick
      editMode="row"
      />
    </div>
    </Container>
    </>
  )
}

export default Forms;
