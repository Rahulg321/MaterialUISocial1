import { Box, ImageListItem, ImageList } from "@mui/material";
import React from "react";
import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

const Rightbar = () => {
  return (
    <Box
      flex={2}
      p={2}
      sx={{
        display: {
          xs: "none",
          sm: "block",
        },
      }}
    >
      <Box position="fixed" p={2}>
        <Typography variant="h5" fontWeight={200} fontSize={30}>
          Online Friends
        </Typography>
        <AvatarGroup max={4} p={2}>
          <Avatar
            alt="Remy Sharp"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpXsaAN9rXyoJPpqnF0uQaTPaxxNABoYEasA&usqp=CAU"
          />
          <Avatar
            alt="Travis Howard"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpXsaAN9rXyoJPpqnF0uQaTPaxxNABoYEasA&usqp=CAU"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpXsaAN9rXyoJPpqnF0uQaTPaxxNABoYEasA&usqp=CAU"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpXsaAN9rXyoJPpqnF0uQaTPaxxNABoYEasA&usqp=CAU"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpXsaAN9rXyoJPpqnF0uQaTPaxxNABoYEasA&usqp=CAU"
          />
        </AvatarGroup>

        <Typography variant="h5" fontWeight={200} fontSize={30}>
          Latest Picsssss
        </Typography>
        <ImageList col={1} row={150}>
          <ImageListItem>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpXsaAN9rXyoJPpqnF0uQaTPaxxNABoYEasA&usqp=CAU" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2020%2F0706%2Fr716129_1080x1080_1%2D1.png&w=570&h=570&format=jpg" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://i.ytimg.com/vi/qNRgRPod-I0/hqdefault.jpg" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxLYCBZX6LwChPai0HtEjUEfpd2v2WrsdGgZigTuPUHLdPW4Nh5nj2_icILDXOmEdNFfI&usqp=CAU" />
          </ImageListItem>
        </ImageList>
      </Box>
    </Box>
  );
};

export default Rightbar;
