import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import ExtensionIcon from '@mui/icons-material/Extension';
import Grid4x4Icon from '@mui/icons-material/Grid4x4';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ForumIcon from '@mui/icons-material/Forum';
import FemaleIcon from '@mui/icons-material/Female';
import ParkIcon from '@mui/icons-material/Park';
import DrawIcon from '@mui/icons-material/Draw';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import StarIcon from '@mui/icons-material/Star';
import { Button } from "@mui/material";

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

          <Link to="/day1"><MenuItem ><Button variant="text" startIcon={<PlayCircleOutlineIcon /> }>Dzień 1</Button></MenuItem></Link>
          <Link to="/day2"><MenuItem ><Button variant="text" startIcon={<AccessibilityNewIcon /> }>Dzień 2</Button></MenuItem></Link>
          <Link to="/day3"><MenuItem ><Button variant="text" startIcon={<Grid4x4Icon /> }>Dzień 3</Button></MenuItem></Link>
          <Link to="/day4"><MenuItem ><Button variant="text" startIcon={<ExtensionIcon /> }>Dzień 4</Button></MenuItem></Link>
          <Link to="/day5"><MenuItem ><Button variant="text" startIcon={<VolunteerActivismIcon /> }>Dzień 5</Button></MenuItem></Link>
          <Link to="/day6"><MenuItem ><Button variant="text" startIcon={<AccessTimeIcon /> }>Dzień 6</Button></MenuItem></Link>
          <Link to="/day7"><MenuItem ><Button variant="text" startIcon={<ForumIcon /> }>Dzień 7</Button></MenuItem></Link>
          <Link to="/day8"><MenuItem ><Button variant="text" startIcon={<FemaleIcon /> }>Dzień 8</Button></MenuItem></Link>
          <Link to="/day9"><MenuItem ><Button variant="text" startIcon={<HomeOutlinedIcon /> }>Dzień 9</Button></MenuItem></Link>
          <Link to="/day10"><MenuItem ><Button variant="text" startIcon={<ParkIcon /> }>Dzień 10</Button></MenuItem></Link>
          <Link to="/day11"><MenuItem ><Button variant="text" startIcon={<DrawIcon /> }>Dzień 11</Button></MenuItem></Link>
          <Link to="/day12"><MenuItem ><Button variant="text" startIcon={<HomeOutlinedIcon /> }>Dzień 12</Button></MenuItem></Link>
          <Link to="/day13"><MenuItem ><Button variant="text" startIcon={<StarIcon /> }>Dzień 13</Button></MenuItem></Link>
          <Link to="/day14"><MenuItem ><Button variant="text" startIcon={<CardGiftcardIcon /> }>Dzień 14</Button></MenuItem></Link>
        </Menu>
      </Sidebar>
      <main className="w-100" >
        <div className="w-100 p-3" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h1 style={{ color: "white"}}>
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