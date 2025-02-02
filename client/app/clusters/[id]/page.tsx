'use client'

import { Header } from "@/components/header";
import { API_URL } from "@/constants";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from 'next/navigation'

interface ClusterDetails {
  id: string;
  text: string;
  medianValues: Record<string, string>;
  score?: number;
  news?: {
    id: string;
    title: string;
    excerpt: string;
    content: string
  }[];
  tokens?: { id: string, name: string, symbol: string }[]
}

export default function ClusterDetailsPage() {
  const { id } = useParams<{ id: string }>();

  const { data: clusterDetails, isLoading, isError } = useQuery<ClusterDetails>({
    queryKey: ['clusters'],
    queryFn: async () => {
      const res = await axios.get(`${API_URL}/clusters/${id}`)
      return res?.data
    }
  })

  console.log(clusterDetails)

  return <div className="h-full">
    <Header />
    {(isLoading || !clusterDetails) ? <p className="text-center text-xl">Loading...</p> : <div className="p-4 flex flex-col gap-4 w-full">
      <p>{clusterDetails.text}</p>
      <div className="flex items-center">
        <span className="">Total Score:</span>
        <span>{clusterDetails.score}</span>
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex gap-1 items-center">
          <span>Current trending status:</span>
          <span>{clusterDetails?.medianValues?.currentTrendingStatus}</span>
        </div>
        <div className="flex gap-1 items-center">
          <span>Future trending predictions:</span>
          <span>{clusterDetails?.medianValues?.futureTrendPrediction}</span>
        </div>
        <div className="flex gap-1 items-center">
          <span>Celebrity involvement:</span>
          <span>{clusterDetails?.medianValues?.celebrityInvolvement}</span>
        </div>        <div className="flex gap-1 items-center">
          <span>Company involvement:</span>
          <span>{clusterDetails?.medianValues?.companyInvolvement}</span>
        </div>
        <div className="flex gap-1 items-center">
          <span>Regulatory impact:</span>
          <span>{clusterDetails?.medianValues?.regulatoryImpact}</span>
        </div>
        <div className="flex gap-1 items-center">
          <span>Historical similarity:</span>
          <span>{clusterDetails.medianValues.historicalSimilarity}</span>
        </div>
        <div className="flex gap-1 items-center">
          <span>Crypto adoption impact:</span>
          <span>{clusterDetails.medianValues.cryptoAdoptionImpact}</span>
        </div>
        <div className="flex gap-1 items-center">
          <span>Hype factor:</span>
          <span>{clusterDetails.medianValues.hypeFactor}</span>
        </div>
        <div className="flex gap-1 items-center">
          <span>Meme token potential:</span>
          <span>{clusterDetails.medianValues.memeTokenPotential}</span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p>Suggested token name/symbols</p>
        <div className="flex flex-col">
          {clusterDetails?.tokens?.map((token) => (
            <div className="" key={token.id}>
              Name: {token.name} | Symbol: {token.symbol}
            </div>
          ))}
        </div>
      </div>
    </div>}
  </div>
}
