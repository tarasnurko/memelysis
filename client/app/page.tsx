'use client'

import { Header } from "@/components/header";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { API_URL } from "@/constants";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";

interface ClusterData {
  id: string;
  text: string;
  score: number;
}

export default function Home() {
  const { data: clusters, isLoading } = useQuery<ClusterData[]>({
    queryKey: ['clusters'],
    queryFn: async () => {
      const res = await axios.get(`${API_URL}/clusters`)
      return res?.data
    }
  })

  console.log(clusters)

  return <div className="h-full">
    <Header />
    {isLoading ? <p className="text-center text-xl">Loading...</p> : <div className="grid grid-cols-4 gap-2 p-4">
      {clusters?.map((cluster) => (
        <Card key={cluster?.id}>
          <CardHeader>
            <CardTitle>{cluster?.text}</CardTitle>
          </CardHeader>
          <CardContent className="mt-auto">
            <div className="w-full flex flex-col gap-2">
              <div className="flex items-center">
                <span className="">Total Score:</span>
                <span>{cluster.score}</span>
              </div>
              <Link className={buttonVariants({ variant: "outline" })} href={`/clusters/${cluster.id}`}>Details</Link>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>}
  </div>
}
