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
} from '../../store/СompaniesReducer/CompanyActions';
import AddCompanyDialog from '../AddCompanyDialog';
import classes from './company.module.scss';

const Company = ({
  company, 
  removeCompany, 
  addNewSubsidiary, 
  editSubsidiary,
  removeSubsidiary,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [editCompanyData, setEditCompanyData] = useState({});

  const subsidiary = (company.subsidiary || []).map(element => (
    <li key={element.id} className={classes.listItem}>
      <Typography variant="subtitle2" className={classes.companyFullName}>
        {element.name}
      </Typography>
      <EditIcon
        onClick={() => {
          setEditCompanyData(element);
          setIsOpen(!isOpen);
        }}
      />
      <CloseIcon onClick={()=>{deleteSubsidiary(element.id)}}/>
    </li>
  ));

  const deleteSubsidiary = (subsidiaryId) => {
    removeSubsidiary({subsidiaryId, companyId: company.id})
  }

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

      <ul className={classes.listStack}>{subsidiary}</ul>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        variant="outlined"
        color="primary"
      >
        ADD
      </Button>
      <AddCompanyDialog
        companyId={company.id}
        data={editCompanyData}
        onAdd={addNewSubsidiary}
        onEdit={editSubsidiary}
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
          setEditCompanyData({});
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Company);
