import React from "react";
import {
  Button,
  TextField,
  Chip,
  Box,
  Typography,
  Avatar,
  Stack,
  Paper,
  InputAdornment,
} from "@mui/material";
import { RefreshCcw, Plus } from "lucide-react";
import SearchIcon from "@mui/icons-material/Search";

const Repository = ({
  name,
  visibility,
  language,
  size,
  updatedAt,
  contributors,
}) => {
  const getLanguageColor = (lang) => {
    const colors = {
      React: "#61dafb",
      Javascript: "#f7df1e",
      Python: "#3572A5",
      Swift: "#ffac45",
      Java: "#b07219",
      "HTML/CSS": "#e34c26",
      PHP: "#4F5D95",
    };
    return colors[lang] || "#3498db";
  };

  return (
    <Box
      sx={{
        borderBottom: "1px solid",
        borderColor: "divider",
        "&:last-child": {
          borderBottom: "none",
        },
        py: 2,
        px: 2,
        "&:hover": {
          backgroundColor: "rgba(0, 0, 0, 0.02)",
        },
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Box>
          <Box display="flex" alignItems="center" gap={1}>
            <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
              {name}
            </Typography>
            <Chip
              label={visibility}
              size="small"
              variant={visibility === "Public" ? "filled" : "outlined"}
              sx={{
                height: "24px",
                backgroundColor:
                  visibility === "Public"
                    ? "rgba(23, 92, 211, 0.08)"
                    : "transparent",
                borderColor:
                  visibility === "Public" ? "transparent" : "#DADADA",
                color: visibility === "Public" ? "#175CD3" : "#6C737F",
                borderRadius: "4px",
                padding: "4px 8px",
                fontSize: "12px",
                fontWeight: 500,
                textTransform: "none",
              }}
            />
          </Box>
          <Box
            display="flex"
            alignItems="center"
            gap={2}
            mt={1}
            color="text.secondary"
          >
            <Box display="flex" alignItems="center" gap={1}>
              <Box
                width={8}
                height={8}
                borderRadius="50%"
                bgcolor={getLanguageColor(language)}
              />
              <Typography variant="body2">{language}</Typography>
            </Box>
            <Typography variant="body2">{size} KB</Typography>
            <Typography variant="body2">Updated {updatedAt}</Typography>
          </Box>
        </Box>
        {contributors && contributors.length > 0 && (
          <Stack direction="row" spacing={-1}>
            {contributors.map((contributor, index) => (
              <Avatar
                key={index}
                sx={{
                  width: 32,
                  height: 32,
                  bgcolor: "grey.300",
                  border: "2px solid white",
                  fontSize: "0.875rem",
                }}
              >
                {typeof contributor === "string" ? contributor[0] : contributor}
              </Avatar>
            ))}
          </Stack>
        )}
      </Box>
    </Box>
  );
};

const RepositoryList = () => {
  const repositories = [
    {
      name: "design-system",
      visibility: "Public",
      language: "React",
      size: "7320",
      updatedAt: "1 day ago",
      contributors: [],
    },
    {
      name: "codeant-ci-app",
      visibility: "Private",
      language: "Javascript",
      size: "5871",
      updatedAt: "2 days ago",
      contributors: ["CR"],
    },
    {
      name: "analytics-dashboard",
      visibility: "Private",
      language: "Python",
      size: "4521",
      updatedAt: "5 days ago",
      contributors: ["V", "S", "2"],
    },
    {
      name: "mobile-app",
      visibility: "Public",
      language: "Swift",
      size: "3096",
      updatedAt: "3 days ago",
      contributors: [],
    },
    {
      name: "e-commerce-platform",
      visibility: "Private",
      language: "Java",
      size: "6210",
      updatedAt: "6 days ago",
      contributors: ["S"],
    },
    {
      name: "blog-website",
      visibility: "Public",
      language: "HTML/CSS",
      size: "1876",
      updatedAt: "4 days ago",
      contributors: [],
    },
    {
      name: "social-network",
      visibility: "Private",
      language: "PHP",
      size: "5432",
      updatedAt: "7 days ago",
      contributors: [],
    },
  ];

  return (
    <Box
      sx={{
        p: 4,
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
        sx={{ width: "100%" }}
      >
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 500 }} gutterBottom>
            Repositories
          </Typography>
          <Typography variant="body2" color="text.secondary">
            33 total repositories
          </Typography>
        </Box>
        <Box display="flex" gap={1}>
          <Button
            variant="outlined"
            size="small"
            startIcon={<RefreshCcw size={16} />}
          >
            Refresh All
          </Button>
          <Button
            variant="contained"
            size="small"
            startIcon={<Plus size={16} />}
          >
            Add Repository
          </Button>
        </Box>
      </Box>

      <Box mb={3}>
        <TextField
          placeholder="Search Repositories"
          variant="outlined"
          size="small"
          sx={{ maxWidth: 400 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "text.secondary" }} />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Paper variant="outlined">
        {repositories.map((repo, index) => (
          <Repository key={index} {...repo} />
        ))}
      </Paper>
    </Box>
  );
};

export default RepositoryList;
