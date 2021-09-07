import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'


export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const formId = req.query.id

  if (req.method === 'GET') {
    handleGET(formId, res)
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    )
  }
}

// GET /api/form/:id
async function handleGET(submissionId, res) {
  const post = await prisma.formData.findUnique({
    where: { id: Number(submissionId) },
  })
  res.json(post)
}

