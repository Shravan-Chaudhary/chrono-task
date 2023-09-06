'use client'

import { Collection } from '@prisma/client'
import { Collapsible, CollapsibleTrigger } from './ui/collapsible'
import { useState } from 'react'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'
import { CollectionColor, CollectionColors } from '@/lib/constant'

interface CollectionCardProps {
  collection: Collection
}

const CollectionCard: React.FC<CollectionCardProps> = ({ collection }) => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger>
        <Button
          variant='ghost'
          className={cn(
            'flex w-full justify-between p-6',
            CollectionColors[collection.color as CollectionColor],
          )}
        >
          {collection.name}
        </Button>
      </CollapsibleTrigger>
    </Collapsible>
  )
}

export default CollectionCard
