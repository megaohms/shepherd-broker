import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'
import { formTypeIds, formLabels } from '../forms'

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

const autoFields = {
  [fieldNames.companyName]: fieldTypes.companyName,
  [fieldNames.coverageAmount]: fieldTypes.coverageAmount,
  [fieldNames.averageDriverExpYears]: fieldTypes.averageDriverExpYears,
  [fieldNames.numDrivers]: fieldTypes.numDrivers,
}

const genLiabilityFields = {
  [fieldNames.companyName]: fieldTypes.companyName,
  [fieldNames.coverageAmount]: fieldTypes.coverageAmount,
}

const fieldsByFormType = {
  [formTypeIds.genLiability]: genLiabilityFields,
  [formTypeIds.auto]: autoFields,
}

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { formTypeId } = req.query

  if (req.method === 'GET') {
    handleGET(formTypeId, res)
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    )
  }
}

// GET /api/forms/:formTypeId
async function handleGET(formTypeId, res) {
  res.json({
    formTypeId: formTypeIds[formTypeId],
    formTypeLabel: formLabels[formTypeId],
    fields: fieldsByFormType[formTypeId],
  })
}

