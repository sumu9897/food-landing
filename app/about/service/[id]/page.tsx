import React from 'react'

const ServiceDetailsPage = async ({params}) => {
    const id = (await params).id;
  return (
    <div>
      ServiceDetailsPage {id}
    </div>
  )
}

export default ServiceDetailsPage
