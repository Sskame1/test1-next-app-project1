const { default: bd } = require("@/const_bd")

const newBD = bd.shop.top

const FruitInTop = () => {
    return (
        <div className="container_fruits">
            <div className="top1">
                <img src='https://cdn.earlytorise.com/wp-content/uploads/2012/10/HiRes.jpg' />
                <p className="fruit1 top1y">{newBD.fruit2.name}</p>
                <p className="fruit2">${newBD.fruit2.price}</p>
                <p className="fruit3">Продаж: {newBD.fruit2.sales}</p>
            </div>
            <div className="top2">
                <img src='https://a.d-cd.net/0AAAAgAUlOA-960.jpg' />
                <p className="fruit1 top2w">{newBD.fruit3.name}</p>
                <p className="fruit2">${newBD.fruit3.price}</p>
                <p className="fruit3">Продаж: {newBD.fruit3.sales}</p>
            </div>
            <div className="top3">
            <img src='https://sun9-69.userapi.com/impg/tMspJFmps8qWEBDcOqXv0CshyU-5VTZNECqk8Q/rAvmK1g_os4.jpg?size=604x510&quality=95&sign=1f5567dcc27ef0f5cfc9d8cb350ebe35&c_uniq_tag=tVea6rG1-JHlFvY513b8H1hi595lfkjTd5vGde277h8&type=album' />
                <p className="fruit1 top3q">{newBD.fruit.name}</p>
                <p className="fruit2">${newBD.fruit.price}</p>
                <p className="fruit3">Продаж: {newBD.fruit.sales}</p>
            </div>
        </div>
    )
}

export default FruitInTop