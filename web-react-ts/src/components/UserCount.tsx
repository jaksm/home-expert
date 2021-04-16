import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Title from './Title'
import { useUserCountQuery } from '../API'

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
  navLink: {
    textDecoration: 'none',
  },
})

export default function Deposits() {
  const classes = useStyles()

  const { error, loading, data } = useUserCountQuery()
  if (error) return <p>Error</p>

  return (
    <React.Fragment>
      <Title>Total Users</Title>
      <Typography component="p" variant="h4">
        {loading ? 'Loading...' : data?.userCount}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        users found
      </Typography>
      <div>
        <Link to="/users" className={classes.navLink}>
          View users
        </Link>
      </div>
    </React.Fragment>
  )
}
