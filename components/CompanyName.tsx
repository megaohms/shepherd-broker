import React, { useState } from 'react'

export type CompanyNameType = {
    label: string,
    type: string,
}

type CompanyNameProps = {
    name: string,
    setName: (name:string) => void,
    validate?: (name:string) => boolean
}
// todo: validate
const CompanyName: React.FC<CompanyNameProps> = companyNameProps => {
    return (
        <input
            autoFocus
            onChange={e => companyNameProps.validate
                ? companyNameProps.validate(e.target.value) && companyNameProps.setName(e.target.value)
                : companyNameProps.setName(e.target.value)
            }
            placeholder="Company Name"
            type="text"
            value={companyNameProps.name}
        />
    )
}

export default CompanyName
