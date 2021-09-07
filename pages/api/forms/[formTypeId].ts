import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'
import { formTypeIds, formLabels } from './index'

const fieldNames = {
  companyName: 'companyName',
  coverageAmount: 'coverageAmount',
  averageDriverExpYears: 'averageDriverExpYears',
  numDrivers: 'numDrivers',
}
const fieldTypes = {
  [fieldNames.companyName]: { label: 'Company Name', type: 'string', validate: (val) => typeof(val) === "string" },
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
  }
  else if (req.method === 'POST') {
    handlePOST(formTypeId, req.body, res)
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

// POST /api/forms
// Required fields in body: title, applicantEmail, companyName, projectName, projectAddress
// Optional fields in body:
// todo: more fields
async function handlePOST(formTypeId, body, res) {
  // todo: auth
  // todo: add formType enum to schema
  console.dir(body)
  const result = await prisma.formData.create({
    data: {
      // formTypeId,
      ...body,
    },
  })
  res.json(result)
}

