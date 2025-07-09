export default function Button({
  onClick,
  label,
}: {
  onClick: () => void
  label: string
}) {
  const buttonClass =
    label === 'Add'
      ? 'bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-r-lg transition duration-300'
      : 'bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded-lg transition duration-300'

  return (
    <button onClick={onClick} className={buttonClass}>
      {label}
    </button>
  )
}
