import LinkNext from 'next/link'
import { ComponentProps } from 'react'

export interface LinkProps extends ComponentProps<typeof LinkNext>{}

export function Link(props: LinkProps) {
  return (
    <LinkNext {...props}/>
  )
}
