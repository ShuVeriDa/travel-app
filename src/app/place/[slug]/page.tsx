'use client'

import {NextPage} from "next";
import {Layout} from "@/components/common/Layout";
import {usePathname, useRouter, useSearchParams} from "next/navigation";


const PlacePage: NextPage = () => {
 const pathname = usePathname()

  return (
    <Layout>
      {pathname}
    </Layout>
  );
};
export default PlacePage