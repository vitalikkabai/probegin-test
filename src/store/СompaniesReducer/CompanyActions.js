import {
  ADD_NEW_COMPANY,
  REMOVE_COMPANY,
  ADD_NEW_SUBSIDIARY,
  EDIT_SUBSIDIARY,
  REMOVE_SUBSIDIARY,
  EDIT_COMPANY,
} from './CompanyActionType';

export const addNewCompany = company => ({
  type: ADD_NEW_COMPANY,
  payload: company,
});

export const removeCompany = companyId => ({
  type: REMOVE_COMPANY,
  payload: companyId,
});

export const addNewSubsidiary = subsidiary => ({
  type: ADD_NEW_SUBSIDIARY,
  payload: subsidiary,
});

export const editSubsidiary = editedSubsidiary => ({
  type: EDIT_SUBSIDIARY,
  payload: editedSubsidiary,
});

export const removeSubsidiary = subsidiaryId => ({
  type: REMOVE_SUBSIDIARY,
  payload: subsidiaryId,
});

export const editCompany = editedCompany => ({
  type: EDIT_COMPANY,
  payload: editedCompany,
});
