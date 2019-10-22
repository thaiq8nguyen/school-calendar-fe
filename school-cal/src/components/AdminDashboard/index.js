import React, { useContext, useEffect, useState } from "react"
import {
  Button,
  Divider,
  Drawer,
  CssBaseline,
  InputLabel,
  Grid,
  List,
  ListItem,
  MenuItem,
  Select,
} from "@material-ui/core"

import AddEvent from "../Events/AddEvent"
import { makeStyles } from "@material-ui/core/styles"
import { db } from "../../firebase"
import Navbar from "../../components/Navbar"

import { AuthContext } from "../../contexts/auth/authState"

const drawerWidth = 240
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(10, 2),
  },
  listItem: {
    display: "flex",
    justifyContent: "center",
  },
}))

const AdminDashBoard = () => {
  const { currentUser } = useContext(AuthContext)
  const [isAddEventOpen, setAddEvent] = useState(false)
  const [calendars, setCalendars] = useState([])
  const [calendar, setCalendar] = useState({ id: "" })

  // load user calendars
  useEffect(() => {
    if (currentUser) {
      db.collection("calendars")
        .where("admins", "array-contains", currentUser.uid)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            const calendar = {
              id: doc.id,
              name: doc.data().name,
              admins: doc.data().admins,
              students: doc.data().students,
            }

            setCalendars([...calendars, calendar])
          })
        })
        .catch(error => {
          console.log(error)
        })
    }
  }, [currentUser])

  // pre-select a default primary calendar
  useEffect(() => {
    if (calendars.length > 0) {
      const primaryCalendarIndex = calendars.findIndex(
        calendar => calendar.name === "primary",
      )

      const primaryCalendar = calendars[primaryCalendarIndex]
      setCalendar({ id: primaryCalendar.id })
    }
  }, [calendars])

  // handling calendar selected from the drop-down
  const handleChange = event => {
    setCalendar({ id: event.target.value })
  }

  const classes = useStyles()
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar drawerWidth={drawerWidth} />
      <Drawer
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
        className={classes.drawer}
        variant="permanent">
        <div className={classes.toolbar} />
        <Divider />
        <List>
          <ListItem
            button
            className={classes.listItem}
            onClick={() => setAddEvent(true)}>
            Add Event
          </ListItem>
        </List>
        <Divider />
        <InputLabel htmlFor="calendars">Calendars</InputLabel>
        <Select onChange={handleChange} value={calendar.id}>
          {calendars.map(calendar => (
            <MenuItem key={calendar.id} value={calendar.id}>
              {calendar.name}
            </MenuItem>
          ))}
        </Select>
      </Drawer>
      <main className={classes.content}></main>
      <AddEvent
        handleClose={() => setAddEvent(false)}
        open={isAddEventOpen}
        calendar={calendar}
      />
    </div>
  )
}

export default AdminDashBoard
