import React from 'react'
import Router from 'next/router'

export type CompanyName = {
  label: string,
  type: string,
}

export type CoverageAmount = {
  label: string,
  type: number,
}
export type GeneralLiabilityFormType = {
  companyName: CompanyName,
  coverageAmount: CoverageAmount,
}
export type AutomobileFormType = {
  companyName: CompanyName,
  coverageAmount: CoverageAmount,
  averageDriverExpYears: { label: string, type: number },
  numDrivers: { label: string, type: number},
}
export type FormTypeProps = {
  fieldTypeLabel: string,
  fieldType: string,
  fields: GeneralLiabilityFormType | AutomobileFormType,
}

const FormListItem: React.FC<{form: FormProps}> = ({ form }) => {
  return (
    <div onClick={() => Router.push('/[formType]', `/${form.fieldType}`)}>
        <h2>{form.fieldTypeLabel}</h2>
        <style jsx>{`
          div {
            color: inherit;
            padding: 2rem;
          }
        `}</style>
    </div>
  )
}

export default FormListItem