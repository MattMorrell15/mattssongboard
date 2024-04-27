import { supabase } from './App';

export async function getMixes() {
  let { data: mixes, } = await supabase.from('mixes').select('*');
  for (let mix of mixes) {
    let mixList = document.getElementById('Mixes');
    mixList.innerHTML += `<li>${mix.title} // ${mix.artist}</li>`;
  }
}
