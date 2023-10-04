import { Button, Skeleton } from '@nextui-org/react'

import Link from 'next/link'
import { useState } from 'react'

export const PreviewViewFile = ({ content, dir }: { content: string; dir: string }) => {
  const [loading, setLoading] = useState(true)

  return (
    <div className="flex flex-col gap-3">
      <div className="w-full h-[500px] relative">
        <iframe
          id={dir}
          src={`https://drive.google.com/viewerng/viewer?embedded=true&url=${encodeURIComponent(
            content
          )}`}
          title="Xem trước"
          className="w-full h-full"
          onLoad={() => setLoading(false)}
        />
        {loading && (
          <Skeleton className="rounded-lg absolute top-0 left-0 w-full h-full">
            <div className="w-full h-full rounded-lg bg-default-300" />
          </Skeleton>
        )}
      </div>
      <Link href={content} className="w-min">
        <Button>Tải xuống: {dir.split('/')[dir.split('/').length - 1]}</Button>
      </Link>
    </div>
  )
}
