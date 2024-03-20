export type FirstStepProps = {
  formData: MerchantSignupFormType
  handleFormChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  nextStep: () => void
}

export type SecondStepProps = {
  formData: MerchantSignupFormType
  handleFormChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  nextStep: () => void
  prevStep: () => void
}

export type ThirdStepProps = {
  prevStep: () => void
}

export type MerchantSignupFormType = {
  name: string
  sku: string
  email: string
  password: string
  social: MerchantSignupSocial
}

export type MerchantSignupSocial = {
  [key: string]: string | undefined
  website: string
  youtube?: string
  twitter?: string
  facebook?: string
  linkedin?: string
  instagram?: string
  reddit?: string
}
