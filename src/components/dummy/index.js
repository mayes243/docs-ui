// components/DummyCards.js
import React from "react";
import { styled } from "@mui/system";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const StyledCard = styled(Card)({
  minWidth: 100,
  margin: "5px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
});

const dummyData = Array.from({ length: 25 }, (_, index) => ({
  title: `Card ${index + 1}`,
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
}));

const DummyCards = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {dummyData.map((data, index) => (
        <StyledCard key={index}>
          <CardContent>
            <Typography variant="h5" component="div">
              {data.title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {data.content}
            </Typography>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon color="info" />
            </IconButton>
          </CardContent>
        </StyledCard>
      ))}
    </div>
  );
};

export default DummyCards;
