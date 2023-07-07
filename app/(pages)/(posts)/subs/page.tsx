import { Banner } from "@/app/src/components/UI/notAuth/Banner"

export default function Subs() {
  const isAuth = false

  if (!isAuth) return <Banner />

  return (
    <h1>subs</h1>
  )
}
