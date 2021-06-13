import { SET_NEW_COMPANY, REMOVE_COMPANY, SET_NEW_SUBSIDIARY } from "./CompanyActionType"

export const setNewCompany = (company) => ({
    type: SET_NEW_COMPANY,
    payload: company,
})

export const removeCompany = (companyId) => ({
    type: REMOVE_COMPANY,
    payload: companyId,
})

export const setNewSubsidiary = (subsidiary) => ({
    type: SET_NEW_SUBSIDIARY,
    payload: subsidiary
})