import { TypeUser } from '../../Types'

const UserInfos: React.FC<TypeUser> = ({ firstName }) => {
  return (
    <div className="user_infos">
      <h1 className="user_infos-title">
        Bonjour <span className="user_infos-name">{firstName}</span>
      </h1>
      <p className="user_infos-subtitle">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
    </div>
  )
}

export default UserInfos
