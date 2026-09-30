// Mise en forme d'une ligne de stock pour l'affichage console
export function formaterLigne(p) {
  return `${p.ref} — ${p.nom} : ${p.quantite} ${p.unite || "u"}`;
  let alerte = p.quantite <= p.seuil ? ' ⚠' : '';
  return `${p.ref} — ${p.nom} : ${p.quantite}${alerte}`;
}

export function formaterTableau(produits) {
  return produits.map(formaterLigne).join('\n');
}
