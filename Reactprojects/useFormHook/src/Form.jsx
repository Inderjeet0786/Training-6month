import React from 'react'
import { useForm } from 'react-hook-form'

function Form() {
    const {register,handleSubmit,formState:{errors}} = useForm()
  return (
    <>
      <form onSubmit={handleSubmit(submitForm)}></form>
    </>
  )
}

export default Form
