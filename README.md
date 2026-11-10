# tp5

Requête GET réussie pour récupérer les détails d'un produit (GET /api/products/1) avec un statut 200 OK.
<img width="755" height="630" alt="gettp5" src="https://github.com/user-attachments/assets/85c35d3a-29cc-4547-93a3-c730d179d26a" />

Requête GET pour un produit inexistant (GET /api/products/999) retournant une erreur 404 Not Found avec le message « Produit non trouvé ».

<img width="748" height="621" alt="geteror 404tp5" src="https://github.com/user-attachments/assets/a80fbaa6-2bee-473d-9100-2f487fb8d424" />

Requête POST réussie pour créer un nouveau produit (POST /api/products) avec un statut 201 Created

<img width="759" height="654" alt="postcreer product" src="https://github.com/user-attachments/assets/5b7df08a-9bb4-4fe6-849f-25c52ff0ef12" />

Requête POST avec des données invalides (POST /api/products) retournant une erreur 400 Bad Request et des messages de validation.
<img width="719" height="589" alt="crerrinvalifddata" src="https://github.com/user-attachments/assets/2ad2ca1d-0ac7-446e-9f1c-22e06718b1f7" />

Requête GET avec PowerShell pour lister tous les produits (GET /api/products) renvoyant la liste avec succès.

<img width="1138" height="245" alt="getproductpowershell" src="https://github.com/user-attachments/assets/af511488-4ffa-463c-98a1-a94bd1390b16" />

Requête POST avec PowerShell pour créer un nouveau produit (POST /api/products) validée avec succès par le statut de création.

<img width="1129" height="313" alt="create productinvoke" src="https://github.com/user-attachments/assets/4734b72c-0ab8-4314-b9c0-62976dae0af6" />


Requête GET via PowerShell pour récupérer un produit spécifique par son ID (GET /api/products/4) avec succès.

<img width="961" height="170" alt="getbyidpowershell" src="https://github.com/user-attachments/assets/0822ca0b-2978-446d-b181-e36588b88cfa" />

Requête GET PowerShell pour un produit inexistant (GET /api/products/999) renvoyant une erreur 404 Not Found

<img width="1119" height="180" alt="404powershell" src="https://github.com/user-attachments/assets/edbaf579-f139-4ac5-b63c-da1c138946a4" />

Requête POST PowerShell avec des données invalides (POST /api/products) renvoyant une erreur 400 Bad Request et des messages de validation.


<img width="1151" height="246" alt="invalidinfopowrshell" src="https://github.com/user-attachments/assets/b03cd1ca-8779-4223-8401-a3b33697d08f" />


Recherche de produits par mot-clé via PowerShell (GET /api/products?search=...) retournant les résultats filtrés avec succès

<img width="935" height="161" alt="tester apisearch keword" src="https://github.com/user-attachments/assets/d141ce35-f99c-45e7-8770-4b4e163b74b3" />

Test de la pagination d'une API via PowerShell (GET /api/products?page=1&limit=2) renvoyant les produits paginés avec succès.

<img width="1147" height="218" alt="testpagination" src="https://github.com/user-attachments/assets/90661554-1f5b-4e86-b1df-77312a23dad2" />

Test de la pagination de la page 2 via PowerShell (GET /api/products?page=2&limit=2) renvoyant les produits restants avec succès

<img width="1100" height="242" alt="page2" src="https://github.com/user-attachments/assets/3a45270e-1bb0-4fa8-bd84-364f05306925" />


Requête PowerShell combinant recherche et pagination (GET /api/products?search=laptop&page=1&limit=2) avec des résultats filtrés avec succès

<img width="1219" height="254" alt="comnbine srch pgination" src="https://github.com/user-attachments/assets/a24f3865-cbaf-4cce-b27c-0cec92069cd5" />

Requête PATCH via PowerShell pour mettre à jour le stock d'un produit (PATCH /api/products/1/stock) exécutée avec succès.


<img width="927" height="241" alt="addstock" src="https://github.com/user-attachments/assets/4071e494-304a-4178-965c-668ed985ec5d" />


Requête PATCH PowerShell avec un stock invalide (PATCH /api/products/1/stock) renvoyant une erreur 400 Bad Request

<img width="1186" height="248" alt="testinvlidstock" src="https://github.com/user-attachments/assets/653cea91-f5d1-498d-8b61-57318106f181" />


Requête PATCH PowerShell pour mettre à jour le stock d'un produit inexistant (PATCH /api/products/999/stock) renvoyant une erreur 404 Not Found avec le message « Produit non trouvé ».


<img width="1224" height="247" alt="testnonexistantproduct" src="https://github.com/user-attachments/assets/12d11775-0b45-4e31-b280-68bb039ffcd6" />



1. Quelle est la différence fondamentale entre les modules CommonJS et ES Modules en Node.js 

CommonJS utilise require() pour importer et module.exports pour exporter, tandis que ES Modules utilise import et export. ES Modules est le standard moderne de JavaScript et permet notamment les imports statiques.

2. Pourquoi est-il crucial d'utiliser une architecture en couches même dans une petite application 

L’architecture en couches sépare les responsabilités entre les routes, les contrôleurs, les services et les repositories, ce qui rend le code plus organisé et facile à comprendre. Elle facilite également la maintenance, les tests et l’évolution de l’application.
