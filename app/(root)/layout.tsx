import { onBoard } from '@/features/auth/action/onBoard';
import { auth } from '@clerk/nextjs/server'
import React from 'react'

export default async function RootGrouplayout({ children }: { children: React.ReactNode }) {

    // await auth.protect()
    await onBoard();

    return (
        <div>
            {children}
        </div>
    )
}