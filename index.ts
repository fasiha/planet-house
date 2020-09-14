var kmPerAu = 149597900;
var kmPerEarthRadius = 6371;

var data: Record<string, {earthRadius: number, orbitAu: number}|{earthRadius: number, orbitKm: number}> = {
  'Sun': {earthRadius: 109.3, orbitAu: 0},
  'Jupiter': {earthRadius: 10.97, orbitAu: 5.20336301},
  'Saturn': {earthRadius: 9.140, orbitAu: 9.53707032},
  'Uranus': {earthRadius: 3.981, orbitAu: 19.19126393},
  'Neptune': {earthRadius: 3.865, orbitAu: 30.06896348},
  'Earth': {earthRadius: 1, orbitAu: 1.00000011},
  'Venus': {earthRadius: 0.9499, orbitAu: 0.72333199},
  'Mars': {earthRadius: 0.5320, orbitAu: 1.52366231},
  'Ganymede (Jupiter III)': {earthRadius: 0.4135, orbitKm: 1070412},
  'Titan (Saturn VI)': {earthRadius: 0.4037, orbitKm: 1221870},
  'Mercury': {earthRadius: 0.3829, orbitAu: 0.38709893},
  'Callisto (Jupiter IV)': {earthRadius: 0.3783, orbitKm: 1882709},
  'Io (Jupiter I)': {earthRadius: 0.2859, orbitKm: 421700},
  'Moon (Luna)': {earthRadius: 0.2727, orbitKm: 384402},
  'Europa (Jupiter II)': {earthRadius: 0.2450, orbitKm: 671034},
  'Triton (Neptune I)': {earthRadius: 0.2124, orbitKm: 354759},
  'Pluto': {earthRadius: 0.187, orbitAu: 39.482},
  'Eris': {earthRadius: 0.1825, orbitAu: 67.668},
  'Titania (Uranus III)': {earthRadius: 0.1237, orbitKm: 435910},
  'Haumea': {earthRadius: 0.12, orbitAu: 43.335},
  'Rhea (Saturn V)': {earthRadius: 0.1199, orbitKm: 527108},
  'Oberon (Uranus IV)': {earthRadius: 0.1195, orbitKm: 583520},
  'Iapetus (Saturn VIII)': {earthRadius: 0.1153, orbitKm: 3560820},
  'Makemake': {earthRadius: 0.112, orbitAu: 45.792},
  'Ceres': {earthRadius: 0.0742, orbitAu: 2.766},
  // 'test': {earthRadius: 1, orbitAu: 1},
  // 'test2': {earthRadius: 1, orbitKm: kmPerEarthRadius},
};

function format(basePerEarthDiameter: number) {
  const basePerEarthRadius = basePerEarthDiameter / 2;
  const ret = {};
  for (const [k, v] of Object.entries(data)) {
    const orbitKm = 'orbitKm' in v ? v.orbitKm : (v.orbitAu * kmPerAu);
    const orbitBase = orbitKm / kmPerEarthRadius * basePerEarthRadius;
    const diameterBase = v.earthRadius * basePerEarthRadius * 2;
    console.log(
        `${k} - ${diameterBase.toFixed(3)} meters diameter - ${orbitBase.toFixed(3)} meters away from orbit center`)
  }
}

if (module === require.main) {
  // format(11.7) // earth diameter = 1 house = 11.7
  // format(1 / 109.3);        // sun diameter = 1
  format(1 / 109.3 * 11.7); // sun diameter = 1 house = 11.7 m
  // format(1 / 109.3 * 76.3); // sun diameter = 1 street = 76.3 m
  // format(1 / 10.97 * 11.7); // Jupiter diameter = 1 house = 11.7 m
}