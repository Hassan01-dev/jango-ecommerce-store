import { CustomInputProps } from '../../utils/types/customComponentTypes'

const CustomInputField: React.FC<CustomInputProps> = ({ label, ...rest }) => {
  return (
    <div className="mb-2">
      <label
        htmlFor={rest.id}
        className="block text-sm font-semibold text-gray-800"
      >
        {label}
      </label>
      <input
        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
        {...rest}
      />
    </div>
  )
}

export default CustomInputField
