import { ThirdStepProps } from '../../../utils/types/auth/merchantSignup'
import Button from '../../shared/CustomButton'
import { Checkbox } from 'flowbite-react'

const ThirdStep: React.FC<ThirdStepProps> = ({ prevStep }) => {
  return (
    <div>
      <div className="mt-6">
        <Checkbox id="policy1" />
        <label htmlFor="policy1" className="ml-2">
          I agree to the terms and conditions
        </label>
      </div>
      <div>
        <Checkbox id="policy2" />
        <label htmlFor="policy2" className="ml-2">
          I agree to the privacy policy
        </label>
      </div>
      <div className="flex gap-6 mt-6">
        <Button type="button" onClick={prevStep}>
          Prev
        </Button>
        <Button type="submit">Finish</Button>
      </div>
    </div>
  )
}

export default ThirdStep
