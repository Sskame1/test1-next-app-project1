const { default: FruitBanner } = require("./just-fruit-banner")

const MoreBanners = () => {
    return (
        <div className="morebanners">
            <FruitBanner />
            <FruitBanner />
            <FruitBanner />
            <FruitBanner />
            <FruitBanner />
            <FruitBanner />
            <FruitBanner />
        </div>
    )
}

export default MoreBanners