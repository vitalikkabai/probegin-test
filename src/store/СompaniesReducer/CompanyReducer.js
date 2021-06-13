import { v4 as uuidv4 } from 'uuid';
import {
  SET_NEW_COMPANY,
  REMOVE_COMPANY,
  SET_NEW_SUBSIDIARY,
} from './CompanyActionType';

const initialState = {
  companies: [
    {
      shortName: 'Volkswagen',
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
      shortName: 'Toyota',
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
      shortName: 'Honda',
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

const СompaniesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEW_COMPANY: {
      return {
        ...state,
        companies: [...state.companies, action.payload],
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
    case SET_NEW_SUBSIDIARY: {
      const { companyId, ...newSubsidiary } = action.payload;

			const companies = state.companies.map((company) => {
				return company.id === companyId
					? {
						...company,
						subsidiary: [
							...company.subsidiary,
							newSubsidiary,
						],
					}
					: company;
			});

      return {
        ...state,
        companies,
      };
    }
    default:
      return state;
  }
};

export default СompaniesReducer;
