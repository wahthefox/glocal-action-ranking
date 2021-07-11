import React from 'react'
import styled from 'styled-components'

import { useEnrollments } from 'utils/api'
import Loader from 'components/loader'
import Table from 'components/table'

const Styles = styled.div`
  padding: 1rem;

  table {
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 400px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    width: 100%;

    thead tr {
      background-color: #A7B459;
      color: #ffffff;
      text-align: left;
    }

    thead th,
    td {
      padding: 12px 15px;
    }

    tbody tr {
      border-bottom: 1px solid #dddddd;
    }

    tbody tr:nth-of-type(even) {
      background-color: #f3f3f3;
    }

    tbody tr:last-of-type {
        border-bottom: 2px solid #5E7835;
    }

    tbody tr.active-row {
      font-weight: bold;
      color: #009879;
    }
  }
`

function App() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Rank',
        accessor: "",
        Cell: (row) => {
          return <div>{parseInt(row.row.id) + 1}</div>;
        },
      },
      {
        Header: 'Visits',
        accessor: d => (
          <div className="wrapper">
            {d.user.first_name} {d.user.last_name}
          </div>
        )
      },
      {
        Header: 'Miles',
        accessor: 'miles',
      },
      {
        Header: 'Progress',
        accessor: d => (
          <div className="wrapper">
            {(d.progress * 100).toFixed(2) + '%'}
          </div>
        )
      },
    ],
    []
  )

  const { data, error } = useEnrollments('3ccbaf9d-867d-4a3c-bb75-9c9d815d6472')
    if (error) return <h1>Something went wrong!</h1>
    if (!data) return <Loader />

    return (
      <Styles>
        <Table columns={columns} data={data} />
      </Styles>
    )
}
export default App
