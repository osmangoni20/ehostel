import {
  faAddressCard, faEnvelope, faPhone
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Contact = () => {
  return (
    <section class='text-gray-700 body-font relative'>
      <div class='flex flex-wrap w-full mb-20 flex-col items-center text-center'>
        <h1 class='sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900'>
          GET IN TOUCH
        </h1>
      </div>
      <div class='container mx-auto flex flex-wrap'>
        <div class='p-2 lg:w-1/3 md:w-1/2 w-full'>
          <h3 class='sm:text-2xl text-xl font-medium title-font mb-2 text-gray-900'>
            CONTACT US
          </h3>

          <div class='mx-auto mt-12'>
            <div class='flex items-center'>
              <div class='flex-grow'>
                <FontAwesomeIcon icon={faAddressCard} size='2x' />
              </div>
              <div class='flex-grow'>
                <h2 class='text-gray-900 title-font font-medium'>Address</h2>
                <p class='text-gray-500'>Dormitory Hall,Bangladesh</p>
              </div>
            </div>

            <div class='flex items-center'>
              <div class='flex-grow'>
                <FontAwesomeIcon icon={faPhone} size='2x' />
              </div>
              <div class='flex-grow'>
                <h2 class='text-gray-900 title-font font-medium'>Phone</h2>
                <p class='text-gray-500'>01783546945</p>
              </div>
            </div>

            <div class='flex items-center'>
              <div class='flex-grow'>
                <FontAwesomeIcon icon={faEnvelope} size='2x' />
              </div>
              <div class='flex-grow'>
                <h2 class='text-gray-900 title-font font-medium'>Email</h2>
                <p class='text-gray-500'>Fojilatunnesa13@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div class='lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10'>
          <h3 class='sm:text-2xl text-xl font-medium title-font mb-2 text-gray-900'>
            SEND MESSAGE
          </h3>
          <input
            class='bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4'
            placeholder='Email'
            type='email'
          />
          <textarea
            class='bg-white rounded border border-gray-400 focus:outline-none h-32 focus:border-indigo-500 text-base px-4 py-2 mb-4 resize-none'
            placeholder='Message'
          ></textarea>
          <button class='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
            Button
          </button>
        </div>
      </div>
    </section>
  )
}

export default Contact
