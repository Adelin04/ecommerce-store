'use client'

import { useMounted } from "@/app/component/useMounted";
import Loading from "@/app/loading";

export default function Analytics() {
  const { hasMounted } = useMounted()


  if (!hasMounted)
    return <Loading />
  return (
    <div>
      Analytics
    </div>
  );
}
