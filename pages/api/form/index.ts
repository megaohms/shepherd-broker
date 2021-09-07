import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'


// POST /api/form
// Required fields in body: title, applicantEmail, companyName, projectName, projectAddress
// Optional fields in body:
// todo: more fields
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { title, email, projectName, companyName, projectAddress } = req.body
  const result = await prisma.formData.create({
    data: {
      title,
      email,
      companyName,
      projectName,
      projectAddress,
    },
  })
  res.json(result)
}
