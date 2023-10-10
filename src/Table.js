import React, { Component } from 'react'

const TableBody = () => {
    return <tbody />
  }

const TableHeader = () => {
    return (
      <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
        </tr>
      </thead>
    )
  }

  class Table extends Component {
    render() {
        const { characterData } = this.props
              
        return (
        <table>
          <TableHeader />
          <TableBody characterData={characterData} />
        </table>
      )
    }
  }

export default Table