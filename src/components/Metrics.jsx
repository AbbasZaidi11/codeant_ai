import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import PieChartIcon from "@mui/icons-material/PieChart";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const MetricsCard = ({ title, value }) => (
  <Box sx={{ textAlign: "center", minWidth: "100px" }}>
    <Typography variant="body2" color="text.secondary" gutterBottom>
      {title}
    </Typography>
    <Typography variant="h6" fontWeight="500">
      {value}
    </Typography>
  </Box>
);

const Metrics = () => {
  return (
    <Box sx={{ p: 4, maxWidth: "600px" }}>
      <Paper
        elevation={3}
        sx={{
          p: 3,
          mb: 3,
          borderRadius: 2,
          backgroundColor: "white",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
          <Box
            component="img"
            src="/src/assets/logo.png"
            alt="CodeAnt Logo"
            sx={{ height: 24, mr: 1 }}
          />
          <Typography variant="subtitle1" fontWeight="500">
            AI to Detect & Autofix Bad Code
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 3,
          }}
        >
          <MetricsCard title="Language Support" value="30+" />
          <MetricsCard title="Developers" value="10K+" />
          <MetricsCard title="Hours Saved" value="100K+" />
        </Box>
      </Paper>

      <Paper
        elevation={3}
        sx={{
          p: 3,
          borderRadius: 2,
          backgroundColor: "white",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              Issues Fixed
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 500,
                lineHeight: 1,
              }}
            >
              500K+
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  bgcolor: "rgba(0, 102, 255, 0.1)",
                  borderRadius: 1,
                  px: 1,
                  py: 0.5,
                }}
              >
                <TrendingUpIcon
                  sx={{ color: "#0066FF", mr: 0.5, fontSize: "16px" }}
                />
                <Typography
                  variant="caption"
                  sx={{
                    color: "#0066FF",
                    fontWeight: 500,
                  }}
                >
                  14%
                </Typography>
              </Box>
              <Typography
                variant="caption"
                sx={{
                  color: "text.secondary",
                  display: "block",
                  mt: 0.5,
                  textAlign: "right",
                }}
              >
                This week
              </Typography>
            </Box>

            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "rgba(139, 92, 246, 0.1)",
              }}
            >
              <PieChartIcon
                sx={{
                  fontSize: 24,
                  color: "#8B5CF6",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default Metrics;
