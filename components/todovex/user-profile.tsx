'use client';
import { useSession } from 'next-auth/react';
import React from 'react'
import Image from 'next/image'

export default function Userprofile() {
    const session = useSession();

  return (
    <div>
      <Image src={session?.data?.user?.image} width={24} height={24} alt="user profile picture" className="rounded-full" />
    </div>
  )
}


