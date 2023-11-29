import bd from "@/const_bd"

const ProfilePages = () => {
    return (
        <div className="profiles">
            <img className="image-profile b1" src={bd.admin.avatarka} />
            <div className="nickname2">{bd.admin.nickname}</div>
            <div className="balance2">${bd.admin.balance}</div>
        </div>
    )
}

export default ProfilePages;