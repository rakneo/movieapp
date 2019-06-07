import React, { Component } from 'react'
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { Carousel, CarouselSlide } from 'material-ui-carousel'

export default class MovieCarousal extends Component {
  pictures = [
    {image: 'https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/avengers-end-game-et00090482-07-12-2018-06-50-21.jpg', title: 'Avengers Endgame'},
    {image: 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fscottmendelson%2Ffiles%2F2019%2F03%2FALADDIN-Payoff_1-Sht_Online_v3a_lg-1200x675.jpg', title: 'Aladin'},
    {image: 'https://static2.srcdn.com/wordpress/wp-content/uploads/2019/02/Fast-and-Furious-9-fake-logo.jpg', title: 'Fast and Furious 9'},
  ];

  render () {
    return (
      <Carousel>
        {this.pictures.map(({ image, title }) => (
          <CarouselSlide key={image}>
            <Card>
              <CardMedia
                image={image}
                title={title}
                style={{
                  height: 0,
                  paddingTop: '30%',
                }}
              />
              <CardContent>
                <Typography>{title}</Typography>
              </CardContent>
            </Card>
          </CarouselSlide>
        ))}
      </Carousel>
      )
  }
}
