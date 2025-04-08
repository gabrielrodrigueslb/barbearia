import { IoMdCloseCircle, IoIosCheckmarkCircle } from "react-icons/io";
import './AmenityCard.scss';
import { useState } from "react";

export default function AmenityCard({ icon, title, situation }) {
  const Icon = icon;
  let [active, setActive] = useState(false);

  function showDescription() {
    setActive(!active);
  }

  return (
    <>
      <li className={`amenity-item ${situation}`} onClick={showDescription}>
        <span className="icon">
          <Icon />
        </span>
        {title}
        {
          active && <div className="hover-description">
          <p>{title} </p>
            {situation === 'active' ? <span className="condition active"><IoIosCheckmarkCircle/> Possui</span> : <span className="condition  inactive"><IoMdCloseCircle/> Não possui</span>}
        </div>
        }

      </li>
    </>
  );
}
