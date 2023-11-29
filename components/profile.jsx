import bd from "@/const_bd"

const Profile = () => {
    return (
        <>
            <div className="profile">
                <img src={bd.admin.avatarka} className="image-profile" />
                <div className="nickname">{bd.admin.nickname}</div>
                <div className="balance">${bd.admin.balance}</div>
            </div>
        </>
    )
}

export default Profile