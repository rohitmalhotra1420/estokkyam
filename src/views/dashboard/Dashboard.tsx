import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  useTheme,
  Container,
  Paper,
  Fade,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SearchBar from "../../components/text/SearchText";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getAllBlogs } from "../../store/blogs";
import { selectBlogSearch } from "../../store/blogs/selectors";
import Text2 from "../../components/text/Text2";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { useNavigate } from "react-router-dom";
import { useThemeMode } from "../../contexts/ThemeContext";

const Dashboard = () => {
  const [isPublished, setIsPublished] = useState(false);

  const dispatch = useAppDispatch();
  const searchText = useAppSelector(selectBlogSearch);
  const navigate = useNavigate();
  const { isDarkMode } = useThemeMode();

  const theme = useTheme();

  const [search, setSearch] = useState(searchText);

  const handleSearchChange = (str: string) => {
    setSearch(str);
  };

  const handleSearchSubmit = (evt: any) => {
    if (evt.key === "Enter") dispatch(getAllBlogs({ search: search, page: 1 }));
  };

  const handleDetail = () => {
    navigate("/sell");
  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <Fade in timeout={500}>
      <Box
        sx={{
          minHeight: '100vh',
          background: isDarkMode 
            ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'
            : 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
          transition: theme.transitions.create(['background'], {
            duration: theme.transitions.duration.complex,
          }),
        }}
      >
        {/* Hero Section with Updated Background */}
        <Container maxWidth="xl">
          <Box
            sx={{
              position: 'relative',
              minHeight: '60vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: isDarkMode
                ? 'radial-gradient(circle at 50% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)'
                : 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.2) 0%, transparent 50%)',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: isDarkMode
                  ? 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
                  : 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                animation: 'float 20s ease-in-out infinite',
              },
              '@keyframes float': {
                '0%, 100%': { transform: 'translateY(0px)' },
                '50%': { transform: 'translateY(-20px)' },
              },
            }}
          >
            <Box
              sx={{
                textAlign: 'center',
                zIndex: 1,
                maxWidth: '800px',
                px: 3,
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', md: '4rem', lg: '5rem' },
                  fontWeight: 800,
                  background: isDarkMode
                    ? 'linear-gradient(45deg, #fff 30%, #a8edea 90%)'
                    : 'linear-gradient(45deg, #fff 30%, #f093fb 90%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 3,
                  textShadow: isDarkMode ? '0 0 30px rgba(168, 237, 234, 0.5)' : '0 0 30px rgba(240, 147, 251, 0.5)',
                }}
              >
                Welcome to eSTOKKYAM
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  mb: 4,
                  fontSize: { xs: '1.2rem', md: '1.5rem' },
                  fontWeight: 300,
                }}
              >
                Your Gateway to Digital Asset Trading
              </Typography>
            </Box>
          </Box>
        </Container>

        {/* Filters Section */}
        <Container maxWidth="xl">
          <Paper
            elevation={isDarkMode ? 8 : 4}
            sx={{
              background: isDarkMode
                ? 'linear-gradient(135deg, rgba(23, 48, 57, 0.9) 0%, rgba(0, 180, 201, 0.9) 100%)'
                : 'linear-gradient(135deg, #173039 0%, #00b4c9 100%)',
              backdropFilter: 'blur(10px)',
              borderRadius: 3,
              p: { xs: 3, md: 5 },
              mb: 4,
              transition: theme.transitions.create(['background', 'box-shadow'], {
                duration: theme.transitions.duration.complex,
              }),
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: '2rem', md: '2.8rem' },
                lineHeight: 1.2,
                color: "#fff",
                fontWeight: 700,
                marginBottom: 3,
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              Filters
            </Typography>
            <SearchBar
              search={search}
              handleSearch={handleSearchChange}
              handleKeyDown={handleSearchSubmit}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                paddingLeft: { xs: 0, md: "20px" },
                mt: 2,
                justifyContent: { xs: 'center', md: 'flex-start' },
              }}
            >
              <Checkbox
                {...label}
                checked={isPublished}
                sx={{ "& .MuiSvgIcon-root": { fill: "#ffffff" } }}
                onClick={(e: any) => setIsPublished(!isPublished)}
              />
              <Typography
                sx={{
                  fontSize: { xs: '0.9rem', md: '1.1rem' },
                  lineHeight: 1.5,
                  color: "#fff",
                  fontWeight: 400,
                }}
              >
                Show only whitelisted properties's offers
              </Typography>
            </Box>
          </Paper>
        </Container>

        {/* Main Content */}
        <Container maxWidth="xl">
          <Box
            sx={{
              minHeight: "calc(100vh - 450px)",
              backgroundColor: "transparent",
              padding: { xs: "20px", md: "40px 24px" },
              display: "flex",
              flexDirection: { xs: "column", lg: "row" },
              gap: { xs: 2, md: 3 },
            }}
          >
            {/* Action Buttons */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "row", lg: "column" },
                gap: 2,
                flexWrap: { xs: "wrap", lg: "nowrap" },
                justifyContent: { xs: "center", lg: "flex-start" },
              }}
            >
              {[
                { label: "Sell", color: "#00dbe3" },
                { label: "Buy", color: "#23a2bb" },
                { label: "Exchange", color: "#173039" },
              ].map((btn, index) => (
                <Button
                  key={btn.label}
                  variant="contained"
                  sx={{
                    backgroundColor: btn.color,
                    borderRadius: 2,
                    width: { xs: "150px", md: "200px", lg: "352px" },
                    height: "64px",
                    fontSize: { xs: "1rem", md: "1.5rem" },
                    lineHeight: 1,
                    textTransform: "uppercase",
                    color: "#ffffff",
                    fontWeight: 700,
                    transition: theme.transitions.create(['transform', 'box-shadow'], {
                      duration: theme.transitions.duration.short,
                    }),
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: `0 8px 25px rgba(0, 0, 0, 0.3)`,
                      backgroundColor: btn.color,
                    },
                  }}
                >
                  {btn.label}
                </Button>
              ))}
            </Box>

            {/* Table Section */}
            <Paper
              elevation={isDarkMode ? 8 : 4}
              sx={{
                flex: 1,
                borderRadius: 2,
                overflow: "hidden",
                background: isDarkMode
                  ? 'rgba(255, 255, 255, 0.05)'
                  : 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(10px)',
                transition: theme.transitions.create(['background'], {
                  duration: theme.transitions.duration.complex,
                }),
              }}
            >
              <Box sx={{ overflow: "auto", width: "100%" }}>
                <Table
                  aria-label="simple table"
                  sx={{
                    borderCollapse: "unset",
                    whiteSpace: "nowrap",
                    border: `2px solid ${isDarkMode ? '#4a90e2' : '#00dbe3'}`,
                  }}
                >
                  <TableHead
                    sx={{
                      background: isDarkMode
                        ? 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)'
                        : "#f3f3f3",
                    }}
                  >
                    <TableRow
                      sx={{
                        "& th": {
                          padding: { xs: "8px 4px", md: "12px 8px" },
                          borderRight: `2px solid ${isDarkMode ? '#4a90e2' : '#00dbe3'}`,
                          fontSize: { xs: '0.75rem', md: '1rem' },
                        },
                        "& th:first-child": {
                          borderTopLeftRadius: "8px",
                        },
                        "& th:last-child": {
                          borderRight: "0px",
                          borderTopRightRadius: "8px",
                        },
                      }}
                    >
                      {[
                        "Offer ID", "Offer Token", "Buyer token", "Rate of Return",
                        "offer Yield", "% Difference", "Official price", "Asked Price",
                        "% Difference", "Stock", "Cart", "View"
                      ].map((header, index) => (
                        <TableCell key={header} align={index === 0 || index > 2 ? "center" : "left"}>
                          <Text2>{header}</Text2>
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {[1, 2].map((row) => (
                      <TableRow
                        key={row}
                        hover
                        sx={{
                          cursor: "pointer",
                          "& td": {
                            padding: { xs: "8px 4px", md: "12px 8px" },
                            borderRight: `2px solid ${isDarkMode ? '#4a90e2' : '#00dbe3'}`,
                            fontSize: { xs: '0.75rem', md: '1rem' },
                          },
                          "& td:last-child": { borderRight: "0px" },
                          '&:hover': {
                            backgroundColor: isDarkMode
                              ? 'rgba(255, 255, 255, 0.1)'
                              : 'rgba(0, 219, 227, 0.1)',
                          },
                        }}
                      >
                        <TableCell align="center"><Text2>371</Text2></TableCell>
                        <TableCell><Text2>Token 1</Text2></TableCell>
                        <TableCell><Text2>USDC</Text2></TableCell>
                        <TableCell align="center"><Text2>10%</Text2></TableCell>
                        <TableCell align="center"><Text2>12%</Text2></TableCell>
                        <TableCell align="center"><Text2>20%</Text2></TableCell>
                        <TableCell align="center"><Text2>$51.35</Text2></TableCell>
                        <TableCell align="center"><Text2>$60.00</Text2></TableCell>
                        <TableCell align="center"><Text2>$16.85%</Text2></TableCell>
                        <TableCell align="center"><Text2>12.28838</Text2></TableCell>
                        <TableCell align="center">
                          <IconButton
                            aria-label="cart"
                            onClick={(event: any) => event.stopPropagation()}
                            sx={{
                              transition: theme.transitions.create(['transform'], {
                                duration: theme.transitions.duration.short,
                              }),
                              '&:hover': { transform: 'scale(1.1)' },
                            }}
                          >
                            <ShoppingCartOutlinedIcon
                              sx={{ fontSize: "24px", color: isDarkMode ? '#4a90e2' : "#00dbe3" }}
                            />
                          </IconButton>
                        </TableCell>
                        <TableCell align="center">
                          <IconButton
                            aria-label="view"
                            onClick={(event: any) => {
                              event.stopPropagation();
                              handleDetail();
                            }}
                            sx={{
                              transition: theme.transitions.create(['transform'], {
                                duration: theme.transitions.duration.short,
                              }),
                              '&:hover': { transform: 'scale(1.1)' },
                            }}
                          >
                            <RemoveRedEyeOutlinedIcon
                              sx={{ fontSize: "24px", color: isDarkMode ? '#4a90e2' : "#00dbe3" }}
                            />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Paper>
          </Box>
        </Container>
      </Box>
    </Fade>
  );
};

export default Dashboard;
          sx={{
            padding: "50px 80px",
            [theme.breakpoints.up("sm")]: { maxWidth: "1400px" },
            width: "calc(100vw - 6px)",
            margin: "auto",
            textAlign: "left",
          }}
        >
          <Typography
            sx={{
              fontSize: "45px",
              lineHeight: "60px",
              color: "#fff",
              fontWeight: 700,
              marginBottom: "20px",
            }}
          >
            Filters
          </Typography>
          <SearchBar
            search={search}
            handleSearch={handleSearchChange}
            handleKeyDown={handleSearchSubmit}
          />
          <Box
            sx={{ display: "flex", alignItems: "center", paddingLeft: "20px" }}
          >
            <Checkbox
              {...label}
              checked={isPublished}
              sx={{ "& .MuiSvgIcon-root": { fill: "#ffffff" } }}
              onClick={(e: any) => setIsPublished(!isPublished)}
            />
            <Typography
              sx={{
                fontSize: "18px",
                lineHeight: "60px",
                color: "#fff",
                fontWeight: 400,
              }}
            >
              Show only whitelisted properties's offers
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          minHeight: "calc(100vh - 450px)",
          backgroundColor: "#fff",
          padding: "80px 24px",
          display: "flex",
          gap: "20px",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#00dbe3",
              borderRadius: "6px",
              width: "352px",
              height: "64px",
              fontSize: "24px",
              lineHeight: "60px",
              textTransform: "uppercase",
              color: "#ffffff",
              fontWeight: 700,
            }}
          >
            Sell
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#23a2bb",
              borderRadius: "6px",
              width: "352px",
              height: "64px",
              fontSize: "24px",
              lineHeight: "60px",
              textTransform: "uppercase",
              color: "#ffffff",
              fontWeight: 700,
            }}
          >
            Buy
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#173039",
              borderRadius: "6px",
              width: "352px",
              height: "64px",
              fontSize: "24px",
              lineHeight: "60px",
              textTransform: "uppercase",
              color: "#ffffff",
              fontWeight: 700,
            }}
          >
            Exchange
          </Button>
        </Box>
        <Box sx={{ overflow: "auto", width: { sm: "100%" } }}>
          <Table
            aria-label="simple table"
            sx={{
              borderCollapse: "unset",
              whiteSpace: "nowrap",
              borderRadius: "8px",
              border: "2px solid #00dbe3",
            }}
          >
            <TableHead sx={{ background: "#f3f3f3" }}>
              <TableRow
                sx={{
                  "& th": {
                    padding: "0px 5px",
                    borderRight: "2px solid #00dbe3",
                  },
                  "& th:first-child": {
                    borderTopLeftRadius: "8px",
                  },
                  "& th:last-child": {
                    borderRight: "0px",
                    borderTopRightRadius: "8px",
                  },
                }}
              >
                <TableCell align="center">
                  <Text2>Offer ID</Text2>
                </TableCell>
                <TableCell>
                  <Text2>Offer Token</Text2>
                </TableCell>
                <TableCell>
                  <Text2>Buyer token</Text2>
                </TableCell>
                <TableCell align="center">
                  <Text2>Rate of Return</Text2>
                </TableCell>
                <TableCell align="center">
                  <Text2>offer Yield</Text2>
                </TableCell>
                <TableCell align="center">
                  <Text2>% Difference</Text2>
                </TableCell>
                <TableCell align="center">
                  <Text2>Official price</Text2>
                </TableCell>
                <TableCell align="center">
                  <Text2>Asked Price</Text2>
                </TableCell>
                <TableCell align="center">
                  <Text2>% Difference</Text2>
                </TableCell>
                <TableCell align="center">
                  <Text2>Stock</Text2>
                </TableCell>
                <TableCell align="center">
                  <Text2>Cart</Text2>
                </TableCell>
                <TableCell align="center">
                  <Text2>View</Text2>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                hover
                sx={{
                  cursor: "pointer",
                  "& td": {
                    padding: "0px 5px",
                    borderRight: "2px solid #00dbe3",
                  },
                  "& td:last-child": { borderRight: "0px" },
                }}
              >
                <TableCell align="center">
                  <Text2>371</Text2>
                </TableCell>
                <TableCell>
                  <Text2>Token 1</Text2>
                </TableCell>
                <TableCell>
                  <Text2>USDC</Text2>
                </TableCell>
                <TableCell align="center">
                  <Text2>10%</Text2>
                </TableCell>
                <TableCell align="center">
                  <Text2>12%</Text2>
                </TableCell>
                <TableCell align="center">
                  <Text2>20%</Text2>
                </TableCell>
                <TableCell align="center">
                  <Text2>$51.35</Text2>
                </TableCell>
                <TableCell align="center">
                  <Text2>$60.00</Text2>
                </TableCell>
                <TableCell align="center">
                  <Text2>$16.85%</Text2>
                </TableCell>
                <TableCell align="center">
                  <Text2>12.28838</Text2>
                </TableCell>
                <TableCell align="center">
                  <IconButton
                    aria-label="delete"
                    onClick={(event: any) => {
                      event.stopPropagation();
                    }}
                  >
                    <ShoppingCartOutlinedIcon
                      sx={{ fontSize: "24px", color: "#00dbe3" }}
                    />
                  </IconButton>
                </TableCell>
                <TableCell align="center">
                  <IconButton
                    aria-label="delete"
                    onClick={(event: any) => {
                      event.stopPropagation();
                      handleDetail();
                    }}
                  >
                    <RemoveRedEyeOutlinedIcon
                      sx={{ fontSize: "24px", color: "#00dbe3" }}
                    />
                  </IconButton>
                </TableCell>
              </TableRow>
              <TableRow
                hover
                sx={{
                  cursor: "pointer",
                  "& td": {
                    padding: "0px 5px",
                    borderRight: "2px solid #00dbe3",
                  },
                  "& td:last-child": { borderRight: "0px" },
                }}
              >
                <TableCell align="center">
                  <Text2>371</Text2>
                </TableCell>
                <TableCell>
                  <Text2>Token 1</Text2>
                </TableCell>
                <TableCell>
                  <Text2>USDC</Text2>
                </TableCell>
                <TableCell align="center">
                  <Text2>10%</Text2>
                </TableCell>
                <TableCell align="center">
                  <Text2>12%</Text2>
                </TableCell>
                <TableCell align="center">
                  <Text2>20%</Text2>
                </TableCell>
                <TableCell align="center">
                  <Text2>$51.35</Text2>
                </TableCell>
                <TableCell align="center">
                  <Text2>$60.00</Text2>
                </TableCell>
                <TableCell align="center">
                  <Text2>$16.85%</Text2>
                </TableCell>
                <TableCell align="center">
                  <Text2>12.28838</Text2>
                </TableCell>
                <TableCell align="center">
                  <IconButton
                    aria-label="delete"
                    onClick={(event: any) => {
                      event.stopPropagation();
                    }}
                  >
                    <ShoppingCartOutlinedIcon
                      sx={{ fontSize: "24px", color: "#00dbe3" }}
                    />
                  </IconButton>
                </TableCell>
                <TableCell align="center">
                  <IconButton
                    aria-label="delete"
                    onClick={(event: any) => {
                      event.stopPropagation();
                      handleDetail();
                    }}
                  >
                    <RemoveRedEyeOutlinedIcon
                      sx={{ fontSize: "24px", color: "#00dbe3" }}
                    />
                  </IconButton>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
