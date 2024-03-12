import { SocialButtonComponentProps } from '../../utils/types/customComponent'
const SocialButton: React.FC<SocialButtonComponentProps> = ({ iconPath, ...rest }) => {
  return (
    <button
      className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600"
      {...rest}
    >
      <img src={iconPath} width={20} />
    </button>
  )
}

export default SocialButton
