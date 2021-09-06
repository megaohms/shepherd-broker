import React from 'react'
import Router from 'next/router'

export type FormProps = {
  id: number;
  title: string;
  author: {
    name: string;
  }
  content: string;
  published: boolean;
}

const FormListItem: React.FC<{form: FormProps}> = ({ form }) => {
  return (
    <div onClick={() => Router.push('/[id]', `/${form.id}`)}>
        <h2>{form.title}</h2>
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