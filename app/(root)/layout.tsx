import { onBoard } from '@/features/auth/action/onBoard';
import { ChatShell } from '@/features/conversation/components/chat-shell';
import { auth } from '@clerk/nextjs/server'
import React from 'react'

export default async function RootGrouplayout({ children }: { children: React.ReactNode }) {

    // await auth.protect()
    await onBoard();

    return (
        <ChatShell>
            {children}
        </ChatShell>
    )
}