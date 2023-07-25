import Layout from '../layouts/Layout'
const About = () => {
  return (
    <>
      <Layout>
        <div className='container mx-auto'>
          <div className='bg-base-200 flex flex-row'>
            <div className='hero-content flex-col lg:flex-row my-10'>
              <img
                src='https://images.unsplash.com/photo-1637169797848-12431f1d355c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80'
                className='lg:max-w-xl rounded-lg shadow-2xl ml-2'
              />
              <div>
                <h1 className='text-4xl font-bold'>Introducing MoneyTracker</h1>
                <h3 className='text-xl font-semibold mt-3'>
                  {' '}
                  - Your Ultimate Financial Companion!
                </h3>
                <p className='py-2 px-5'>
                  Managing your finances just got easier with the MoneyTracker
                  app. Stay in control of your money and make smarter financial
                  decisions effortlessly. With an intuitive interface and
                  powerful features, MoneyTracker simplifies the way you track,
                  budget, and save.
                </p>
                <p className='px-5 font-bold'>Key Features:</p>
                <div className='py2 px-5'>
                  <ol>
                    <li className='py-2'>
                      <span className='font-bold'>1. Expense Tracking:</span>
                      Monitor your spending in real-time. Categorize
                      transactions for a clear overview of your budget.
                    </li>
                    <li className='py-2'>
                      <span className='py-5 font-bold'>
                        2. Budgeting Made Simple:
                      </span>
                      Set personalized budgets for different categories and
                      track your progress effortlessly.
                    </li>
                    <li className='py-2'>
                      <span className='py-5 font-bold'>
                        3. Smart Insights::
                      </span>
                      Get valuable insights into your financial habits. Identify
                      areas where you can save and optimize your spending.
                    </li>
                    <li className='py-2'>
                      <span className='py-5 font-bold'>4. Bill Reminders:</span>
                      Never miss a due date again! Receive timely reminders for
                      upcoming bills and avoid late fees.
                    </li>
                    <li className='py-2'>
                      <span className='py-5 font-bold'>5. Goal Setting:</span>
                      Plan for the future by setting financial goals. Stay
                      motivated and track your progress towards achieving them.
                    </li>
                    <li className='py-2'>
                      <span className='py-5 font-bold'>
                        6. Secure & Private:
                      </span>
                      Your data is protected with bank-grade security. Rest
                      assured that your financial information is safe and
                      confidential.
                    </li>
                    <li className='py-2'>
                      <span className='py-5 font-bold'>
                        7. Multi-platform Sync:
                      </span>
                      Access your finances from anywhere, anytime. Sync across
                      multiple devices to stay updated on the go.
                    </li>
                  </ol>
                </div>
                <p className='px-5 mb-5'>
                  Take charge of your finances with MoneyTracker and embark on a
                  journey towards financial freedom. Download now and experience
                  a stress-free approach to managing your money!
                </p>
              </div>
            </div>
          </div>
          <h3 className='text-center px-3 py-2 bg-green-500 text-white'>
            Created by Jahedul Huda Chowdhury (Alvi), email: alvic5050@gmail.com
          </h3>
        </div>
      </Layout>
    </>
  )
}

export default About
