import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'


export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const formId = req.query.id

  if (req.method === 'GET') {
    handleGET(formId, res)
  } else if (req.method === 'DELETE') {
    handleDELETE(formId, res)
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    )
  }
}

// GET /api/form/:id
async function handleGET(formId, res) {
  const post = await prisma.form.findUnique({
    where: { id: Number(formId) },
  })
  res.json(post)
}

// DELETE /api/form/:id
async function handleDELETE(formId, res) {
  const post = await prisma.form.delete({
    where: { id: Number(formId) },
  })
  res.json(post)
}
