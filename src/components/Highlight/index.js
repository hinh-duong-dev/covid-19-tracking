import { Grid } from '@material-ui/core'
import React from 'react'
import HighlightCard from './HighlightCard'

export default function Highlight({report}) {

  const data = report && report.length ? report[report.length - 1] : [];

  const summary = [
    {
       title: 'Number of Cases',
       count: data.Confirmed,
       type: 'confirmed'
    },
    {
       title: 'Number of Recovered',
       count: data.Recovered,
       type: 'recovered'
    },
    {
       title: 'Number of Deaths',
       count: data.Deaths,
       type: 'death'
    }
  ]

  return (
    <Grid container spacing={3}>
       {summary.map((data, index) => (
        <Grid  key={index} item sm={4} xs={12}>
          <HighlightCard
            title={data.title}
            count={data.count}
            type={data.type}
          />
        </Grid>
      ))}
    </Grid>
  )
}
