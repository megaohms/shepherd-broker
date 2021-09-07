import React, { useState } from 'react'

export type CompanyNameType = {
    label: string,
    type: string,
    validate?: (name:string) => boolean
}

type CompanyNameProps = {
    validate?: (name:string) => boolean
}
// todo: validate
const CompanyName: React.FC<CompanyNameProps> = companyNameProps => {
    const [companyName, setCompanyName] = useState('')
    return (
        <input
            autoFocus
            name="companyName"
            onChange={e => companyNameProps.validate
                ? companyNameProps.validate(e.target.value) && setCompanyName(e.target.value)
                : setCompanyName(e.target.value)
            }
            placeholder="Company Name"
            type="text"
            value={companyName}
        />
    )
}

export default CompanyName
