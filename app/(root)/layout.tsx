
import MovibleNav from '@/components/shared/MovibleNav'
import SideBara from '@/components/shared/SideBara'


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