import bd from "@/const_bd"

const newBD = bd.shop.normal.fruit

const FruitBanner = () => {
    return (
        <div className="justFruit">
            <img src={newBD.url} className="FruitsBanner"/>
            <h1>{newBD.name}</h1>
            <p>${newBD.price}</p>
            <button>Купить</button>
        </div>
    )
}

export default FruitBanner;