import React from 'react'
import Handle from './Handle'
import Image from './Image'
import Profile from './Profile'
import Storm from './first image.jpg'
import zil from './xan.jpg'
import zile from './second image.jpg'
import zi from './third picture.jpg'
import zith from './fourth images.jpg'
import xander from './fifth image.jpg'
import Header from './Header'

export default function (){
  return (
    <div className='menu' >
      <Header />
      <section>
      <Image image={Storm}/>
      <Profile  />
      <Handle />
      </section>

      <section>
      <Image image={zil} />
      <Profile />
      <Handle />
      </section>

      <section>
      <Image image={zile} />
      <Profile />
      <Handle />
      </section>

      <section>
      <Image image={zi} />
      <Profile />
      <Handle />
      </section>

      <section>
      <Image image={zith}  />
      <Profile />
      <Handle />
      </section>

      <section>
      <Image image={xander} />
      <Profile />
      <Handle />
      </section>
    </div>
  )
}
