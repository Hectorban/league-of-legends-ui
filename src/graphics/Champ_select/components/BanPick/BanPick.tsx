import React from 'react';

interface Props {
  banName: string
}

const BanPick: React.FC<Props> = ({banName}:Props) => {
  const banImage = `http://ddragon.leagueoflegends.com/cdn/img/champion/tiles/${banName}_0.jpg`;
    return (
    <div className='ban-pick'>
      <img className='ban-pick-image' src={banImage} alt={banName}/>
    </div>
  );
};

export default BanPick;
