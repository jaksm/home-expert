import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Title from './Title'
import { useRecentReviewsQuery } from '../API'

export default function RecentReviews() {
  const { loading, error, data } = useRecentReviewsQuery()

  if (error) return <p>Error</p>
  if (loading) return <p>Loading</p>

  return (
    <React.Fragment>
      <Title>Recent Reviews</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Business Name</TableCell>
            <TableCell>User Name</TableCell>
            <TableCell>Review Text</TableCell>
            <TableCell align="right">Review Stars</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.Review?.map((row: any) => (
            <TableRow key={row.id}>
              <TableCell>{row.date.formatted}</TableCell>
              <TableCell>{row.business.name}</TableCell>
              <TableCell>{row.user.name}</TableCell>
              <TableCell>{row.text}</TableCell>
              <TableCell align="right">{row.stars}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  )
}
