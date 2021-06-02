# Test-tehnique
Créer un projet NodeJS
Tout d'abord, vous avez besoin de créer un dossier nommé "Test technique" 

Ouvrez des fenêtres CMD et CD et allez vers le dossier Test technique. Puis exécutez la commande ***npm init*** 


Express.js  est un Web Application Framework de NodeJS. Il fournit un ensemble de fonctionnalités puissantes aux applications web et mobiles.
pour install exécuter la commande ***npm install express***


Notre serveur de donnée est MongoDB. pour installer l'ORM mongoose exécutez la commande ***npm install mongoose***


crée un ficher ***server.js***


## Créer la structure du projet

créer dossier "routes" où nous avons déclaré notre routes

créer dossier "controllers" où nous devons déclarer nos api 

créer dossier "models" qui contient nos models


 
* controllers
 	* tache.controllers.js
  	* user.controllers.js


* models
	* commentaires.js
	* tache.js
	* user.js


* routes
	* tache.routes.js
	* user.routes.js


# Fonctionnalités

### Authentification

JSON Web Token (JWT) l permet l'échange sécurisé de jetons (tokens) entre plusieurs parties. Cette sécurité de l’échange se traduit par la vérification de l’intégrité des données à l’aide d’une signature numérique. Elle s’effectue par l'algorithme HMAC ou RSA.


Pour installer JWT  exécutez la commande ***npm install jsonwebtoken***

Créer un dossier "cors" qui contient un fichier "jwt" où on a implémenter la fonction ***authenticateToken()*** 


### Gestion utilisateurs

L'utilisateur peut créer un compte et S'identifier

Dans le fichier "user.controllers.js" on implémenter les fonctions *

**AddUser()***  


* POST /Regestir ajouter un utilisateur 
	* Paraméters
		* no parameters
	* requiset body : { "Firstname" : "", "Lastname" : "" , "email",: "", "password":"" } 
	* Resulat
		* code : 201 


***login()*** 
* GET /Login 
	* Paraméters
		* no parameters
	** requiset body : { "email" : "", "password" : "" }  


***GetUsers()***


* GET /user tous les utilisateurs 
	* Paraméters
		* no parameters
	* Resulat
		* code : 200 
		* description : 
			* liste de tous les utilisateur 
			* type : application/json




### Gestion des tâches

Dans le fichier "tache.controllers.js" on implémenter les fonctions :

***Get_Taches()***

* GET /tache tous des taches
	* Paraméters
		* no parameters
	* Resulat
		* code : 200 
		* description : 
			* liste de tous des taches 
			* type : application/json


***Add_Tache()***

* POST /tache/create ajouter une tache 
	* Paraméters
		* no parameters
	* requiset body : { "name" : "", "description" : "" , "user" : { "id" : "" }} 
	* Resulat
		* code : 201 
		


***Get_comments()***


* GET /tache/comments tous les commentaires 
	* Paraméters
		* no parameters
	* Resulat
		* code : 200 
		* description : 
			* liste de tous les commentaires 
			* type : application/json


***Add_comment()***

* POST /tache/createComment ajouter une tache 
	* Paraméters
		* no parameters
	* requiset body : { "descrption" : ""} 
	* Resulat
		* code : 201 
		
***Add_Comment_to_Tache()***
*PATCH /tache/addComment
	* Paraméters
		* no parameters
	* requiset body : { "tacheId" : "", "commentairs" : { "commentId" : "" }} 
	* Resulat
		* code : 200 
***ChangeStutas()***
*PATCH /tache/updateStatus/:id
	* Paraméters
		* TacheID
	* requiset body : { } 
	* Resulat
		* code : 200 


