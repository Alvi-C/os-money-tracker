import Layout from "../layouts/Layout";
import { NavLink } from 'react-router-dom'


const HomePage = () => {
    return (
      <>
        <Layout>
          <div className='container mx-auto'>
            <div className='hero min-h-screen bg-base-200'>
              <div className='hero-content text-center'>
                <div className='max-w-md'>
                  <div>
                    <img
                      src='/money-tracker-logo-01.png'
                      alt=''
                      className='mb-10'
                    />
                  </div>
                  <h1 className='text-2xl font-bold'>
                    Track Your Finances Effortlessly with MoneyTracker App!
                  </h1>
                  <p className='py-6'>
                    Managing your finances just got easier with the MoneyTracker
                    app. Stay in control of your money and make smarter
                    financial decisions effortlessly.
                  </p>
                  <div className='space-x-4'>
                    <NavLink
                      className={'btn btn-neutral text-white'}
                      to='/income'
                    >
                      Income
                    </NavLink>

                    <NavLink
                      className={'btn btn-neutral text-white'}
                      to='/expense'
                    >
                      Expense
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <h3 className='text-center px-3 py-2 bg-green-500 text-white'>
              Created by Jahedul Huda Chowdhury (Alvi),
              email: alvic5050@gmail.com
            </h3>
          </div>
        </Layout>
      </>
    )
};

export default HomePage;