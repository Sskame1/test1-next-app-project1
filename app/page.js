import SidePanel from '@/components/left-sidebar'
import { Banners } from '@/components/banners'
import React from 'react'
import MoreBanners from '@/components/banners-more'

export default function Home() {
  return (
    <main>
      <SidePanel />
      <Banners />
      <MoreBanners />
      <MoreBanners />
      <MoreBanners />
      <MoreBanners />
    </main>
  )
}
