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
  const [totalContri, setTotalContri] = useState(0);
   const [data2025, setData2025] = useState([]);  // Filtered 2025 only

    const fetchData=async()=>{
    try {
      const response=await axios(`https://github-contributions-api.jogruber.de/v4/${username}?y=all`);
      console.log(response.data);
      if(response.status!==200){
        throw new Error('Failed to fetch the Github data');
      }
      const allContributions=response.data.contributions;
      const year2025 = new Date().getFullYear() === 2025 ? allContributions : 
      allContributions.filter(day => {
        const date = new Date(day.date);
        return date.getFullYear() === 2025;
      });
      setData2025(year2025);
      setData(allContributions);
      const total = response.data.contributions.reduce((sum, day) => sum + (day.count || 0), 0);
      setTotalContri(total);

    } catch (error) {
      console.log(error);
      setData([]);
      setData2025([]);
      setTotalContri(0);
    }
  }

  useEffect(()=>{
    fetchData();
  },[])
  return(
  <ContributionGraph data={data2025} blockSize={15} fontSize={10} className="md:w-full md:flex md:items-center">
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
        {() => (
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground text-sm">Total :</span>
            <Badge variant="secondary">
              {totalContri.toLocaleString()} contributions
            </Badge>
          </div>
        )}
      </ContributionGraphTotalCount>
      <ContributionGraphLegend />
    </ContributionGraphFooter>
  </ContributionGraph>
)};

export default ContributionGraphGithub;
