import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'


// POST /api/form
// Required fields in body: title, applicantEmail, companyName, projectName, projectAddress
// Optional fields in body:
// todo: more fields
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { title, applicantEmail, projectName, companyName, projectAddress } = req.body
  const result = await prisma.form.create({
    data: {
      title,
      email: applicantEmail,
      companyName,
      projectName,
      projectAddress,
    },
  })
  res.json(result)
}
