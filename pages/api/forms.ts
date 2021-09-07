import type { NextApiRequest, NextApiResponse } from 'next'

const fieldNames = {
  companyName: 'companyName',
  coverageAmount: 'coverageAmount',
  averageDriverExpYears: 'averageDriverExpYears',
  numDrivers: 'numDrivers',
}
const fieldTypes = {
  [fieldNames.companyName]: { label: 'Company Name', type: 'string' },
  [fieldNames.coverageAmount]: { label: 'Coverage Amount', type: 'number' },
  [fieldNames.averageDriverExpYears]: { label: 'Driver experience years average', type: 'number' },
  [fieldNames.numDrivers]: { label: 'Number of Drivers', type: 'number' },
}

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const formTypes = [
    {
      fieldTypeLabel: 'General Liability',
      fieldType: 'genLiability',
      fields: {
        [fieldNames.companyName]: fieldTypes.companyName,
        [fieldNames.coverageAmount]: fieldTypes.coverageAmount,
      }
    },
    {
      fieldTypeLabel: 'Automobile',
      fieldType: 'auto',
      fields: {
        [fieldNames.companyName]: fieldTypes.companyName,
        [fieldNames.coverageAmount]: fieldTypes.coverageAmount,
        [fieldNames.averageDriverExpYears]: fieldTypes.averageDriverExpYears,
        [fieldNames.numDrivers]: fieldTypes.numDrivers,
      }
    }
  ]
  res.json(formTypes)
}
