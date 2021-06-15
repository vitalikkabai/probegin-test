import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Typography,
  Grid,
  Button,
} from '@material-ui/core';
// eslint-disable-next-line
import AddCompanyDialog from '../AddCompanyDialog';
import { addNewCompany } from '../../store/СompaniesReducer/CompanyActions';
import Company from '../Company';
import classes from './companies.module.scss';
// eslint-disable-next-line
const Сompanies = ({ companiesList, addNewCompany }) => {
  const [isOpen, setIsOpen] = useState(false);

  const company = (companiesList || []).map(element => (
    <Company key={element.id} company={element} />
  ));

  return (
    <Grid
      container
      wrap="nowrap"
      direction="column"
      className={classes.mainContainer}
    >
      <Typography className={classes.mainTitle} variant="h3">Corporation</Typography>
      <Grid
        container
        wrap="nowrap"
        className={classes.companies}
        direction="column"
      >
        {company}
      </Grid>
      <Grid
        container
        direction="column"
        className={classes.buttonGrid}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          type="submit"
          variant="outlined"
          color="default"
          className={classes.addCompanyButton}
        >
          ADD
        </Button>
        <AddCompanyDialog
          isOpen={isOpen}
          onAdd={addNewCompany}
          onClose={() => {
            setIsOpen(false);
          }}
          isAddCompany
        />
      </Grid>
    </Grid>
  );
};

const mapStateToProps = state => ({
  companiesList: state.СompaniesReducer.companies,
});

const mapDispatchToProps = dispatch => ({
  addNewCompany: company => dispatch(addNewCompany(company)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Сompanies);
