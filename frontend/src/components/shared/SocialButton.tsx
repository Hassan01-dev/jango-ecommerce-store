import toast from 'react-hot-toast'
import { SocialButtonComponentProps } from '../../utils/types/customComponentTypes'
const SocialButton: React.FC<SocialButtonComponentProps> = ({
  icon: SocialIcon,
  ...rest
}) => {
  const handleSocialIntegration = () => {
    toast.error('Third Party Login not implemented yet')
  }

  return (
    <button
      className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600"
      onClick={handleSocialIntegration}
      {...rest}
    >
      <SocialIcon />
    </button>
  )
}

export default SocialButton
