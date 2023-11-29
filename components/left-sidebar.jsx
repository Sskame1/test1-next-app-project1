import Link from "next/link"
import Profile from "./profile"

const SidePanel = () => {
    return (
        <>
            <input type="checkbox" id="side-checkbox" />
                <div className="side-panel">
                    <label className="side-button-2" for="side-checkbox">+</label>
                    <Link href='/' className="ShopTitle"><span>М</span>агазин.ру</Link>
                    <Profile />
                    <div className="side-title">Навигационная Панель:</div>
                <Link href='/profile' className="link-sidepanel">Профиль</Link>
                <Link href='/top' className="link-sidepanel">В топе</Link>
                <Link href='/topuser' className="link-sidepanel">Топ 3 пользователей</Link>
                <p className="author">Автор <Link href='https://github.com/Sskame1'><img src="https://cdn-icons-png.flaticon.com/512/3291/3291695.png" className="github"/></Link></p>
            </div>
            <div className="side-button-1-wr">
                <label className="side-button-1" for="side-checkbox">
                    <div className="side-b side-open">X</div>
                </label>
            </div>
        </>
    )
}

export default SidePanel