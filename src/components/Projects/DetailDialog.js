import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Dialog, Typography } from "@material-ui/core/";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import "./di.css";

//import CircularLoading from "features/CircularLoading";

const styles = (theme) => ({
  root: {
    margin: 0,
    paddingTop: "1rem",
    paddingBottom: "0.2rem",
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
    border: "none !important",
    outline: "none !important",
  },
  dialogPaper: {
    borderRadius: "10px",
  },
});
const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});
const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

class NeutrationDialog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: props.open,
    };
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Dialog
          onClose={this.props.handleClose}
          aria-labelledby="customized-dialog-title"
          open={this.props.open}
          fullWidth={true}
          disableBackdropClick
          scroll="body"
          classes={{ paper: classes.dialogPaper }}
        >
          <DialogTitle
            style={{
              textAlign: "center",
              fontFamily: "Exo 2",
            }}
            onClose={this.props.handleClose}
          >
            {this.props.nutritionOf}
          </DialogTitle>

          <DialogContent>
            <div className="n-info">
              {/* <h4>Nutrition Details for Family Package</h4> */}
              <div
                dangerouslySetInnerHTML={{
                  __html: this.props.nutrition_details,
                }}
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}
export default withStyles(styles)(NeutrationDialog);
