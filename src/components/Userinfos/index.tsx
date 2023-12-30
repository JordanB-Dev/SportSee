import { TypeUser } from '../../Types'

const UserInfos: React.FC<TypeUser> = ({ firstName }) => {
  return (
    <div className="user_infos">
      <h1 className="user_infos-title">
        Bonjour <span className="user_infos-name">{firstName}</span>
      </h1>
    </div>
  )
}

export default UserInfos
