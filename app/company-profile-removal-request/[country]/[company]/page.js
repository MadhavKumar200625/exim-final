import React from 'react'
import CompanyRemovalForm from './CompanyRemovalForm'

const page = async ({params}) => {
    params = await params
  return (
    <CompanyRemovalForm params={params}></CompanyRemovalForm>
  )
}

export default page