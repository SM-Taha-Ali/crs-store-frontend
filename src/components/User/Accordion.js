import React from 'react'

const Accordion = () => {
    return (
        <>
            <div className='listCont'>
                <div className="listItem" >
                    <div className='listSubItem'>
                        <div className='sNO'>01</div>
                        <div className='bhashan'>DOTA 2</div>
                    </div>
                    <div className="imgCont">
                        <img className='w-100' src="https://wallpapercave.com/wp/V8Ee1Bm.jpg" alt="" />
                    </div>
                </div>
                <div className="listItem">
                    <div className='listSubItem'>
                        <div className='sNO'>02</div>
                        <div className='bhashan'>CSGO</div>
                    </div>
                    <div className="imgCont2">
                        <img className='w-100' src="https://activeplayer.io/wp-content/uploads/2020/10/CS-Go.jpg" alt="" />
                    </div>
                </div>
                <div className="listItem">
                    <div className='listSubItem'>
                        <div className='sNO'>03</div>
                        <div className='bhashan'>PUBG</div>
                    </div>
                    <div className="imgCont2">
                        <img className='w-100' src="https://static.india.com/wp-content/uploads/2020/11/PUBG-India.jpg" alt="" />
                    </div>
                </div>
                <div className="listItem">
                    <div className='listSubItem'>
                        <div className='sNO'>04</div>
                        <div className='bhashan'>GTA V</div>
                    </div>
                    <div className="imgCont2">
                        <img className='w-100' src="https://images.firstpost.com/wp-content/uploads/2019/05/Grand-Theft-Auto-poster.jpg" alt="" />
                    </div>
                </div>
                <div className="listItem">
                    <div className='listSubItem'>
                        <div className='sNO'>05</div>
                        <div className='bhashan'>FORTNITE</div>
                    </div>
                    <div className="imgCont2">
                        <img className='w-100' src="https://cdn1.epicgames.com/offer/fn/EN_19BR_VoidlanderPack_EGS_2560x1440_2560x1440-6412cb4e4d26fb8f73c220a76df2ce49?h=480&resize=1&w=854" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Accordion
