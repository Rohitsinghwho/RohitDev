"use client";

import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  ContributionGraphLegend,
  ContributionGraphTotalCount,
} from "@/components/kibo-ui/contribution-graph";
import axios from "axios";
import { useEffect, useState } from "react";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";

const username='rohitsinghwho'
const ContributionGraphGithub = () => {

  const [data,setData]=useState([]);

    const fetchData=async()=>{
    try {
      const response=await axios(`https://github-contributions-api.jogruber.de/v4/${username}?y=2025`);
      console.log(response.data);
      if(response.status!==200){
        throw new Error('Failed to fetch the Github data');
      }
      setData(response.data.contributions);
    } catch (error) {
      console.log(error);
      setData([])
    }
  }

  useEffect(()=>{
    fetchData();
  },[])
  return(
  <ContributionGraph data={data} blockSize={8} fontSize={10}>
    <ContributionGraphCalendar>
      {({ activity, dayIndex, weekIndex }) => (
        <ContributionGraphBlock
          activity={activity}
          className={cn(
            'data-[level="0"]:fill-[#ebedf0] dark:data-[level="0"]:fill-[#161b22]',
            'data-[level="1"]:fill-[#9be9a8] dark:data-[level="1"]:fill-[#0e4429]',
            'data-[level="2"]:fill-[#40c463] dark:data-[level="2"]:fill-[#006d32]',
            'data-[level="3"]:fill-[#30a14e] dark:data-[level="3"]:fill-[#26a641]',
            'data-[level="4"]:fill-[#216e39] dark:data-[level="4"]:fill-[#39d353]'
          )}
          dayIndex={dayIndex}
          weekIndex={weekIndex}
        />
      )}
    </ContributionGraphCalendar>
    <ContributionGraphFooter>
      <ContributionGraphTotalCount>
        {({ totalCount, year }) => (
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground text-sm">Year {year}:</span>
            <Badge variant="secondary">
              {totalCount.toLocaleString()} contributions
            </Badge>
          </div>
        )}
      </ContributionGraphTotalCount>
      <ContributionGraphLegend />
    </ContributionGraphFooter>
  </ContributionGraph>
)};

export default ContributionGraphGithub;
