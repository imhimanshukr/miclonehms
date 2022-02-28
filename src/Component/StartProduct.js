import '../css/StartProduct.css'

const StartProduct = ({startProduct}) => {
  return (
        <>
            <div className="startProduct">
                <div>
                    <a href={startProduct[0].url}>
                        <img src={startProduct[0].image} alt="power bank" />
                    </a>
                </div>
                <div>
                    <a href={startProduct[1].url}>
                        <img src={startProduct[1].image} alt="power bank" />
                    </a>
                    <a href={startProduct[2].url}>
                        <img src={startProduct[2].image} alt="power bank" />
                    </a>
                    <a href={startProduct[3].url}>
                        <img src={startProduct[3].image} alt="power bank" />
                    </a>
                </div>
            </div>
        </>
  )
};

export default StartProduct;
