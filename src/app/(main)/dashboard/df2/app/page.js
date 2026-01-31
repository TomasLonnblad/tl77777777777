"use client"
import Image from 'next/image'
 
import mountains from '../public/mountains.jpg'
 



export default function Responsive() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Image
        alt="Mountains"
        // Importing an image will
        // automatically set the width and height
        src={mountains}
        sizes="100vw"
        // Make the image display full width
        // and preserve its aspect ratio
        style={{
          width: '100%',
          height: 'auto',
        }}
      />

      <h1>Image Component with Next.js</h1>
      <p>
        This page demonstrates the usage of the{" "}
        <a href="https://nextjs.org/docs/api-reference/next/image">
          next/image
        </a>{" "}
        component with live examples.
      </p>

    </div>



  )
}