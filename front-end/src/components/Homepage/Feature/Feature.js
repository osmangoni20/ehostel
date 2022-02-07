import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faConciergeBell,
  faAddressCard,
  faMinusCircle,
  faHandsHelping,
} from '@fortawesome/free-solid-svg-icons'

const Feature = () => {
  return (
    <section class='text-gray-700 body-font border-t border-gray-200'>
      <div class='container px-5 py-24 mx-auto'>
        <div class='flex flex-wrap w-full mb-20 flex-col items-center text-center'>
          <h1 class='sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900'>
            Feature
          </h1>
        </div>
        <div class='flex flex-wrap -m-4'>
          <div class='xl:w-1/3 md:w-1/2 p-4'>
            <div class='border border-gray-300 p-6 rounded-lg'>
              <div class='w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4'>
                <FontAwesomeIcon icon={faConciergeBell} size='3x' />
              </div>
              <h2 class='text-lg text-gray-900 font-medium title-font mb-2'>
                Service
              </h2>
              <p class='leading-relaxed text-base'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Commodi laudantium enim dolores exercitationem sit aspernatur
                delectus ullam quis libero corporis?
              </p>
            </div>
          </div>
          <div class='xl:w-1/3 md:w-1/2 p-4'>
            <div class='border border-gray-300 p-6 rounded-lg'>
              <div class='w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4'>
                <FontAwesomeIcon icon={faAddressCard} size='3x' />
              </div>
              <h2 class='text-lg text-gray-900 font-medium title-font mb-2'>
                About
              </h2>
              <p class='leading-relaxed text-base'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Commodi laudantium enim dolores exercitationem sit aspernatur
                delectus ullam quis libero corporis?
              </p>
            </div>
          </div>
          <div class='xl:w-1/3 md:w-1/2 p-4'>
            <div class='border border-gray-300 p-6 rounded-lg'>
              <div class='w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4'>
                <FontAwesomeIcon icon={faMinusCircle} size='3x' />
              </div>
              <h2 class='text-lg text-gray-900 font-medium title-font mb-2'>
                Rule
              </h2>
              <p class='leading-relaxed text-base'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Commodi laudantium enim dolores exercitationem sit aspernatur
                delectus ullam quis libero corporis?
              </p>
            </div>
          </div>
          <div class='xl:w-1/3 md:w-1/2 p-4'>
            <div class='border border-gray-300 p-6 rounded-lg'>
              <div class='w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4'>
                <FontAwesomeIcon icon={faHandsHelping} size='3x' />
              </div>
              <h2 class='text-lg text-gray-900 font-medium title-font mb-2'>
                Help
              </h2>
              <p class='leading-relaxed text-base'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Commodi laudantium enim dolores exercitationem sit aspernatur
                delectus ullam quis libero corporis?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feature
