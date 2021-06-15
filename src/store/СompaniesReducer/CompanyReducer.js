import { v4 as uuidv4 } from 'uuid';
import {
  ADD_NEW_COMPANY,
  REMOVE_COMPANY,
  ADD_NEW_SUBSIDIARY,
  EDIT_SUBSIDIARY,
  REMOVE_SUBSIDIARY,
  EDIT_COMPANY,
} from './CompanyActionType';

const initialState = {
  companies: [
    {
      name: 'Volkswagen',
      fullName: 'VOLKSWAGEN AUTO GROUP',
      income: 2518648,
      id: uuidv4(),
      subsidiary: [
        {
          name: 'Audi',
          income: 231531,
          id: uuidv4(),
        },
        {
          name: 'Skoda',
          income: 13213,
          id: uuidv4(),
        },
        {
          name: 'Bugatti',
          income: 131313,
          id: uuidv4(),
        },
        {
          name: 'Bentley',
          income: 113131,
          id: uuidv4(),
        },
        {
          name: 'Porsche',
          income: 4845651,
          id: uuidv4(),
        },
        {
          name: 'Lamborghini',
          income: 4845651,
          id: uuidv4(),
        },
        {
          name: 'Seat',
          income: 235544,
          id: uuidv4(),
        },
        {
          name: 'MAN',
          income: 547567,
          id: uuidv4(),
        },
      ],
    },
    {
      name: 'Toyota',
      fullName: 'TOYOTA MOTOR CORP.',
      income: 2353465,
      id: uuidv4(),
      subsidiary: [
        {
          name: 'Subaru',
          income: 24534598,
          id: uuidv4(),
        },
        {
          name: 'Dihatsu',
          income: 123742,
          id: uuidv4(),
        },
        {
          name: 'Scion',
          income: 8309443,
          id: uuidv4(),
        },
        {
          name: 'Hino',
          income: 9742963,
          id: uuidv4(),
        },
        {
          name: 'Lexus',
          income: 3454566,
          id: uuidv4(),
        },
      ],
    },
    {
      name: 'Honda',
      fullName: 'HONDA MOTOR CO. LTD.',
      income: 2345434,
      id: uuidv4(),
      subsidiary: [
        {
          name: 'Acura',
          income: 83246483,
          id: uuidv4(),
        },
      ],
    },
  ],
};

const CompaniesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_COMPANY: {
      return {
        ...state,
        companies: [...state.companies, { ...action.payload, subsidiary: [] }],
      };
    }
    case REMOVE_COMPANY: {
      return {
        ...state,
        companies: [
          ...state.companies.filter(element => element.id !== action.payload),
        ],
      };
    }
    case ADD_NEW_SUBSIDIARY: {
      const { companyId, ...newSubsidiary } = action.payload;

      const companies = state.companies.map(company => (
        company.id === companyId
          ? {
            ...company,
            subsidiary: [
              ...company.subsidiary,
              newSubsidiary,
            ],
          }
          : company
      ));

      return {
        ...state,
        companies,
      };
    }
    case EDIT_SUBSIDIARY: {
      const { companyId, ...editedSubsidiary } = action.payload;
      const companies = state.companies.map(company => (
        company.id === companyId
          ? {
            ...company,
            subsidiary: [
              ...company.subsidiary.filter(subsidiary => (
                subsidiary.id !== editedSubsidiary.id
              )),
              editedSubsidiary,
            ],
          } : company
      ));
      return {
        ...state,
        companies,
      };
    }

    case REMOVE_SUBSIDIARY: {
      const { companyId, subsidiaryId } = action.payload;

      const companies = state.companies.map(company => (
        company.id === companyId
          ? {
            ...company,
            subsidiary: [
              ...company.subsidiary.filter(subsidiary => (
                subsidiary.id !== subsidiaryId
              )),
            ],
          } : company));

      return {
        ...state,
        companies,
      };
    }

    case EDIT_COMPANY: {
      const companies = [...state.companies.filter(company => (
        company.id !== action.payload.id
      )),
      action.payload];

      return {
        ...state,
        companies,
      };
    }

    default:
      return state;
  }
};

export default CompaniesReducer;
