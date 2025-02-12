import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Link ,Routes, Route, useLocation } from "react-router-dom"
import Day1 from "./routes/day1.tsx";
import Day2 from "./routes/day2.tsx";
import Day3 from "./routes/day3.tsx";
import Day4 from "./routes/day4.tsx";
import Day5 from "./routes/day5.tsx";
import Day6 from "./routes/day6.tsx";
import Day7 from "./routes/day7.tsx";
import Day8 from "./routes/day8.tsx";
import Day9 from "./routes/day9.tsx";
import Day10 from "./routes/day10.tsx";
import Day11 from "./routes/day11.tsx";
import Day12 from "./routes/day12.tsx";
import Day13 from "./routes/day13.tsx";
import Day14 from "./routes/day14.tsx";

function App() {
  const location = useLocation();
  const { hash, pathname, search } = location;
  return (
    <div id="app" style={({ height: "100"}, { display: "flex" })}>


      <Sidebar   backgroundColor="#003459" style={({ height: "100vh", position:"sticky", top:0 })}  >
        <Menu>
          <MenuItem
            style={{ textAlign: "center" }}
          ><Link to="/"><h2>Kalendarz</h2></Link>
            
          </MenuItem>

          <Link to="/day1"><MenuItem icon={<HomeOutlinedIcon />}>Dzień 1</MenuItem></Link>
          <Link to="/day2"><MenuItem icon={<PeopleOutlinedIcon />}>Dzień 2</MenuItem></Link>
          <Link to="/day3"><MenuItem icon={<ContactsOutlinedIcon />}>Dzień 3</MenuItem></Link>
          <Link to="/day4"><MenuItem icon={<ReceiptOutlinedIcon />}>Dzień 4</MenuItem></Link>
          <Link to="/day5"><MenuItem icon={<HelpOutlineOutlinedIcon />}>Dzień 5</MenuItem></Link>
          <Link to="/day6"><MenuItem icon={<CalendarTodayOutlinedIcon />}>Dzień 6</MenuItem></Link>
          <Link to="/day7"><MenuItem icon={<ContactsOutlinedIcon />}>Dzień 7</MenuItem></Link>
          <Link to="/day8"><MenuItem icon={<ReceiptOutlinedIcon />}>Dzień 8</MenuItem></Link>
          <Link to="/day9"><MenuItem icon={<HelpOutlineOutlinedIcon />}>Dzień 9</MenuItem></Link>
          <Link to="/day10"><MenuItem icon={<CalendarTodayOutlinedIcon />}>Dzień 10</MenuItem></Link>
          <Link to="/day11"><MenuItem icon={<ContactsOutlinedIcon />}>Dzień 11</MenuItem></Link>
          <Link to="/day12"><MenuItem icon={<ReceiptOutlinedIcon />}>Dzień 12</MenuItem></Link>
          <Link to="/day13"><MenuItem icon={<HelpOutlineOutlinedIcon />}>Dzień 13</MenuItem></Link>
          <Link to="/day14"><MenuItem icon={<CalendarTodayOutlinedIcon />}>Dzień 14</MenuItem></Link>
        </Menu>
      </Sidebar>
      <main className="w-100" >
        <div className="w-100 p-3" style={({ height: "100vh" }, { display: "flex" })}>
          <h1 style={{ color: "white", marginLeft: "35%" }}>
            Podróż zwana życiem
          </h1>
        </div>

        {!pathname.includes("day") && (
            <div>
              <h1 style={{ color: "white", marginLeft: "5rem" }}>
                <p>Cześć!</p>
              </h1>
              <div className="m-5 pb-15">
                <p >Cześć Misiaku! Witem Cię w tym pięknym miesiącu, kiedy skończysz 30 latek. O rany ale to zleciało!</p>
                <p >Z tej okazji chiałbym zabrać Cię w podróż. Każdego dnia jedna kartka z kalendarza będzie się aktywować. Każda z nich to jakieś unikalne wspomnienie, wyzwanie, prezent albo gra. Jeżeli uda Ci się ukończyć wszystkie z nich, czeka Cię -tytyrytyty- Nagroda Główna!</p>
                <p > Mam nadzieję że te podróż sprawi Ci radość, tak jak inne nasze podróże. Wszystkiego najlepszego po raz pierwszy. Kocham Cię! </p>
              </div>


            </div>
          )}
      <Routes>
        <Route path="/day1" element={<Day1 />} />
        <Route path="/day2" element={<Day2 />} />
        <Route path="/day3" element={<Day3 />} />
        <Route path="/day4" element={<Day4 />} />
        <Route path="/day5" element={<Day5 />} />
        <Route path="/day6" element={<Day6 />} />
        <Route path="/day7" element={<Day7 />} />
        <Route path="/day8" element={<Day8 />} />
        <Route path="/day9" element={<Day9 />} />
        <Route path="/day10" element={<Day10 />} />
        <Route path="/day11" element={<Day11 />} />
        <Route path="/day12" element={<Day12 />} />
        <Route path="/day13" element={<Day13 />} />
        <Route path="/day14" element={<Day14 />} />
      </Routes>
      </main>

    </div>
  );
}

export default App;