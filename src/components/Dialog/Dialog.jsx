import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';

const newDialog = props => {
    const {isOpen, handleClose,handleConfirm} = props;

    return (
        <Dialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Do you want delete all data?"}</DialogTitle>
        <DialogActions>
          <Button onClick={handleConfirm} color="primary">
            OK
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    );
};

newDialog.propTypes = {
    isOpen: PropTypes.bool,
    handleClose: PropTypes.func,
    handleConfirm: PropTypes.func,
};

newDialog.defaultProps ={
    isOpen:false,
}

export default newDialog;