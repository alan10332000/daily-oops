import { DotFillIcon } from '@primer/octicons-react'
import dayjs from 'lib/dayjs'
import Link from 'next/link'

import useReadStatus from '../lib/hooks/useReadStatus'

export default function PostRow({ post, index, totalCount }) {
  const {
    date: { year, month, day },
    slug,
  } = post
  const date = dayjs(`${year}-${month}-${day}`)

  const fullSlug = `/blog/${year}/${month}/${day}/${slug}`

  const [readStatus, setReadStatus, isLoaded] = useReadStatus(fullSlug)

  const onLinkClick = () => {
    setReadStatus(true)
  }

  return (
    <div className="Box-row Box-row--hover-gray d-flex flex-items-start">
      <div
        className="mt-1 mr-2 d-flex flex-items-start"
        style={{ color: 'var(--color-scale-orange-3)' }}
      >
        {readStatus || !isLoaded ? (
          <div style={{ width: 16, height: 16 }} />
        ) : (
          <DotFillIcon title="You haven't read this article yet." />
        )}
      </div>
      <div className="flex-auto">
        <Link
          href={`/blog/${year}/${month}/${day}/${slug}`}
          onClick={onLinkClick}
        >
          <strong>{post.title}</strong>
        </Link>

        <div className="text-small color-fg-muted">
          #{totalCount - index} posted on {date.format('LL')}
        </div>
      </div>
    </div>
  )
}
