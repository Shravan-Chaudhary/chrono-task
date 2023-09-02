import CreateCollectionButton from '@/components/CreateCollectionButton'
import SadFace from '@/components/icons/SadFace'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Skeleton } from '@/components/ui/skeleton'
import prisma from '@/lib/prisma'
import { wait } from '@/lib/wait'
import { currentUser } from '@clerk/nextjs'
import { Suspense } from 'react'

export default async function Home() {
  return (
    <>
      <Suspense fallback={<WelcomeMsgFallback />}>
        <Welcome />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <CollectionList />
      </Suspense>
    </>
  )
}

async function Welcome() {
  const user = await currentUser()
  await wait(3000)

  if (!user) {
    return <div>error</div>
  }
  return (
    <div className='flex w-full mb-12'>
      <h1 className='text-4xl font-bold'>
        Welcome, <br /> {user.firstName}
      </h1>
    </div>
  )
}

function WelcomeMsgFallback() {
  return (
    <div className='flex w-full mb-12'>
      <h1 className='text-4xl font-bold space-y-2'>
        <Skeleton className='w-[150px] h-[36px]' />
        <Skeleton className='w-[150px] h-[36px]' />
      </h1>
    </div>
  )
}

async function CollectionList() {
  const user = await currentUser()
  const collections = await prisma.collection.findMany({
    where: {
      userId: user?.id,
    },
  })

  if (collections.length === 0) {
    return (
      <div className='flex flex-col gap-5 mt-4'>
        <Alert>
          <SadFace />
          <AlertTitle>There are no collections yet</AlertTitle>
          <AlertDescription>
            Create a Collection to get started
          </AlertDescription>
        </Alert>
        <CreateCollectionButton />
      </div>
    )
  }
}
