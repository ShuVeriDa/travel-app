import type {Metadata, NextPage} from "next";
import {Layout} from "@/components/common/Layout";

export const metadata: Metadata = {
  title: 'Explore'
}

const ExplorePage: NextPage = () => {
  return (
    <Layout>
      Explore
    </Layout>
  )
}

export default ExplorePage