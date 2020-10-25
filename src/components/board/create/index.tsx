import React from "react";
import { Card, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  iconCreateButton: {
    width: 48,
    height: 48,
    borderRadius: "50%",
    backgroundColor: theme.palette.info.dark,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  iconCreate: {
    color: theme.palette.common.white,
  },
  createButton: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  card: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
export default function CreateBoard() {
  const classes = useStyles();
  return (
    <Card variant="outlined" className={classes.card}>
      <div className={classes.createButton}>
        <div className={classes.iconCreateButton}>
          <AddIcon className={classes.iconCreate} />
        </div>
        <Typography variant="subtitle2" color="textSecondary">
          Create Board
        </Typography>
      </div>
    </Card>
  );
}
