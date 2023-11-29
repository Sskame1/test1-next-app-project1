import bd from "@/const_bd"

const newbd = bd.shop.normal.biggest

const Banners =() => {
    return (
        <div className="Banners">
            <div className="Banner1">
                <img src={newbd.sale1.banner} />
                <h1 className="titleBanner">{newbd.sale1.name}</h1>
                <p className="priceBanner">${newbd.sale1.price}</p>  
            </div>
            <div className="Banner2">
                <img src={newbd.sale2.banner} />
                <h1 className="titleBanner">{newbd.sale2.name}</h1>
                <p className="priceBanner">${newbd.sale2.price}</p>  
            </div>
        </div>
    )
}
export { Banners }