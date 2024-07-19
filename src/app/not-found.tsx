import { Metadata } from 'next'

// 修改路由元数据
export const metadata: Metadata = {
  title: '404'
}

export default function Page() {
  return (
    <main className="relative box-border h-svh w-full pt-36 text-center">
      <span>404，没有找到当前页面</span>
    </main>
  )
}
