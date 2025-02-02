'use client'

import { Header } from "@/components/header";
import { API_URL } from "@/constants";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";


export default function ClusterDetailsPage() {
    //   const { data: clusters, isLoading } = useQuery({
    //     queryKey: ['clusters'],
    //     queryFn: async () => {
    //       const res = await axios.get(`${API_URL}/clusters`)
    //       return res?.data
    //     }
    //   })

    //   console.log(clusters)

    return <div className="h-full">
        <Header />
        cluster details
        {/* {isLoading ? <p className="text-center text-xl">Loading...</p> : <div className="grid grid-cols-3 gap-2">
      {clusters?.map((cluster))}
      </div>} */}
    </div>
}
