import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import { movies } from "./Models/movietype";
import { useEffect } from "react";
import axios from "axios";

interface MediaProps {
  loading?: boolean;
}

const posturl = (posterpath: string) => {
  return `https://image.tmdb.org/t/p/original${posterpath}`;
};

function Media(props: MediaProps) {
  const [movie, setmovie] = React.useState<movies[]>([]);
  const [loading, setloading] = React.useState(true);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/all/day?api_key=3ac20e37c3b1bdd32dadec03d228864f"
      )
      .then((res) => setmovie(res.data.results));
    setloading(false);
  }, []);

  return (
    <Grid container wrap="nowrap">
      {(loading ? Array.from(new Array(3)) : movie).map((item, index) => (
        <Box key={index} sx={{ width: 210, marginRight: 0.5, my: 5 }}>
          {item ? (
            <img style={{ width: 210, height: 118 }} src={posturl(item.poster_path)} />
          ) : (
            <Skeleton variant="rectangular" width={210} height={118} />
          )}
          {item ? (
            <Box sx={{ pr: 2 }}>
              <Typography gutterBottom variant="body2">
                {item.title}
              </Typography>
              <Typography
                display="block"
                variant="caption"
                color="text.secondary"
              >
                {item.channel}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {`${item.views} • ${item.createdAt}`}
              </Typography>
            </Box>
          ) : (
            <Box sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          )}
        </Box>
      ))}
    </Grid>
  );
}

export default function YouTube() {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <Media loading={false} />

    </Box>
  );
}
