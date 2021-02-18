
type Props = {
    //onClick(): void, fn return string
    //onClick(): string, fn return nothing
    //onClick(text: string): void fn return nothing with one arg
   // onClick: () => void fn return nothing
   onClick: (text: string) => void //fn return nothing with 1 arg
}

const Button = ({onClick}: Props) => (
    <button onClick={() => onClick('text')}>
        Click me
    </button>
)

export default Button;