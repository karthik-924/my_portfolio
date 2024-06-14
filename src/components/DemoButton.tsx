type Props = {
    demolink: string
}

const DemoButton = ({ demolink }: Props) => {
    return (
        <a className="absolute top-1 left-1" href={demolink} target="_blank" rel="noreferrer">
            <button className="button">
                <span className="bracket left">&lt;</span>
                <span className="text">Code </span>
                <span className="bracket right"> /&gt;</span>
            </button>
        </a >
  )
}

export default DemoButton