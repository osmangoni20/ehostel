import React from 'react'
import team1 from '../../../image/team1.png'
import team2 from '../../../image/team2.png'
import team3 from '../../../image/team3.png'

const Staff = () => {
  return (
    <section class='text-gray-700 body-font border-t border-gray-200'>
      <div class='container px-5 py-24 mx-auto'>
        <div class='flex flex-col text-center w-full mb-20'>
          <h1 class='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>
            OUR STAFF
          </h1>
        </div>
        <div class='flex flex-wrap -m-2'>
          <div class='p-2 lg:w-1/3 md:w-1/2 w-full'>
            <div class='h-full flex items-center border-gray-200 border p-4 rounded-lg'>
              <img
                alt='team'
                class='w-200 h-200 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4'
                src={team1}
              />
              <div class='flex-grow'>
                <h2 class='text-gray-900 title-font font-medium'>John Doe</h2>
                <p class='text-gray-500'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est,
                  tempore?
                </p>
              </div>
            </div>
          </div>
          <div class='p-2 lg:w-1/3 md:w-1/2 w-full'>
            <div class='h-full flex items-center border-gray-200 border p-4 rounded-lg'>
              <img
                alt='team'
                class='w-200 h-200 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4'
                src={team2}
              />
              <div class='flex-grow'>
                <h2 class='text-gray-900 title-font font-medium'>
                  Martina Eden
                </h2>
                <p class='text-gray-500'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est,
                  tempore?
                </p>
              </div>
            </div>
          </div>
          <div class='p-2 lg:w-1/3 md:w-1/2 w-full'>
            <div class='h-full flex items-center border-gray-200 border p-4 rounded-lg'>
              <img
                alt='team'
                class='w-200 h-200 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4'
                src={team3}
              />
              <div class='flex-grow'>
                <h2 class='text-gray-900 title-font font-medium'>
                  Boris Kitua
                </h2>
                <p class='text-gray-500'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est,
                  tempore?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Staff
