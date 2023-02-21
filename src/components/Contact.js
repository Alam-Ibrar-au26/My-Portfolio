import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Contact = () => {
  return (
    <section className='py-16 lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: 'false', amount: 0.3 }}
            className='flex-1 flex justify-start items-center'
          >
            <div>
              <h3 className='text-xl uppercase text-accent font-medium mb-3 tracking-wide'>
                Get in Touch
              </h3>
              <h1 className='text-[50px] lg:text[100px] leading-none mb-10'>
                Let's work <br /> together!
              </h1>
            </div>
          </motion.div>
          <motion.form
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: 'false', amount: 0.3 }}
            className='flex-1 border rounded-2xl flex flex-col gap-y-5 pb-20 p-5 items-start'
          >
            <input
              className='bg-transparent border-b py-2 outline-none w-full placeholder:text-white focus:border-accent transition-all '
              type='text'
              placeholder='Your name'
            />
            <input
              className='bg-transparent border-b py-2 outline-none w-full placeholder:text-white focus:border-accent transition-all '
              type='text'
              placeholder='Your email'
            />
            <textarea
              className='bg-transparent border-b py-10 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-10'
              placeholder='Your message'
            ></textarea>
            <button className='btn btn-sm'>Send message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
