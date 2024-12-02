
import MovibleNav from '@/components/shared/MovibleNav'
import SideBara from '@/components/shared/SideBara'

import { Toaster } from "@/components/ui/toaster"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root">
      <SideBara />
      <MovibleNav />

      <div className="root-container">
        <div className="wrapper">
          {children}
        </div>
       <Toaster />
      </div>
      

    </main>
  )
}

export default Layout