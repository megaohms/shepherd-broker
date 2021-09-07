import type { NextApiRequest, NextApiResponse } from 'next'

export const formNames = {
  auto: 'auto',
  genLiability: 'genLiability'
}
export const formLabels = {
    [formNames.genLiability]: 'General Liability',
    [formNames.auto]: 'Automobile',
}

// todo: clean up naming
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const formTypesList = [
    {
      formTypeLabel: formLabels.genLiability,
      formType: formNames.genLiability,
    },
    {
      formTypeLabel: formLabels.auto,
      formType: formNames.auto,
    }
  ]
  res.json(formTypesList)
}
