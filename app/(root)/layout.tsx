
import MovibleNav from '@/components/shared/MovibleNav'
import SideBara from '@/components/shared/SideBara'
import mongoose from 'mongoose';


const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root">
      <SideBara />
      <MovibleNav />

      <div className="root-container">
        <div className="wrapper">
          {children}
        </div>
      </div>
      

    </main>
  )
}

export default Layout