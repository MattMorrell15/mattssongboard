import { } from 'react';
import lasersharkpic from './assets/lasershark.jpg';
import lazersharkprofilepic from './assets/lazersharkprofilepic.jpg';
import './App.css';
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jxhnpukxnjlmtboemcgv.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp4aG5wdWt4bmpsbXRib2VtY2d2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQxNjc0MTEsImV4cCI6MjAyOTc0MzQxMX0.ssx_WjyvnlAW-lMScnX_P3qUBBfYkVShD5UZbqSM0AQ';
const supabase = createClient(supabaseUrl, supabaseKey);


function App() {
  async function getMixes() {
    let { data: mixes,  } = await supabase.from('mixes').select('*');
    for (let mix of mixes) {
      let mixList = document.getElementById('Mixes');
      mixList.innerHTML += `<li>${mix.title} // ${mix.artist}</li>`;
    }
  }
  getMixes();
  
  async function getSongs() {
    let { data: Songs,  } = await supabase.from('Songs').select('*');
    for (let song of Songs) {
      let songList = document.getElementById('Songs');
      songList.innerHTML += `<li>${song.title} - ${song.artist}</li>`;
    }
  }
  getSongs();
  return (
    <>
      <div>
        <a
          href="https://scontent.fdet1-2.fna.fbcdn.net/v/t39.30808-6/404963199_713944270825735_1129650481302484129_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=_SxNo0agiB4Q7kNvgGoRjEg&_nc_oc=AdgtEJwOSZMdwOmzZ2C9B5edlNuZmSJasiizGI7lGuvhXRLqzcCPmP_ezCg2ggGNkXo&_nc_ht=scontent.fdet1-2.fna&oh=00_AfBvCYNvgm5u0_wf3o5FvbYDIgALjtbBFXDEygkdTQsOpw&oe=66320C1A"
          target="_blank"
        >
          <img src={lazersharkprofilepic} className="logo vite" alt="Lazer" />
        </a>
        <a
          href="https://scontent.fdet1-1.fna.fbcdn.net/v/t39.30808-6/404467156_713944644159031_7114732170817064993_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=HHcdDkWEcwgAb7rsc00&_nc_ht=scontent.fdet1-1.fna&oh=00_AfDsIXYzwI-u_LGY3nckeOZoRkzZ-b_3uzCk8KpZ0_4_cQ&oe=663216C0"
          target="_blank"
        >
          <img src={lasersharkpic} className="logo react" alt="Laser" />
        </a>
      </div>
      <h1 className="text-4xl font-bold">Matt's Song Board</h1>
      <h2 className="text-2xl font-bold">Favorite Songs</h2>
      <ul id="Songs"></ul>
      <h2 className="text-2xl font-bold">Favorite Mixes</h2>
      <ul id="Mixes"></ul>
    </>
  );
}

export default App;
