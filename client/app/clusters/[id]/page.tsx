'use client'

import { Header } from "@/components/header";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { API_URL } from "@/constants";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from 'next/navigation'

import request from 'graphql-request'
import { GetSimilarTokensDocument } from "@/gql/graphql";
import { useMemo } from "react";

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
    queryKey: ['clusters', id],
    queryFn: async () => {
      const res = await axios.get(`${API_URL}/clusters/${id}`)
      return res?.data
    }
  })

  const tokenMetadatas = useMemo(() => {
    if (!clusterDetails || !clusterDetails?.tokens || !clusterDetails?.tokens?.length) return { names: [], symbols: [] };

    return { names: clusterDetails.tokens.map((token) => token.name), symbols: clusterDetails.tokens.map((token) => token.symbol) };
  }, [clusterDetails])

  const { data: rivensAiTokensData } = useQuery({
    enabled: !!clusterDetails,
    queryKey: ['rivensAiTokens'],
    queryFn: async () =>
      request(
        'https://api.studio.thegraph.com/query/83028/rivens-sepolia/version/latest',
        GetSimilarTokensDocument,
        tokenMetadatas,
      ),
  })

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
          <span>{clusterDetails?.medianValues?.historicalSimilarity}</span>
        </div>
        <div className="flex gap-1 items-center">
          <span>Crypto adoption impact:</span>
          <span>{clusterDetails?.medianValues?.cryptoAdoptionImpact}</span>
        </div>
        <div className="flex gap-1 items-center">
          <span>Hype factor:</span>
          <span>{clusterDetails?.medianValues?.hypeFactor}</span>
        </div>
        <div className="flex gap-1 items-center">
          <span>Meme token potential:</span>
          <span>{clusterDetails?.medianValues?.memeTokenPotential}</span>
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
      <div className="flex flex-col w-full gap-2">
        <p>RivensAI suggested tokens:</p>
        <div className="flex flex-col">
          {rivensAiTokensData && rivensAiTokensData?.launchedEvents?.map((launchEvent) => (
            <div className="" key={launchEvent?.token?.id}>
              Name: {launchEvent?.token.name} | Symbol: {launchEvent?.token.symbol} | Creator: {launchEvent?.token.creator} | Address: {launchEvent?.tokenAddress}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col w-full gap-2">
        <p>News:</p>
        {clusterDetails?.news?.map((newsDetails) => (
          <Accordion type="single" collapsible key={newsDetails.id}>
            <AccordionItem value={newsDetails.id}>
              <AccordionTrigger>{newsDetails?.title}</AccordionTrigger>
              <AccordionContent>
                {newsDetails?.content}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>}
  </div>
}
