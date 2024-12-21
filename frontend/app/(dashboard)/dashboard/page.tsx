'use client'

import { useMounted } from "@/app/component/useMounted";
import Loading from "@/app/loading";

export default function Dashboard() {
  const { hasMounted } = useMounted()


  if (!hasMounted)
    return <Loading />
  return (
    <div>
      Dashboard
    </div>
  );
}
