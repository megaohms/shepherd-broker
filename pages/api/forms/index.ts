import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'


// POST /api/forms
// Required fields in body: title, applicantEmail, companyName, projectName, projectAddress
// Optional fields in body:
// todo: more fields
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const result = await prisma.formData.create({
    data: req.body,
  })
  res.json(result)
}
