'use client'
import {
  Pagination as PaginationComponent,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { cn } from '@/utilities/ui'
import { useRouter } from 'next/navigation'
import React from 'react'

export const Pagination: React.FC<{
  className?: string
  page: number
  totalPages: number
}> = (props) => {
  const router = useRouter()

  const { className, page, totalPages } = props
  const hasNextPage = page < totalPages
  const hasPrevPage = page > 1

  const hasExtraPrevPages = page - 1 > 1
  const hasExtraNextPages = page + 1 < totalPages

  const pageHref = (target: number) => (target <= 1 ? '/posts' : `/posts/page/${target}`)

  const itemClassName =
    'rounded-full shadow-sm transition-colors duration-300 hover:bg-customLightOrange'

  const activeItemClassName = 'bg-customBlue text-white shadow-md hover:bg-customBlue hover:text-white'

  return (
    <div className={cn('my-12 flex justify-center', className)}>
      <PaginationComponent>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              disabled={!hasPrevPage}
              className={cn(itemClassName, !hasPrevPage && 'pointer-events-none opacity-40')}
              onClick={() => {
                router.push(pageHref(page - 1))
              }}
            />
          </PaginationItem>

          {hasExtraPrevPages && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}

          {hasPrevPage && (
            <PaginationItem>
              <PaginationLink
                className={itemClassName}
                onClick={() => {
                  router.push(pageHref(page - 1))
                }}
              >
                {page - 1}
              </PaginationLink>
            </PaginationItem>
          )}

          <PaginationItem>
            <PaginationLink
              isActive
              className={cn(itemClassName, activeItemClassName)}
              onClick={() => {
                router.push(pageHref(page))
              }}
            >
              {page}
            </PaginationLink>
          </PaginationItem>

          {hasNextPage && (
            <PaginationItem>
              <PaginationLink
                className={itemClassName}
                onClick={() => {
                  router.push(pageHref(page + 1))
                }}
              >
                {page + 1}
              </PaginationLink>
            </PaginationItem>
          )}

          {hasExtraNextPages && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}

          <PaginationItem>
            <PaginationNext
              disabled={!hasNextPage}
              className={cn(itemClassName, !hasNextPage && 'pointer-events-none opacity-40')}
              onClick={() => {
                router.push(pageHref(page + 1))
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </PaginationComponent>
    </div>
  )
}
