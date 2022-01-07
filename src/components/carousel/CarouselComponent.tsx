import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel'

function CaroucelComponent() {
    const [itens, setItens] = useState([
        {
            img: "https://i.imgur.com/TmfBl9k.png",
            titulo: "Titulo 1",
        },
        {
            img: "https://i.imgur.com/F3ZZvqP.png",
            titulo: "Titulo 2",

        },
        {
            img: "https://i.imgur.com/xgPa8xT.png",
            titulo: "Titulo 3",
        },
        {
            img: "https://i.imgur.com/L52J0ve.png",
            titulo: "Titulo 4",
        },
    ])
    return (
        <div>
            <Carousel>
                {
                    itens.map(item => (
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={item.img}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>{item.titulo}</h3>
                            </Carousel.Caption>

                        </Carousel.Item>
                    ))
                }


            </Carousel>
        </div>
    )
}

export default CaroucelComponent
