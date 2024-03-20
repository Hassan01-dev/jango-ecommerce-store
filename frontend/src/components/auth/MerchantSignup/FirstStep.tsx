import React, { useEffect, useState } from 'react'
import CustomButton from '../../shared/CustomButton'
import CustomInputField from '../../shared/CustomInputField'
import { FirstStepProps } from '../../../utils/types/auth/merchantSignup'

const FirstStep: React.FC<FirstStepProps> = ({
  formData,
  handleFormChange,
  nextStep
}) => {
  const [isFormValid, setIsFormValid] = useState(false)
  const { name, email, sku, password } = formData

  useEffect(() => {
    if (name && email && sku && password) {
      setIsFormValid(true)
    } else {
      setIsFormValid(false)
    }
  }, [name, email, sku, password])

  return (
    <div className="mt-6">
      <CustomInputField
        id="name"
        label="Name"
        type="text"
        name="name"
        value={name}
        onChange={handleFormChange}
        required
      />
      <CustomInputField
        id="email"
        label="Email"
        type="email"
        name="email"
        value={email}
        onChange={handleFormChange}
        required
      />
      <CustomInputField
        id="sku"
        label="Sku"
        type="text"
        name="sku"
        value={sku}
        onChange={handleFormChange}
        required
      />
      <CustomInputField
        id="password"
        label="Password"
        type="password"
        name="password"
        value={password}
        onChange={handleFormChange}
        required
      />
      <div className="mt-4">
        <CustomButton type="button" onClick={nextStep} disabled={!isFormValid}>
          Next
        </CustomButton>
      </div>
    </div>
  )
}

export default FirstStep
