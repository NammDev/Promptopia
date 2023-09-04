'use client'

import React from 'react'
import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import Form from '@/components/Form'

const CreatePromptPage = () => {
  const { data: session } = useSession()

  const [submitting, setSubmitting] = useState(false)

  const [post, setPost] = useState({
    prompt: '',
    tag: '',
  })

  const createPrompt = async (e: React.MouseEvent) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      const response = await fetch('/api/prompt/new', {
        method: 'POST',
        body: JSON.stringify({
          prompt: post.prompt,
          userId: session?.user?.image,
          tag: post.tag,
        }),
      })
    } catch (error) {}
  }

  return (
    <Form
      type='Create'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
  )
}

export default CreatePromptPage
