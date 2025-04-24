export interface LinkProps {
  id: number
  text: string
  href: string
  isExternal: boolean
}

export interface ImageProps {
  id: number
  documentId: string
  url: string
  alternativeText: string
}

export interface LogoProps {
  logoText: string
  image: ImageProps
}

type ComponentType =
  | 'blocks.hero-section'
  | 'blocks.info-block'
  | 'blocks.hero-box'
  | 'blocks.info-box'
  | 'blocks.motto'

interface Base<
  T extends ComponentType,
  D extends object = Record<string, unknown>
> {
  id: number
  __component: T
  documentId?: string
  createdAt?: string
  updatedAt?: string
  publishedAt?: string
  data?: D
}

export interface HeroBoxProps extends Base<'blocks.hero-box'> {
  cta: LinkProps
  title: string
  followingText: string
}

export interface InfoBoxProps extends Base<'blocks.info-box'> {
  WhatWeDoDescription: string
  aboutUsDescription: string
}

export interface MottoProps extends Base<'blocks.motto'> {
  motto: string
}

export type Block = HeroBoxProps | InfoBoxProps | MottoProps
