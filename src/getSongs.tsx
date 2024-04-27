import { supabase } from './App';

export async function getSongs() {
  let { data: Songs, } = await supabase.from('Songs').select('*');
  for (let song of Songs) {
    let songList = document.getElementById('Songs');
    songList.innerHTML += `<li>${song.title} - ${song.artist}</li>`;
  }
}
