const SocialButton = ({ children, ...rest }) => {
  return (
    <button
      className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600"
      {...rest}
    >
      {children}
    </button>
  )
}

export default SocialButton
