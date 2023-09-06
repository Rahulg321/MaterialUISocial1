import { Box } from "@mui/material";

import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Post = () => {
  return (
    <Box flex={4} p={2} m={5}>
      <Card>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Lin Dan"
          subheader="September 14, 2023"
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://i.ytimg.com/vi/zFYy5dJcRlQ/maxresdefault.jpg"
          alt="Viktor Axelsen"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Lin Dan is one of the greatest of all time, he is a two time Olympic
            Champion, 5 time World Champion and 6 time All England Champion
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Post;
