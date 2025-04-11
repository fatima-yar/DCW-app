import React from 'react'
import Contents from './Contents'

export default function MissionStatement() {
  return (
    <Contents
      header="Mission Statement"
      content={[
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat  lorem quis ligula ultricies, eu condimentum ipsum porttitor. Quisque at  lorem quis libero bibendum cursus et ac purus. Pellentesque consectetur  aliquam mauris sit amet vehicula. Cras id arcu non dolor commodo  sagittis. Ut cursus, nulla ut fermentum bibendum, est velit euismod  massa, vitae molestie ligula libero in nunc. Donec tincidunt ut augue in tempus.',

        'Fusce fringilla est turpis, vel interdum arcu interdum vitae.  Nam vitae quam feugiat, euismod metus vel, luctus orci. In hac habitasse platea dictumst. Etiam vestibulum mauris sit amet neque feugiat, vitae  varius magna aliquam. Pellentesque malesuada viverra ligula, vel  consequat ligula vestibulum at.',
      ]}
      image="/childnMother.jpg"
    />
  )
}
