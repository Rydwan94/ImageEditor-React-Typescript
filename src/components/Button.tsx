
interface ButtonProps {
    message: string,
    onClick: () => void
}

const Button = ({message, onClick}:ButtonProps) => {
  return (
    <button onClick={onClick}>{message}</button>
  )
}

export default Button