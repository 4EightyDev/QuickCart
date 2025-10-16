import React, { useState, useEffect } from 'react';
import { assets } from '@/assets/assets';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import classNames from 'classnames';

const HeaderSlider = () => {
  const sliderData = [
    {
      id: 1,
      title: 'The First Collection',
      blurb:
        'Amethysts are like little spiritual helpers, known for their calming energy and deep connection to the universe. They’re a favorite among women who want to find inner peace and harmony.',
      image1:
        'https://www.femailler.com/cdn/shop/products/long-byzantine-drop-earrings-nat1_2000x.jpg?v=1657921397',
      image2:
        'https://www.femailler.com/cdn/shop/products/short-byz-drops-nat1_2000x.jpg?v=1663184777',
      image3:
        'https://askandembla.net/cdn/shop/files/HC0778-G-5-Copy.jpg?v=1748513420',
    },
    {
      id: 2,
      title: 'The Second Collection',
      blurb:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nam ab animi consequuntur. Maiores nam excepturi eligendi unde voluptates ab nesciunt a dolor error dolore!',
      image1:
        'https://www.femailler.com/cdn/shop/products/long-byzantine-drop-earrings-nat1_2000x.jpg?v=1657921397',
      image2:
        'https://www.femailler.com/cdn/shop/products/short-byz-drops-nat1_2000x.jpg?v=1663184777',
      image3:
        'https://askandembla.net/cdn/shop/files/ED1059-S-4.jpg?v=1758097460',
    },
    {
      id: 3,
      title: 'The Third Collection',
      blurb:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nam ab animi consequuntur. Maiores nam excepturi eligendi unde voluptates ab nesciunt a dolor error dolore!',
      image1:
        'https://www.femailler.com/cdn/shop/products/long-byzantine-drop-earrings-nat1_2000x.jpg?v=1657921397',
      image2:
        'https://www.femailler.com/cdn/shop/products/short-byz-drops-nat1_2000x.jpg?v=1663184777',
      image3:
        'https://askandembla.net/cdn/shop/files/ED1059-S-6.jpg?v=1758097461',
    },
    {
      id: 4,
      title: 'The Fourth Collection',
      blurb:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nam ab animi consequuntur. Maiores nam excepturi eligendi unde voluptates ab nesciunt a dolor error dolore!',
      image1:
        'https://www.femailler.com/cdn/shop/products/long-byzantine-drop-earrings-nat1_2000x.jpg?v=1657921397',
      image2:
        'https://www.femailler.com/cdn/shop/products/short-byz-drops-nat1_2000x.jpg?v=1663184777',
      image3:
        'https://askandembla.net/cdn/shop/files/ED0920-S-2.jpg?v=1754996370',
    },
    {
      id: 5,
      title: 'The Fifth Collection',
      blurb:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nam ab animi consequuntur. Maiores nam excepturi eligendi unde voluptates ab nesciunt a dolor error dolore!',
      image1:
        'https://www.femailler.com/cdn/shop/products/long-byzantine-drop-earrings-nat1_2000x.jpg?v=1657921397',
      image2:
        'https://www.femailler.com/cdn/shop/products/short-byz-drops-nat1_2000x.jpg?v=1663184777',
      image3:
        'https://askandembla.net/cdn/shop/files/ED1141-S-2.jpg?v=1755095488',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [sliderData.length]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index + 1);
  };

  return (
    <section className='overflow-hidden relative w-full'>
      <div className='flex ease-in-out'>
        {sliderData.map((slide, index) => (
          <>
            <AnimatePresence>
              {currentSlide === index && (
                <motion.div
                  key={slide.id}
                  className='min-w-full h-[calc(100vh-100px)] py-8 mt-[100px]'
                >
                  <motion.div className='grid grid-cols-1 md:grid-cols-2 w-full relative gap-40 container mx-auto'>
                    <>
                      <motion.div className='grid grid-cols-2 gap-4 h-full'>
                        <div className='col-span-2 pt-10'>
                          <AnimatePresence>
                            <motion.h1
                              key='title'
                              initial={{ y: '20%', opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              exit={{ y: '20%', opacity: 0 }}
                              transition={{ duration: 1 }}
                              className='text-8xl font-ogg-text-light mb-6'
                            >
                              {slide.title}
                            </motion.h1>
                            <motion.p
                              className='text-lg font-ogg-text-light z-40'
                              key='blurb'
                              initial={{ y: '20%', opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              exit={{ y: '20%', opacity: 0 }}
                              transition={{ delay: 0.5, duration: 1 }}
                            >
                              {slide.blurb}
                            </motion.p>
                          </AnimatePresence>
                          <div className='flex gap-8 relative mt-12'>
                            <button className='bg-gray-800 text-white px-6 py-2 font-ogg-text-light text-xl'>
                              Shop Collection
                            </button>
                          </div>
                        </div>
                        <AnimatePresence>
                          <motion.div
                            className='bg-gray-50 col-span-1 flex mt-auto'
                            key='image1'
                            initial={{ y: '20%', opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: '20%', opacity: 0 }}
                            transition={{ duration: 1 }}
                          >
                            <img
                              className='mix-blend-multiply'
                              src={slide.image1}
                              alt=''
                            />
                          </motion.div>
                          <motion.div
                            className='bg-gray-50 col-span-1 flex mt-auto'
                            key='image2'
                            initial={{ y: '20%', opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: '20%', opacity: 0 }}
                            transition={{ delay: 0.3, duration: 1.5 }}
                          >
                            <img
                              className='mix-blend-multiply'
                              src={slide.image2}
                              alt=''
                            />
                          </motion.div>
                        </AnimatePresence>
                      </motion.div>

                      <div className='bg-black relative h-[90%]'>
                        <div className='flex gap-8 absolute h-16 w-full bg-white/0 justify-between px-10'>
                          <button
                            onClick={() => setCurrentSlide(index - 1)}
                            className={classNames(
                              'text-white/75 hover:text-white px-6 py-2 text-xl',
                              currentSlide === 0 && 'invisible'
                            )}
                          >
                            <span className='inline-block rotate-180 translate-y-1'>
                              &#8594;
                            </span>
                            <span className='text-base ml-4'>
                              Previous Collection
                            </span>{' '}
                          </button>
                          <button
                            onClick={() => setCurrentSlide(index + 1)}
                            className='text-white/75 hover:text-white px-6 py-2 text-xl'
                          >
                            <span className='text-base mr-4'>
                              Next Collection
                            </span>{' '}
                            <span className='inline-block'>&#8594;</span>
                          </button>
                        </div>
                        <div className='absolute h-80 w-24 bottom-0 right-0 py-8 flex flex-col gap-3'>
                          {sliderData.map((_, index) => (
                            <div
                              key={index}
                              onClick={() => handleSlideChange(index)}
                              className={`cursor-pointer rounded-xl mx-auto w-0.5 hover:bg-gray-200 duration-300 grow ${
                                currentSlide === index
                                  ? 'bg-white duration-200 basis-[30%]'
                                  : 'bg-gray-600 hover:bg-gray-500 duration-200'
                              }`}
                            ></div>
                          ))}
                        </div>
                        <div className='relative w-full h-full -bottom-16 -left-24 bg-black overflow-hidden'>
                          <AnimatePresence>
                            <motion.img
                              className='inset-0 h-full w-full object-cover'
                              src={slide.image3}
                              key='image3'
                              initial={{ scale: '115%', opacity: 0 }}
                              animate={{ scale: '100%', opacity: 1 }}
                              exit={{ scale: '115%', opacity: 0 }}
                              transition={{ delay: 0.5, duration: 1 }}
                            />
                          </AnimatePresence>
                        </div>
                      </div>
                    </>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        ))}
      </div>

      {/* <div className='flex items-center justify-center gap-2 mt-8'>
        {sliderData.map((_, index) => (
          <div
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`h-2 w-2 rounded-full cursor-pointer ${
              currentSlide === index ? 'bg-orange-600' : 'bg-gray-500/30'
            }`}
          ></div>
        ))}
      </div> */}
    </section>
  );
};

export default HeaderSlider;
