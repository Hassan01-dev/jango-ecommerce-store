const assertEnvironmentVariables = () => {
  const requiredVariables = [
    'REACT_APP_API_URL',
  ]

  const missingVariables = requiredVariables.filter(
    (variable) => !process.env[variable]
  )

  if (missingVariables.length > 0) {
    throw new Error(
      `The following environment variables are not defined: ${missingVariables.join(', ')}`
    )
  }
}

assertEnvironmentVariables()

export const environmentVariables = {
  API_URL: process.env.REACT_APP_API_URL
}
