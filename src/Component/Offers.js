const Offers = ({offer}) =>{
    return(
        <>
            <div className="offer_section">
                {
                    offer.map((item, index) =>(
                        <a href={item.url} alt={`${index} offer`} key={index}>
                            <img src={item.image} alt="offer image" />
                        </a>
                    ))
                }
            </div>
        </>
    )
}
export default Offers;
