import {
  TwitterIcon,
  FacebookIcon,
  InstagramIcon,
  WebLinkIcon,
  YouTubeIcon,
  LinkedInIcon,
  RedditIcon,
  DefaultIcon
} from '../../../assets/icons'
import Input from '../../shared/CustomInputField'
import Button from '../../shared/CustomButton'
import {
  MerchantSignupSocial,
  SecondStepProps
} from '../../../utils/types/auth/merchantSignup'

const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'youtube':
      return YouTubeIcon
    case 'website':
      return WebLinkIcon
    case 'twitter':
      return TwitterIcon
    case 'facebook':
      return FacebookIcon
    case 'instagram':
      return InstagramIcon
    case 'linkedin':
      return LinkedInIcon
    case 'reddit':
      return RedditIcon
    default:
      return DefaultIcon
  }
}

const SecondStep: React.FC<SecondStepProps> = ({
  formData,
  handleFormChange,
  nextStep,
  prevStep
}) => {
  const { social } = formData

  return (
    <div className="mt-6">
      <h3 className="my-2 font-bold">Social Links</h3>
      {Object.keys(social).map((platform, index) => (
        <Input
          key={index}
          id={platform}
          type="text"
          name={`social.${platform}`}
          value={social[platform] as keyof MerchantSignupSocial}
          icon={getIconComponent(platform)}
          onChange={handleFormChange}
        />
      ))}
      <div className="flex gap-6 mt-6">
        <Button type="button" onClick={prevStep}>
          Prev
        </Button>
        <Button type="button" onClick={nextStep}>
          Next
        </Button>
      </div>
    </div>
  )
}

export default SecondStep
