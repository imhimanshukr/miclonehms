import React from 'react';
import HotItemCard from './HotItemCard';
import '../css/HotAccessories.css';

const HotAccessories = ({music, musicCover, smartDevice, smartCover, home, homeCover, lifestyle, lifestyleCover, mobile_accessories, mobile_accessoriesCover}) => {
  return (
      <>
            <div className='HotAccessories'>
                <div>
                    <img src={musicCover || smartCover || homeCover || lifestyleCover || mobile_accessoriesCover} alt="Cover" />
                </div>

                <div>
                    {
                        music && music.map((item, index) =>(
                            <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
                        ))}
                    {
                        smartDevice && smartDevice.map((item, index) =>(
                            <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
                        ))}
                    {
                        home && home.map((item, index) =>(
                            <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
                        ))}
                    {
                        lifestyle && lifestyle.map((item, index) =>(
                            <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
                        ))}
                    {
                        mobile_accessories && mobile_accessories.map((item, index) =>(
                            <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
                        ))}
                        <HotItemCard image="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg" />
                </div>
            </div>
    </>
  )
};

export default HotAccessories;
