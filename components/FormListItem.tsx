import React from 'react'
import Router from 'next/router'

export type FormListTypeProps = {
  formTypeLabel: string,
  formTypeId: string,
}

const FormListItem: React.FC<{form: FormListTypeProps}> = ({ form }) => {
  return (
    <div onClick={() => Router.push( `/forms/${form.formTypeId}`)}>
        <h2>{form.formTypeLabel}</h2>
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