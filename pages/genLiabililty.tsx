import React, { useState } from 'react'
import Layout from '../components/Layout'
import Router from 'next/router'
import {FormTypeProps} from '../components/FormListItem'

const FormType: React.FC<FormTypeProps> = props => {
  const [title, setTitle] = useState('')
  const [applicantEmail, setApplicantEmail] = useState('')
  const [projectName, setProjectName] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [projectAddress, setProjectAddress] = useState('')

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    try {
      const body = { title, applicantEmail, projectName, companyName, projectAddress }
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

  console.dir(props)
  return (
    <Layout>
      <div>
        <form
          onSubmit={submitData}>
          <h1>{props.fieldTypeLabel}</h1>
          {/*<input*/}
          {/*  autoFocus*/}
          {/*  onChange={e => setTitle(e.target.value)}*/}
          {/*  placeholder="Title"*/}
          {/*  type="text"*/}
          {/*  value={title}*/}
          {/*/>*/}
          {/*<input*/}
          {/*  onChange={e => setAuthorEmail(e.target.value)}*/}
          {/*  placeholder="Author (email address)"*/}
          {/*  type="text"*/}
          {/*  value={authorEmail}*/}
          {/*/>*/}
          {/*<textarea*/}
          {/*  cols={50}*/}
          {/*  onChange={e => setContent(e.target.value)}*/}
          {/*  placeholder="Content"*/}
          {/*  rows={8}*/}
          {/*  value={content}*/}
          {/*/>*/}
          {/*<input*/}
          {/*  disabled={!content || !title || !authorEmail}*/}
          {/*  type="submit"*/}
          {/*  value="Create"*/}
          {/*/>*/}
          {/*<a className="back" href="#" onClick={() => Router.push('/')}>*/}
          {/*  or Cancel*/}
          {/*</a>*/}
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

export default FormType;
