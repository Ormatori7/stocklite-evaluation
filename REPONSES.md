# Réponses — chasse au trésor

<!-- Format imposé, une réponse par ligne :
Q01: <réponse>
commande: <commande(s) utilisée(s)>
-->

Q01: 32
commande: git rev-list --count depart

Q02: Sarah Benali
commande: git blame depart -- src/format.js

Q03: 4459c91
commande: git log -p v0.2.0..depart -- src/stock.js

Q04: API_KEY=sk_live_01de6ba0c9f4d846
commande: git log --diff-filter=D -p depart

Q05: 11544ab934db75adbe18115b8c463b52bdb4296a
commande: git log --diff-filter=D -p depart

Q06: 17
commande: git rev-list --count v0.2.0..v1.0.0

Q07: essai-perf
commande: git for-each-ref --format '%(refname:short) %(objecttype)' refs/tags

Q08:   remotes/origin/HEAD
commande: git branch -a --no-merged v1.0.0

Q09: src/utils.js
commande: git log --follow --name-status --oneline depart -- src/outils.js

Q10: 15  Nathan Robin
commande: git shortlog -s -n depart

Q11: 2026-03-24
commande: git log -1 --format=%cd --date=short v1.0.0

Q12: "feat(cli): bannière de démarrage"
commande: git log --grep="Revert" depart

Q13: de5637a
commande: git log --merges --online depart

Q14: 16
commande: git diff --numstat v0.1.0..v1.0.0 -- src/stock.js

Q15: 6d6b920
commande: git log -S "TODO: gérer les quantités négatives" --oneline depart
