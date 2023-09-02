'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { signIn, signOut, getProviders, useSession } from 'next-auth/react'

const Nav = () => {
  const { data: session } = useSession()

  const [toggleDropdown, setToggleDropdown] = useState(false)

  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      {/* Logo */}
      <Link href='/' className='flex gap-2 flex-center'>
        <Image
          src='/assets/images/logo.svg'
          alt='Promptopia logo'
          width='30'
          height='30'
          className='object-contain'
        />
        <p className='logo_text'>Promptopia</p>
      </Link>

      {/* Desktop Navigation */}
      <div className='sm:flex hidden'>
        {session ? (
          <div className='flex gap-3 md:gap-5'>
            <Link href='/create-prompt' className='black_btn'>
              Create Post
            </Link>
            <button type='button' onClick={() => signOut()} className='outline_btn'>
              Sign Out
            </button>
            <Link href='/profile'>
              <Image
                src='/assets/images/logo.svg'
                alt='Profile Avatar'
                width='37'
                height='37'
                className='rouded-full'
              />
            </Link>
          </div>
        ) : (
          <button onClick={() => signIn()} className='black_btn'>
            Sign In
          </button>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className='sm:hidden flex relative'>
        {session ? (
          <div className='flex'>
            <Image
              src='/assets/images/logo.svg'
              alt='Profile Avatar'
              width='37'
              height='37'
              className='rouded-full'
              onClick={() => {
                setToggleDropdown((prev) => !prev)
              }}
            />
            {toggleDropdown && (
              <div className='dropdown'>
                <Link
                  href='/profile'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href='/create-prompt'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Prompt
                </Link>
                <button
                  className='mt-5 w-full black_btn'
                  type='button'
                  onClick={() => {
                    setToggleDropdown(false)
                    signOut()
                  }}
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <button onClick={() => signIn()} className='black_btn'>
            Sign In
          </button>
        )}
      </div>
    </nav>
  )
}

export default Nav
