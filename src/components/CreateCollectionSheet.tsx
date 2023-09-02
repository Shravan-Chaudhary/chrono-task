import { FC } from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from './ui/sheet'

type Props = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const CreateCollectionSheet: FC<Props> = ({ open, onOpenChange }) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Add new Collection</SheetTitle>
          <SheetDescription>
            Collections are a way to group your tasks.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}

export default CreateCollectionSheet
