'use client'

import Prompt from '@/models/prompt'

import React from 'react'
import { useState, useEffect } from 'react'

import PromptCard from './PromptCard'
import { PostInterface } from '@/app/profile/page'

const PromptCardList = ({
  data,
  handleTagClick,
}: {
  data: PostInterface[]
  handleTagClick: () => void
}) => {
  return (
    <div className='mt-16 prompt_layout'>
      {data.map((post: any) => (
        <PromptCard key={post.id} post={post} handleTagClick={handleTagClick} />
      ))}
    </div>
  )
}

const Feed = () => {
  const [searchText, setSearchText] = useState('')
  const [posts, setPosts] = useState([])

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Now TypeScript knows that 'e' is of type React.ChangeEvent<HTMLInputElement>
    const newValue = e.target.value
    setSearchText(newValue)
  }

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/prompt')
      const data = await response.json()
      setPosts(data)
    }
    fetchPosts()
  }, [])

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input
          type='text'
          placeholder='Search for a tag or username'
          value={searchText}
          onChange={handleSearchChange}
          required
          className='search_input peer'
        />
      </form>
      <PromptCardList data={posts} handleTagClick={() => {}} />
    </section>
  )
}

export default Feed
