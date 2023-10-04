import { NextPageWithLayout } from '@/pages/_app'

const home: NextPageWithLayout = () => {
  return <>home</>
}

home.getLayout = (page) => {
  return <>{page}</>
}

export default home
