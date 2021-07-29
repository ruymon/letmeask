import copyImage from '../assets/images/copy.svg';

import '../styles/room-code.scss';

export function RoomCode() {
  return (
    <button className="room-code">
      <div>
        <img src={copyImage} alt="Copy room code" />
      </div>

      <span>Sala #-MfhtuDa93Vbyz37Kr8P</span> 
    </button>
  );
};