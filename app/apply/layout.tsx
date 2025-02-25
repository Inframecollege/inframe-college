import FormNavbar from "../../components/Application/FormNavbar"



export default function MainLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
        <FormNavbar />
        <main>{children}</main>
      
      </>
    )
  }