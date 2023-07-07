import { Banner } from "@/app/src/components/UI/notAuth/Banner";
import { MainFeed } from "@/app/src/components/feed/mainFeed/MainFeed";

export default function Feed() {
  const isAuth = false

  if (!isAuth) return <Banner />

  return (
    <MainFeed />
  )
}
