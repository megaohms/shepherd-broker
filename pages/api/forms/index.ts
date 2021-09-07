import type { NextApiRequest, NextApiResponse } from 'next'

export const formTypeIds = {
  auto: 'auto',
  genLiability: 'genLiability'
}
export const formLabels = {
    [formTypeIds.genLiability]: 'General Liability',
    [formTypeIds.auto]: 'Automobile',
}

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const formTypesList = [
    {
      formTypeLabel: formLabels.genLiability,
      formTypeId: formTypeIds.genLiability,
    },
    {
      formTypeLabel: formLabels.auto,
      formTypeId: formTypeIds.auto,
    }
  ]
  res.json(formTypesList)
}
