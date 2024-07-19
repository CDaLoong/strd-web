'use client' // 将这个组件标记为客户端组件

import { useState, useEffect } from 'react'
import { Metadata } from 'next'
import SkeletonScreen from '@/components/SkeletonScreen'

// // 修改路由元数据
// export const metadata: Metadata = {
//   title: 'DaLoong的脑宇宙'
// }

export default function Home() {
  const [loading, setLoading] = useState(true)

  window.document.title = 'DaLoong的脑宇宙'
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000) // 模拟加载时间
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <SkeletonScreen />
  }

  return (
    <main>
      <h1 className="text-4xl font-bold">欢迎来到我的脑宇宙</h1>
      {/* 其他内容 */}
    </main>
  )
}
