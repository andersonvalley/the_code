import { Banner } from "@/app/src/components/UI/notAuth/Banner"

export default function Favorites() {
  const isAuth = false

  if (!isAuth) return <Banner />

  return (
    <div>Favorites</div>
  )
}
