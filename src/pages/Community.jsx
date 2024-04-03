import { Carousel } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const fadeImages = [
  {
    url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    caption: 'First Slide'
  },
  {
    url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
    caption: 'Second Slide'
  },
  {
    url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    caption: 'Third Slide'
  },
  {
    url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    caption: 'Fourth Slide'
  },
  {
    url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    caption: 'Fifth Slide'
  },
];
const Community = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {

  }, [index])

  return (
    <>
      <div className="rounded-xl relative w-80 h-96 ml-12 bg-red-500"
      // nextArrow={}
      // prevArrow={}
      // className="rounded-xl relative w-80 h-96 ml-12 bg-red-500"
      // navigation={() => {
      //   setTimeout(() => {
      //     setIndex((index + 1) % 5);

      //   }, 2000);

      //   return (
      //     <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
      //       {new Array(5).fill("").map((_, i) => {
      //         return (
      //           <span
      //             key={i}
      //             className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${index === i ? "w-8 bg-white" : "w-4 bg-white/50"
      //               }`}
      //           />
      //         )
      //       })}
      //     </div>
      //   )
      // }}
      >

        <Fade  indicators infinite autoplay duration={750}>
          {fadeImages.map((fadeImage, index) => (
            <div key={index}>

              <h2>{fadeImage.caption}</h2>
            </div>
          ))}
        </Fade>

      </div>
    </>
  )
}

export default Community