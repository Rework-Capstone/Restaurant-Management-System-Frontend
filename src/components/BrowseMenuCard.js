import breakfast from '../assets/icons/Break fast icon.svg'
 import '../styles/BrowseMenu.css'
export default function BrowseMenuCard(){
    const Images = [
        {
          id: 1,
          img: breakfast,
          location: "Ikeja, Lagos, Nigeria",
          title: 'Breakfast',
          body: "n the new era of technology we look in the futrue with certainty and pride for our life  ",
          click: 'Explore'
        },
        {
          id: 2,
          img: breakfast,
          location: "Ikeja, Lagos, Nigeria",
          title: 'Breakfast',
          body: "n the new era of technology we look in the futrue with certainty and pride for our life  ",
          click: 'Explore'
        },
        {
          id: 3,
          img: breakfast,
          location: "Ikeja, Lagos, Nigeria",
          title: 'Breakfast',
          body: "n the new era of technology we look in the futrue with certainty and pride for our life  ",
          click: 'Explore'
        },
        {
            id: 4,
            img: breakfast,
            location: "Ikeja, Lagos, Nigeria",
            title: 'Breakfast',
            body: "n the new era of technology we look in the futrue with certainty and pride for our life  ",
            click: 'Explore'
          },
    ]
    return(
        <div className='browse-menu-card-container'>
            {
                Images && Images.map((item)=>  (
                        <div className='browse-menu-card'>
                        <figure>
                            <img src={item.img} alt="" />
                        </figure>
                        <h3>{item.title}</h3>
                        <p>{item.body} </p>
                        <h5>{item.click}</h5>
                        </div>
                    ))
                }
        </div>
    )}

