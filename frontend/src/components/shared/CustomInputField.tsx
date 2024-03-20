import { CustomInputProps } from '../../utils/types/customComponentTypes'

const CustomInputField: React.FC<CustomInputProps> = ({
  label,
  className,
  icon: ButtonIcon,
  ...rest
}) => {
  return (
    <div className="mb-2">
      {label && (
        <label
          htmlFor={rest.id}
          className="block text-sm font-semibold text-gray-800"
        >
          {label}
        </label>
      )}

      <div className="flex relative">
        {ButtonIcon && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <ButtonIcon />
          </div>
        )}
        <input
          className={`block w-full px-4 py-2 border bg-gray-50 border-gray-300 text-purple-700 focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 text-sm rounded-md disabled:cursor-not-allowed disabled:opacity-50 ${ButtonIcon ? 'pl-10' : ''} ${className}`}
          {...rest}
        />
      </div>
    </div>
  )
}

export default CustomInputField
