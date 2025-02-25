
interface IPriceFormatted {
    price: number | null
    className?: string | null
}

const usePriceFormatted = ({ price, className }: IPriceFormatted) => {

    return (
        <div className={`${className}`} >
            {price && <p className="">{`${price.toString().split('.')[0]}`}</p>}
            {price && <p>{price.toString().split('.')[1] !== undefined ? `${price.toString().split('.')[1].slice(0, 2)}` : '.00'}</p>}
        </div>
    )
}

export default usePriceFormatted;