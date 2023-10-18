const boutonTalonneur = document.getElementById('boutonTalonneur');
const bulleTalonneur = document.getElementById('bulleTalonneur');
const pointTalonneur = document.getElementById('pointTalonneur');

if (window.innerWidth >= 701) {

boutonTalonneur.addEventListener('mouseover', () => {
  bulleTalonneur.style.color = '#a8dbff';
  bulleTalonneur.style.transform = 'scale(1.08)';
  pointTalonneur.style.backgroundColor = "#a8dbff";
  pointTalonneur.style.color = "black";
  pointTalonneur.style.transform = 'scale(1.3)';
});
boutonTalonneur.addEventListener('mouseout', () => {
  bulleTalonneur.style.color = 'grey';
  bulleTalonneur.style.transform = 'scale(1.0)';
  pointTalonneur.style.backgroundColor = "#8b1010";
  pointTalonneur.style.color = "white";
  pointTalonneur.style.transform = 'scale(1.0)';
});

const boutonPilier1 = document.getElementById('boutonPilier1');
const pointPilier1 = document.getElementById('pointPilier1');
const boutonPilier2 = document.getElementById('boutonPilier2')
const pointPilier2 = document.getElementById('pointPilier2')
const bullePilier = document.getElementById('bullePilier');
boutonPilier1.addEventListener('mouseover', () => {
  bullePilier.style.color = '#a8dbff';
  bullePilier.style.transform = 'scale(1.08)';
  pointPilier1.style.backgroundColor = "#a8dbff";
  pointPilier1.style.transform = 'scale(1.3)';
  pointPilier2.style.backgroundColor = "#a8dbff";
  pointPilier2.style.transform = 'scale(1.3)';
  pointPilier1.style.color = "black";
  pointPilier2.style.color = "black";
});
boutonPilier1.addEventListener('mouseout', () => {
  bullePilier.style.color = 'grey';
  bullePilier.style.transform = 'scale(1.0)';
  pointPilier1.style.backgroundColor = "#8b1010";
  pointPilier1.style.transform = 'scale(1.0)';
  pointPilier2.style.backgroundColor = "#8b1010";
  pointPilier2.style.transform = 'scale(1.0)';
  pointPilier1.style.color = "white";
  pointPilier2.style.color = "white";
});
boutonPilier2.addEventListener('mouseover', () => {
  bullePilier.style.color = '#a8dbff';
  bullePilier.style.transform = 'scale(1.08)';
  pointPilier1.style.backgroundColor = "#a8dbff";
  pointPilier1.style.transform = 'scale(1.3)';
  pointPilier2.style.backgroundColor = "#a8dbff";
  pointPilier2.style.transform = 'scale(1.3)';
  pointPilier1.style.color = "black";
  pointPilier2.style.color = "black";
});
boutonPilier2.addEventListener('mouseout', () => {
  bullePilier.style.color = 'grey';
  bullePilier.style.transform = 'scale(1.0)';
  pointPilier1.style.backgroundColor = "#8b1010";
  pointPilier1.style.transform = 'scale(1.0)'
  pointPilier2.style.backgroundColor = "#8b1010";
  pointPilier2.style.transform = 'scale(1.0)';
  pointPilier1.style.color = "white";
  pointPilier2.style.color = "white";
});

const boutonDeuxiemeLigne = document.getElementById('boutonDeuxiemeLigne');
const bulleDeuxiemeLigne = document.getElementById('bulleDeuxiemeLigne');
const pointDeuxiemeLigne1 = document.getElementById('pointDeuxiemeLigne1');
const pointDeuxiemeLigne2 = document.getElementById('pointDeuxiemeLigne2');
boutonDeuxiemeLigne.addEventListener('mouseover', () => {
  bulleDeuxiemeLigne.style.color = '#a8dbff';
  bulleDeuxiemeLigne.style.transform = 'scale(1.08)';
  pointDeuxiemeLigne1.style.backgroundColor = "#a8dbff";
  pointDeuxiemeLigne1.style.transform = 'scale(1.3)';
  pointDeuxiemeLigne2.style.backgroundColor = "#a8dbff";
  pointDeuxiemeLigne2.style.transform = 'scale(1.3)';
  pointDeuxiemeLigne1.style.color = "black";
  pointDeuxiemeLigne2.style.color = "black";
});
boutonDeuxiemeLigne.addEventListener('mouseout', () => {
  bulleDeuxiemeLigne.style.color = 'grey';
  bulleDeuxiemeLigne.style.transform = 'scale(1.0)';
  pointDeuxiemeLigne1 .style.backgroundColor = "#8b1010";
  pointDeuxiemeLigne1.style.transform = 'scale(1.0)';
  pointDeuxiemeLigne2.style.backgroundColor = "#8b1010";
  pointDeuxiemeLigne2.style.transform = 'scale(1.0)';
  pointDeuxiemeLigne1.style.color = "white";
  pointDeuxiemeLigne2.style.color = "white";
});

const boutonTroisiemeLigne = document.getElementById('boutonTroisiemeLigne');
const bulleTroisiemeLigne = document.getElementById('bulleTroisiemeLigne');
const pointTroisiemeLigne1 = document.getElementById('pointTroisiemeLigne1');
const pointTroisiemeLigne2 = document.getElementById('pointTroisiemeLigne2');
const pointTroisiemeLigne3 = document.getElementById('pointTroisiemeLigne3');
boutonTroisiemeLigne.addEventListener('mouseover', () => {
  bulleTroisiemeLigne.style.color = '#a8dbff';
  bulleTroisiemeLigne.style.transform = 'scale(1.08)';
  pointTroisiemeLigne1.style.backgroundColor = "#a8dbff";
  pointTroisiemeLigne1.style.transform = 'scale(1.3)';
  pointTroisiemeLigne2.style.backgroundColor = "#a8dbff";
  pointTroisiemeLigne2.style.transform = 'scale(1.3)';
  pointTroisiemeLigne3.style.backgroundColor = "#a8dbff";
  pointTroisiemeLigne3.style.transform = 'scale(1.3)';
  pointTroisiemeLigne1.style.color = "black";
  pointTroisiemeLigne2.style.color = "black";
  pointTroisiemeLigne3.style.color = "black";
});
boutonTroisiemeLigne.addEventListener('mouseout', () => {
  bulleTroisiemeLigne.style.color = 'grey';
  bulleTroisiemeLigne.style.transform = 'scale(1.0)';
  pointTroisiemeLigne1.style.backgroundColor = "#8b1010";
  pointTroisiemeLigne1.style.transform = 'scale(1.0)';
  pointTroisiemeLigne2.style.backgroundColor = "#8b1010";
  pointTroisiemeLigne2.style.transform = 'scale(1.0)';
  pointTroisiemeLigne3.style.backgroundColor = "#8b1010";
  pointTroisiemeLigne3.style.transform = 'scale(1.0)';
  pointTroisiemeLigne1.style.color = "white";
  pointTroisiemeLigne2.style.color = "white";
  pointTroisiemeLigne3.style.color = "white";
});

const boutonMelee = document.getElementById('boutonMelee');
const bulleMelee = document.getElementById('bulleMelee');
const pointMelee = document.getElementById('pointMelee');
boutonMelee.addEventListener('mouseover', () => {
  bulleMelee.style.color = '#a8dbff';
  bulleMelee.style.transform = 'scale(1.08)';
  pointMelee.style.backgroundColor = "#a8dbff";
  pointMelee.style.transform = 'scale(1.3)';
  pointMelee.style.color = "black";
});
boutonMelee.addEventListener('mouseout', () => {
  bulleMelee.style.color = 'grey';
  bulleMelee.style.transform = 'scale(1.0)';
  pointMelee.style.backgroundColor = "#8b1010";
  pointMelee.style.transform = 'scale(1.0)';
  pointMelee.style.color = "white";
});

const boutonOuverture = document.getElementById('boutonOuverture');
const bulleOuverture = document.getElementById('bulleOuverture');
const pointOuverture = document.getElementById('pointOuverture');
boutonOuverture.addEventListener('mouseover', () => {
  bulleOuverture.style.color = '#a8dbff';
  bulleOuverture.style.transform = 'scale(1.08)';
  pointOuverture.style.backgroundColor = "#a8dbff";
  pointOuverture.style.transform = 'scale(1.3)';
  pointOuverture.style.color = "black";
});
boutonOuverture.addEventListener('mouseout', () => {
  bulleOuverture.style.color = 'grey';
  bulleOuverture.style.transform = 'scale(1.0)';
  pointOuverture.style.backgroundColor = "#8b1010";
  pointOuverture.style.transform = 'scale(1.0)';
  pointOuverture.style.color = "white";
});

const boutonCentre = document.getElementById('boutonCentre');
const bulleCentre = document.getElementById('bulleCentre');
const pointCentre1 = document.getElementById('pointCentre1');
const pointCentre2 = document.getElementById('pointCentre2');
boutonCentre.addEventListener('mouseover', () => {
  bulleCentre.style.color = '#a8dbff';
  bulleCentre.style.transform = 'scale(1.08)';
  pointCentre1.style.backgroundColor = "#a8dbff";
  pointCentre1.style.transform = 'scale(1.3)';
  pointCentre2.style.backgroundColor = "#a8dbff";
  pointCentre2.style.transform = 'scale(1.3)';
  pointCentre1.style.color = "black";
  pointCentre2.style.color = "black";
});
boutonCentre.addEventListener('mouseout', () => {
  bulleCentre.style.color = 'grey';
  bulleCentre.style.transform = 'scale(1.0)';
  pointCentre1.style.backgroundColor = "#8b1010";
  pointCentre1.style.transform = 'scale(1.0)';
  pointCentre2.style.backgroundColor = "#8b1010";
  pointCentre2.style.transform = 'scale(1.0)';
  pointCentre1.style.color = "white";
  pointCentre2.style.color = "white";
});

const boutonAilier1 = document.getElementById('boutonAilier1');
const pointAilier1 = document.getElementById('pointAilier1');
const boutonAilier2 = document.getElementById('boutonAilier2')
const pointAilier2 = document.getElementById('pointAilier2')
const bulleAilier = document.getElementById('bulleAilier');
boutonAilier1.addEventListener('mouseover', () => {
  bulleAilier.style.color = '#a8dbff';
  bulleAilier.style.transform = 'scale(1.08)';
  pointAilier1.style.backgroundColor = "#a8dbff";
  pointAilier1.style.transform = 'scale(1.3)';
  pointAilier2.style.backgroundColor = "#a8dbff";
  pointAilier2.style.transform = 'scale(1.3)';
  pointAilier1.style.color = "black";
  pointAilier2.style.color = "black";
});
boutonAilier1.addEventListener('mouseout', () => {
  bulleAilier.style.color = 'grey';
  bulleAilier.style.transform = 'scale(1.0)';
  pointAilier1.style.backgroundColor = "#8b1010";
  pointAilier1.style.transform = 'scale(1.0)'
  pointAilier2.style.backgroundColor = "#8b1010";
  pointAilier2.style.transform = 'scale(1.0)';
  pointAilier1.style.color = "white";
  pointAilier2.style.color = "white";
});
boutonAilier2.addEventListener('mouseover', () => {
  bulleAilier.style.color = '#a8dbff';
  bulleAilier.style.transform = 'scale(1.08)';
  pointAilier1.style.backgroundColor = "#a8dbff";
  pointAilier1.style.transform = 'scale(1.3)';
  pointAilier2.style.backgroundColor = "#a8dbff";
  pointAilier2.style.transform = 'scale(1.3)';
  pointAilier1.style.color = "black";
  pointAilier2.style.color = "black";
});
boutonAilier2.addEventListener('mouseout', () => {
  bulleAilier.style.color = 'grey';
  bulleAilier.style.transform = 'scale(1.0)';
  pointAilier1.style.backgroundColor = "#8b1010";
  pointAilier1.style.transform = 'scale(1.0)'
  pointAilier2.style.backgroundColor = "#8b1010";
  pointAilier2.style.transform = 'scale(1.0)';
  pointAilier1.style.color = "white";
  pointAilier2.style.color = "white";
});

const boutonArriere = document.getElementById('boutonArriere');
const bulleArriere = document.getElementById('bulleArriere');
const pointArriere = document.getElementById('pointArriere');
boutonArriere.addEventListener('mouseover', () => {
  bulleArriere.style.color = '#a8dbff';
  bulleArriere.style.transform = 'scale(1.08)';
  pointArriere.style.backgroundColor = "#a8dbff";
  pointArriere.style.transform = 'scale(1.3)';
  pointArriere.style.color = "black";
});

  boutonArriere.addEventListener('mouseout', () => {
  bulleArriere.style.color = 'grey';
  bulleArriere.style.transform = 'scale(1.0)';
  pointArriere.style.backgroundColor = "#8b1010";
  pointArriere.style.transform = 'scale(1.0)';
  pointArriere.style.color = "white";
});

}