import catering from '../../assets/images/catering.svg'
import birthday from '../../assets/images/birthday.svg'
import wedding from '../../assets/images/wedding.svg'
import event from '../../assets/images/events.svg'
import "../../styles/uniqueService.css"

export default function UniqueServiceCard(){
    const Images = [
        {
          id: 1,
          img: catering,
          location: "Ikeja, Lagos, Nigeria",
          title: 'Catering',
          body: "n the new era of technology we look in the futrue with certainty and pride for our life  ",
          click: 'Explore'
        },
        {
          id: 2,
          img: birthday,
          location: "Ikeja, Lagos, Nigeria",
          title: 'BirthDay',
          body: "n the new era of technology we look in the futrue with certainty and pride for our life  ",
          click: 'Explore'
        },
        {
          id: 3,
          img: wedding,
          location: "Ikeja, Lagos, Nigeria",
          title: 'Wedding',
          body: "n the new era of technology we look in the futrue with certainty and pride for our life  ",
          click: 'Explore'
        },
        {
            id: 4,
            img: event,
            location: "Ikeja, Lagos, Nigeria",
            title: 'Event',
            body: "n the new era of technology we look in the futrue with certainty and pride for our life  ",
            click: 'Explore'
          },
    ]
    return(
        <div className='unique-service-card-container'>
            {
                Images && Images.map((item)=>  (
                        <div className='unique-service-card'>
                        <figure>
                            <img src={item.img} alt="" />
                        </figure>
                        <h3>{item.title}</h3>
                        <p>{item.body} </p>
                        </div>
                    ))
                }
        </div>
    )}

