import Link from "next/link";

const WarningProfile = () => {
    return (
        <div className="Warning">
            <h1 className="Text_W">
                Привет! этот сайт был создан с целью обучения фреймворка и библиотек <span>NEXT</span> js!
                И на сайте все цены и продажи не настоящие а выдуманые для проверок!
            </h1>
            <p className="Autor">Автор этого детяще</p>
            <Link href='https://github.com/Sskame1'><img src="https://cdn-icons-png.flaticon.com/512/3291/3291695.png" /></Link>
        </div>
    )
}

export default WarningProfile;