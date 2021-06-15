import React from 'react';
import { Formik } from 'formik';
import { v4 as uuidv4 } from 'uuid';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
} from '@material-ui/core';
import classes from './addCompanyDialog.module.scss';

const AddCompanyDialog = ({
  companyId,
  data,
  isOpen,
  onAdd,
  onEdit,
  onClose,
  isAddCompany,
  isCompanyEdit,
}) => {
  const onSubmit = ({ name, income }) => {
    const company = {
      name,
      income: Number(income),
      id: data?.id || uuidv4(),
      ...(isAddCompany || isCompanyEdit
        ? { fullName: name, subsidiary: data?.subsidiary }
        : { companyId }),
    };
    if (data?.id) {
      onEdit(company);
    } else {
      onAdd(company);
    }

    onClose();
  };

  return (
    <Dialog open={isOpen}>
      <Formik
        key={JSON.stringify(data)}
        initialValues={{
          name: data?.name || '',
          income: data?.income || '',
        }}
        onSubmit={onSubmit}
      >
        {({
          handleChange,
          handleSubmit,
          errors,
          touched,
          values,
        }) => (
          <form onSubmit={handleSubmit}>
            <DialogTitle>Please enter subsidiaries information</DialogTitle>
            <DialogContent>
              <TextField
                className={classes.input}
                id="name"
                name="name"
                label="Company Name"
                value={values.name}
                onChange={handleChange}
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
              />

              <TextField
                className={classes.input}
                required
                id="income"
                name="income"
                label="Income"
                value={values.income}
                onChange={handleChange}
                error={touched.income && Boolean(errors.income)}
                helperText={touched.income && errors.income}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={onClose} color="default">
                CANCEL
              </Button>
              <Button type="submit" color="default">
                SUBMIT
              </Button>
            </DialogActions>
          </form>
        )}
      </Formik>
    </Dialog>
  );
};

export default AddCompanyDialog;
