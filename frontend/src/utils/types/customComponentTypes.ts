export interface CustomInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export interface SocialButtonComponentProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.FC<React.SVGProps<SVGSVGElement>>
}
