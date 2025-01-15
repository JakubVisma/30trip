import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Link ,Routes, Route } from "react-router-dom"
import Day1 from "./routes/day1.tsx";
import Day2 from "./routes/day2.tsx";

function App() {
  return (
    <div id="app" style={({ height: "100vh"}, { display: "flex" })}>


      <Sidebar backgroundColor="rgb(36, 159, 159)" style={{ height: "100vh" }}>
        <Menu>
          <MenuItem
            style={{ textAlign: "center" }}
          ><Link to="/"><h2>Kalendarz</h2></Link>
            
          </MenuItem>

          <MenuItem icon={<HomeOutlinedIcon />}><Link to="/day1">Dzień 1</Link></MenuItem>
          <MenuItem icon={<PeopleOutlinedIcon />}><Link to="/day2">Dzień 2</Link></MenuItem>
          <MenuItem icon={<ContactsOutlinedIcon />}>Dzień 3</MenuItem>
          <MenuItem icon={<ReceiptOutlinedIcon />}>Dzień 4</MenuItem>
          <MenuItem icon={<HelpOutlineOutlinedIcon />}>Dzień 5</MenuItem>
          <MenuItem icon={<CalendarTodayOutlinedIcon />}>Dzień 6</MenuItem>
          <MenuItem icon={<ContactsOutlinedIcon />}>Dzień 7</MenuItem>
          <MenuItem icon={<ReceiptOutlinedIcon />}>Dzień 8</MenuItem>
          <MenuItem icon={<HelpOutlineOutlinedIcon />}>Dzień 9</MenuItem>
          <MenuItem icon={<CalendarTodayOutlinedIcon />}>Dzień 10</MenuItem>
          <MenuItem icon={<ContactsOutlinedIcon />}>Dzień 11</MenuItem>
          <MenuItem icon={<ReceiptOutlinedIcon />}>Dzień 12</MenuItem>
          <MenuItem icon={<HelpOutlineOutlinedIcon />}>Dzień 13</MenuItem>
          <MenuItem icon={<CalendarTodayOutlinedIcon />}>Dzień 14</MenuItem>
        </Menu>
      </Sidebar>
      <main className="w-100" >
      <div className="w-100 p-3" style={({ height: "100vh"}, { display: "flex" } )}>
            <h1 style={{ color: "white", marginLeft: "35%" }}>
                Podróż zwana życiem.
            </h1>
        </div>
      <Routes>
        <Route path="/day1" element={<Day1 />} />
        <Route path="/day2" element={<Day2 />} />
      </Routes>
      </main>

    </div>
  );
}

export default App;