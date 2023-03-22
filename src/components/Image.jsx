import React from 'react'

export default function Image(props) {
  let alt = 'dark clouds with a nice view (only the first one) '
  console.log(props.image)
  return (
    <div>
   <img className='chrisblackhair' src={props.image} alt={alt} />

    </div>
  )
}
