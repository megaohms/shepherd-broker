import React from 'react'
import { GetServerSideProps } from 'next'
import Layout from '../components/Layout'
import FormListItem, { FormListTypeProps } from '../components/FormListItem'

type Props = {
  forms: FormListTypeProps[]
}

const Forms: React.FC<Props> = props => {
  return (
    <Layout>
      <div className="page">
        <h1>My Forms</h1>
        <main>
          {props.forms.map(form => (
            <div key={form.formTypeId} className="formListItem">
              <FormListItem form={form} />
            </div>
          ))}
        </main>
      </div>
      <style jsx>{`
        .formListItem {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }

        .formListItem:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

      `}</style>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/api/forms')
  const forms = await res.json()
  return {
    props: { forms },
  }
}


export default Forms
