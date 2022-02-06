import React from 'react'
import store from '../../../image/store.png'

const Footer = () => {
  return (
    <footer class='text-gray-700 body-font'>
      <div class='container px-4 py-24 mx-auto'>
        <div class='flex flex-wrap md:text-left text-center -mb-10 -mx-4'>
          <div class='lg:w-1/4 md:w-1/2 w-full px-4'>
            <h2 class='title-font font-medium text-gray-900 tracking-widest text-sm mb-3'>
              CATEGORIES
            </h2>
            <nav class='list-none mb-10'>
              <li>
                <a class='text-gray-600 hover:text-gray-800' href='http://'>
                  First Link
                </a>
              </li>
              <li>
                <a class='text-gray-600 hover:text-gray-800' href='http://'>
                  Second Link
                </a>
              </li>
              <li>
                <a class='text-gray-600 hover:text-gray-800' href='http://'>
                  Third Link
                </a>
              </li>
              <li>
                <a class='text-gray-600 hover:text-gray-800' href='http://'>
                  Fourth Link
                </a>
              </li>
            </nav>
          </div>
          <div class='lg:w-1/4 md:w-1/2 w-full px-4'>
            <h2 class='title-font font-medium text-gray-900 tracking-widest text-sm mb-3'>
              BLOGS
            </h2>
            <nav class='list-none mb-10'>
              <li>
                <a class='text-gray-600 hover:text-gray-800' href='http://'>
                  First Link
                </a>
              </li>
              <li>
                <a class='text-gray-600 hover:text-gray-800' href='http://'>
                  Second Link
                </a>
              </li>
              <li>
                <a class='text-gray-600 hover:text-gray-800' href='http://'>
                  Third Link
                </a>
              </li>
              <li>
                <a class='text-gray-600 hover:text-gray-800' href='http://'>
                  Fourth Link
                </a>
              </li>
            </nav>
          </div>
          <div class='lg:w-1/4 md:w-1/2 w-full px-4'>
            <h2 class='title-font font-medium text-gray-900 tracking-widest text-sm mb-3'>
              SOCIAL
            </h2>
            <nav class='list-none mb-10'>
              <li>
                <a
                  class='text-gray-600 hover:text-gray-800'
                  href='http://facebook.com'
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  class='text-gray-600 hover:text-gray-800'
                  href='http://instagram.com'
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  class='text-gray-600 hover:text-gray-800'
                  href='http://youtube.com'
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  class='text-gray-600 hover:text-gray-800'
                  href='http://linkedin.com'
                >
                  LinkedIn
                </a>
              </li>
            </nav>
          </div>
          <div class='lg:w-1/4 md:w-1/2 w-full px-4'>
            <nav class='list-none mb-10'>
              <li>
                <img src={store} alt='' />
              </li>
              <li>
               
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div class='bg-gray-200'>
        <div class='container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row'>
          <p class='text-gray-500 text-sm text-center sm:text-left'>
            © DEV CST 14 batch{' '}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
