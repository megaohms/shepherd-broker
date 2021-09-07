import React, { useState } from 'react'
import Layout from '../../components/Layout'
import { GetServerSideProps } from 'next'
import CompanyName from '../../components/CompanyName'
import type { CompanyNameType } from '../../components/CompanyName'


export type CoverageAmount = {
  label: string,
  type: number,
}
export type GeneralLiabilityFormType = {
  companyName: CompanyNameType,
  coverageAmount: CoverageAmount,
}
export type AutomobileFormType = {
  companyName: CompanyNameType,
  coverageAmount: CoverageAmount,
  averageDriverExpYears: { label: string, type: number },
  numDrivers: { label: string, type: number},
}

type FormTypeProps = {
  formTypeId: 'string',
  formTypeLabel: 'string',
  fields: GeneralLiabilityFormType | AutomobileFormType,
}

const FormTypeId: React.FC<FormTypeProps> = props => {
  const [title, setTitle] = useState('')
  const [applicantEmail, setApplicantEmail] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [projectAddress, setProjectAddress] = useState('')

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    try {
      const body = { title, applicantEmail, companyName, projectAddress }
      await fetch(`http://localhost:3000/api/form`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      // todo: pdf
      // await Router.push('/drafts')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Layout>
      <div>
        <form
          onSubmit={submitData}>
          <h1>{props.formTypeLabel}</h1>
          <CompanyName name={companyName} setName={setCompanyName} />
        </form>
      </div>
      <style jsx>{`
        .page {
          background: white;
          padding: 3rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        input[type='text'],
        textarea {
          width: 100%;
          padding: 0.5rem;
          margin: 0.5rem 0;
          border-radius: 0.25rem;
          border: 0.125rem solid rgba(0, 0, 0, 0.2);
        }

        input[type='submit'] {
          background: #ececec;
          border: 0;
          padding: 1rem 2rem;
        }

        .back {
          margin-left: 1rem;
        }
      `}</style>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`http://localhost:3000/api/forms/${context.query.formTypeId}`)
  const data = await res.json()
  return { props: { ...data } }
}

export default FormTypeId;
