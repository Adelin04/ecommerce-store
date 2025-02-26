
interface IPriceFormatted {
    price: number | null
    className?: string | null
}

const usePriceFormatted = ({ price, className }: IPriceFormatted) => {

    return (
        <div className={`${className}`} >
            {price && <span className="">{`${price.toString().split('.')[0]}`}</span>}
            {price && <span>{price.toString().split('.')[1] !== undefined ? `${price.toString().split('.')[1].slice(0, 2)}` : '.00'}</span>}
        </div>
    )
}

export default usePriceFormatted;