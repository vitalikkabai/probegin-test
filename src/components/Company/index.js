import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useFormik } from 'formik';
import { v4 as uuidv4 } from 'uuid';
import {
  Container,
  Typography,
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {
  removeCompany,
  setNewSubsidiary,
} from '../../store/СompaniesReducer/CompanyActions';
import classes from './Company.module.scss';

const Company = ({ company, removeCompany, setNewSubsidiary }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: '',
      income: '',
    },
    onSubmit: ({ name, income }) => {
      setNewSubsidiary({
        name,
        income,
        id: uuidv4(),
        companyId: company.id,
      });
      setOpenDialog(!openDialog);
    },
  });

  const subsidiary = (company.subsidiary || []).map(element => (
    <li key={element.id}>
      <Typography variant="subtitle2" className={classes.companyFullName}>
        {element.name}
      </Typography>
    </li>
  ));

  const deleteCompany = () => {
    removeCompany(company.id);
  };

  return (
    <Container className={classes.company}>
      <Box className={classes.titleBox}>
        <Typography variant="subtitle1" className={classes.companyFullName}>
          {company.fullName}
        </Typography>
        <DeleteIcon onClick={deleteCompany} className={classes.deleteIcon} />
      </Box>

      <ul className={classes.listItem}>{subsidiary}</ul>
      <Button
        onClick={() => setOpenDialog(!openDialog)}
        type="button"
        variant="outlined"
        color="primary"
      >
        ADD
      </Button>
      <Dialog open={openDialog}>
        <form onSubmit={formik.handleSubmit}>
          <DialogTitle>Please enter subsidiaries information</DialogTitle>
          <DialogContent>
            <TextField
              className={classes.input}
              id="name"
              name="name"
              label="Company Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />

            <TextField
              className={classes.input}
              required
              id="income"
              name="income"
              label="Income"
              value={formik.values.income}
              onChange={formik.handleChange}
              error={formik.touched.income && Boolean(formik.errors.income)}
              helperText={formik.touched.income && formik.errors.income}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenDialog(!openDialog)} color="primary">
              CANCEL
            </Button>
            <Button type="submit" color="primary">
              ADD
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </Container>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  removeCompany: companyId => dispatch(removeCompany(companyId)),
  setNewSubsidiary: subsidiary => dispatch(setNewSubsidiary(subsidiary)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Company);
