import React from 'react'

export const Header = () => {
  return (
    <div>
        <header className='w-full px-20 py-4 flex flex-row justify-between'>
            <div className='italic font-bold'><a href="/">d.V</a></div>

            <ul className='flex gap-6'>
                <li><a href="/">CP</a></li>
                <li><a href="/dashboard/colors/">Colors</a></li>
                <li><a href="/dashboard/passwords/">Passwords</a></li>
            </ul>

            <button>Login</button>
        </header>
    </div>
  )
}
