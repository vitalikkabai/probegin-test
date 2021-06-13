import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useFormik } from 'formik';
import { v4 as uuidv4 } from 'uuid';
import {
  Typography,
  Grid,
  Button,
  TextField,
  Container,
} from '@material-ui/core';
import { setNewCompany } from '../../store/СompaniesReducer/CompanyActions';
import Company from '../Company';
import classes from './Companies.module.scss';

const Сompanies = ({ companiesList, setNewCompany }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      income: '',
    },
    onSubmit: ({ name, income }) => {
      setNewCompany({
        fullName: name,
        shortName: name,
        income,
        id: uuidv4(),
      });
    },
  });

  const company = (companiesList || []).map(element => (
    <Company key={element.id} company={element} />
  ));

  return (
    <>
      <Typography variant="h3">Corporation</Typography>
      <Grid
        container
        wrap="nowrap"
        className={classes.companies}
        direction="row"
        justify="space-around"
      >
        {company}
      </Grid>
      <Grid container direction="column" justify="center">
        <form onSubmit={formik.handleSubmit}>
          <Container className={classes.inputArea}>
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
          </Container>
          <Container>
            <Button type="submit" variant="outlined" color="primary">
              ADD
            </Button>
          </Container>
        </form>
      </Grid>
    </>
  );
};

const mapStateToProps = state => ({
  companiesList: state.СompaniesReducer.companies,
});

const mapDispatchToProps = dispatch => ({
  setNewCompany: company => dispatch(setNewCompany(company)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Сompanies);
