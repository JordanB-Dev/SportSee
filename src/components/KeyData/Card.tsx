import { TypeCard } from '../../Types'

const Card: React.FC<TypeCard> = ({
  userKeyData,
  unit,
  subtitle,
  className,
  logo,
}) => {
  return (
    <div className="card ">
      <div className={'card_icon ' + className}>
        <img src={logo} alt="" className="card_img center" />
      </div>
      <div className="card_data">
        <p className="card_title">
          {userKeyData?.toLocaleString('en-US')}
          {unit}
        </p>
        <p className="card_subtitle">{subtitle}</p>
      </div>
    </div>
  )
}

export default Card
