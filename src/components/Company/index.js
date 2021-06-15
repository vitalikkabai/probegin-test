import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Typography,
  Box,
  Button,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';
import {
  removeCompany,
  addNewSubsidiary,
  editSubsidiary,
  removeSubsidiary,
  editCompany,
} from '../../store/СompaniesReducer/CompanyActions';
// eslint-disable-next-line
import AddCompanyDialog from '../AddCompanyDialog';
import classes from './company.module.scss';

// eslint-disable-next-line
const Company = ({ company, removeCompany, addNewSubsidiary, editSubsidiary, removeSubsidiary, editCompany }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [editCompanyData, setEditCompanyData] = useState({});
  const [isCompanyEdit, setIsCompanyEdit] = useState(false);

  const subsidiary = (company.subsidiary || []).map(element => (
    <li key={element.id} className={classes.listItem}>
      <Typography variant="subtitle2" className={classes.companyFullName}>
        {element.name}
        :
        {' '}
        {element.income}
        $
      </Typography>
      <Button
        className={classes.editSubsidiaryButton}
        onClick={() => {
          setEditCompanyData(element);
          setIsOpen(!isOpen);
        }}
      >
        <EditIcon />
      </Button>
      <Button
        className={classes.deleteSubsidiaryButton}
        onClick={() => { deleteSubsidiary(element.id); }}
      >
        <CloseIcon />
      </Button>
    </li>
  ));

  const deleteSubsidiary = (subsidiaryId) => {
    removeSubsidiary({ subsidiaryId, companyId: company.id });
  };

  const deleteCompany = () => {
    removeCompany(company.id);
  };

  const totalIncome = Number(
    company
      .subsidiary
      .reduce((sum, curr) => (
        sum + curr.income
      ), 0),
  ) + Number(company.income);

  return (
    <Container className={classes.company}>
      <Box className={classes.titleBox}>
        <Box className={classes.typographyBox}>
          <Typography variant="subtitle1" className={classes.companyFullName}>
            {company.fullName}
          </Typography>
          <Typography variant="subtitle1" className={classes.companyFullName}>
            income:
            {' '}
            {company.income}
            $
          </Typography>
        </Box>

        <Button onClick={() => {
          setIsOpen(!isOpen);
          setIsCompanyEdit(true);
        }}
        >
          <EditIcon/>
        </Button>
        <Button onClick={deleteCompany} className={classes.deleteCompanyButton}>
          <DeleteIcon />
        </Button>
      </Box>

      <ul className={classes.listStack}>{subsidiary}</ul>
      <Box className={classes.totalIncome}>
        <Button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          variant="outlined"
          color="default"
        >
          ADD
        </Button>
        <Typography variant="subtitle2">
          Total income:
          {' '}
          {totalIncome}
          $
        </Typography>
      </Box>

      <AddCompanyDialog
        companyId={company.id}
        data={isCompanyEdit ? company : editCompanyData}
        isCompanyEdit={isCompanyEdit}
        onAdd={addNewSubsidiary}
        onEdit={isCompanyEdit ? editCompany : editSubsidiary}
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
          setEditCompanyData({});
          setIsCompanyEdit(false);
        }}
      />
    </Container>
  );
};

const mapStateToProps = state => ({
  state,
});

const mapDispatchToProps = dispatch => ({
  removeCompany: companyId => dispatch(removeCompany(companyId)),
  addNewSubsidiary: subsidiary => dispatch(addNewSubsidiary(subsidiary)),
  editSubsidiary: editedSubsidiary => dispatch(editSubsidiary(editedSubsidiary)),
  removeSubsidiary: subsidiaryId => dispatch(removeSubsidiary(subsidiaryId)),
  editCompany: editedCompany => dispatch(editCompany(editedCompany)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Company);
