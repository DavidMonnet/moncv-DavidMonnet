# Projet individuel "CV" - HEG technologies web
______________________________________________________________________________


## Objectif du projet
> Etre capable de créer un site web et de le mettre en ligne en s'aidant des technologies et outils mentionnés dans ce tutoriel.

## Outils nécessaires à la réalisation de ce projet
* Navigateurs web : Mozilla firefox, Google Chrome
* Editeur de code en ligne : Firebug
* Editeur de code : Notepad++
* Logiciel de traitement d'image : Gimp Studio
* Outils de développement, langages, compléments et plugins suivants :
    * Node.js, npm
    * Git
    * yoemann, bower, gulp cli
    * Github
    * Bootstrap
    * Jquery
    * HTML, CSS3

## Fil rouge du projet (idem pour la présente documentation)
> Ici figure les étapes principales nécessaires à la bonne réalisation d'un tel projet, vous trouverez plus amples détails sur ces étapes dans le chaptre "Installation en détails".
1. Installation des outils nécessaires pour développer notre site web
2. Utilisation du template généré pour créer notre CV et l'améliorer
3. Installation de github
4. Ajout de plugin et compléments à notre site
5. Documentation du projet à l'aide de Markdown
6. Validation du code HTML et CSS  


## Installation en détails
### Installation des outils nécessaires pour développer notre site web: 
* npm, node.js, yo, bower, gulp
    * Installer Node.js v4.4.6 LTS depuis le site web suivant https://nodejs.org/en/ Node comporte entre autre un moteur d'exécution V8 spécialisé pour la plateforme Chrome. 
    * Une fois Node.js installé, lancez le shell de Node.js
    * Tapez la commande suivante :
        ```
        npm install -g yo bower gulp generator-webapp
        ```
    * Cela va permettre d'installer les "utilitaires" suivants
        * Yo : base de données de générateur 
        * Bower : gestion des dépendances des compléments
        * Gulp :  Gestionnaire du déploiement du serveur local sur serveur distant

### Utilisation du template généré pour créer notre CV et l'améliorer
Création d'une webApplication en ligne de commande via l'utilitaire yoemann qui est en réalité une base de données de générateurs de code et template. 
            
     yo webapp
    
Un template mais également un serveur web dans son entier est automatiquement généré. (De base, la librairie Bootstrap est automatiquement intégrée au template généré).
    
Il suffit à présent d'éditer le template avec du code HTML et CSS selon nos envies. Il est par exemple possible d'ajouter, via la librairie et les classes Bootstrap :

* Des barres de progressions pour évaluer vos niveaux de programmations
* Un menu de navigation
* Un tableau personnalisé
* etc.


##### Améliorations des techniques de modifications du code HTML / CSS 
Ainsi que Javascript via les navigateurs Mozilla Firefox et Google Chrome

* Ajout d'une liaison en temps réelle (synchronisation immédiate) entre le navigateur utilisé et le répertoire local contenant les fichiers à modifier.
        ``` 
            //code à ajouter
        ```
### Installation de gitub
> Utilisation de git pour créer un historique de nos modifications sur nos fichiers mais également gérer le contenu de notre site distant (commits)

Une installation git nécessite un repository git pour cela nous allons le créer manuellement.


* Lancer l'invite de commande git. 
* Placez vous dans votre projet web (à la racine)
* Taper la commande suivante :
       
        git init

Un dossier .git a été créé à la racine du projet si la manipulation a fonctionné

Nous devons maintenant créer un dossier "distant" qui sera nommé "dist" afin de pouvoir publier notre contenu sur github.com.
* Placez vous à la racine du projet, comme précédemment
* Tapez les commandes suivantes:

        gulp build 
    > Permet de créer le dossier dist et y insère le contenu nécessaire à l'exécution du site (compilation des fichiers)       
* Placez vous maintenant dans le le dossier "dist" :
* Tapez les commandes suivantes :

        git init
        git checkout -b gh-pages 
        
    > La dernière ligne ci-dessus permet de créer la branche gh-pages et de se positionner dessus (branche active).
    
        git add . 
        
    > Permet d'ajouter les fichiers à la branche gh-pages

        git commit -m

    > Permet de commiter les fichiers ajouter
    
        git remote add origin git@github.com:heg-web/moncv-DavidMonnet.git 
    
    > Permet d'ajouter le repo distant stocké sur github.com

        git push --set-upstream origin gh-pages
        
    > Permet de pousser les éléments sur la branche gh-pages en ligne

Cette procédure étant longue et fastidieuse nous allons automatiser cette dernière avec la commande suivante:

        npm install --save-dev gulp-deploy-git 
        
> Permet d'installer le paquet npm gulp deploy

Il va également falloir modifier le fichier gulpfile.js, généré par toute cette installation, en y ajoutant les lignes suivantes (tout à la fin) :

        var deploy = require('gulp-deploy-git');
        gulp.task('deploy', function() {
            return gulp.src('**/*',  { read: false, cwd: 'dist'  })
            .pipe(deploy({
                repository: 'git@github.com:heg-web/moncv-timsermier.git',
                remoteBranch:   'gh-pages'
            }))
        });

Il ne nous reste plus qu'à lancer une commande pour envoyer le contenu de notre dossier dist sur cette fameuse branche "gh-pages". 
* Saisissez la commande suivante

        gulp deploy

Le site est désormais visible en ligne. La branches gh-pages en étant son conteneur. Nous continuons pour notre part à travailler sur la branche master en local et nous contenterons de lancer la commande deploy.

Pour continuer de travailler en local vous pouvez lancer la commande suivante qui va ouvrir votre navigateur et vous permettre de travailler avec les fichiers contenu dans le répertoire "app" de votre projet.

        gulp serve

##### Modification via le shell git
 &nbsp;
> **Attention !**   Désormais si une modification est faite et doit se trouver sur le site distant (en ligne), la simple commande "gulp deploy" ne suffit pas, voici l'ordre des commandes à respecter.

* Toujours dans depuis la racine du répertoire de votre site
* **Vérifier de bien être sur la branche master**
* Tapez les commandes suivantes:
        
        git add . 

    > Permet de mettre les fichiers en mode "staged"
    
        git commit -m '<message>' 
        
    > Permet de valider les modifications des fichiers, de les "commiter"...
    
        gulp build
        
    > Permet de "compiler" la branche master (racine du projet) dans le dossier "dist" (branche gh-pages)    
    
        gulp serve:dist
        
    > Permet de visionner en local, le rendu qu'aura le site en ligne mais sans avoir déployé ce dernier sur github.com, c'est une manière de prévisualiser.
        
        gulp deploy 
        
    > Permet d'envoyer le contenu du dossier "dist" dans la branche "gh-pages" sur github.com

##### Avec le GUI - client Github
Il est également possible de faire cette manipulation via le client github !
> Attention, il n'est pas possible d'effectuer via la GUI toutes les commandes vues précédemment, ce n'est qu'une aide partielle.

* Modification du fichier
* Commit des modiifications via le GUI Github (**Attention** à mettre un commentaire explicite !)
* Dans le shell lancement de la commande suivante

        gulp build
        
* Retour dans la GUI Github, clic sur le bouton "Sync" 
* Dans le shell lancement de la commande suivante

        gulp serve:dist

    > Prévisualisation du résultat dans le navigateur, en local sans impact sur le répertoire distant.

* Lancement de la commande de déploiement

        gulp deploy

##### Récapitulatif des commandes git
En guise de complément voici une liste non-exhaustive des commandes git permettant de manipuler notre projet web et ses branches de travail.

* git init --> create a new local git repository
* git add . --> add all modified and new files to stage
* git commit -m 'msg' --> commit staged files with msg
* git push --> send commits to remote server
* git pull --> download remote commits
* git clone --> copy our local repository to a remote one 
                       (downoad and keep the synchronization link)
* .gitignore --> ignore files or folders
* git status --> liste l’état de la branche et de son repository ses fichiers (nom de la branche)
* git remote --> connecte un repertoire distant (vide) déjà existant avec notre rep. Local.
* git reset --> Reset l’état du fichier modifié mais pas commité
* git branch --> créé une nouvelle branche et y copie les fichiers et dossiers de la br. master
* git checkout --> récupérer un bout de fichier / changer de branch
* git checkout –b --> créé la branch et vous place dedans.
* git log --> voir les fichiers commités

### Ajout de plugin et compléments à notre site
Au fur et à mesure nous allons ajouter à notre site des dépendances spécifique.
* Exemple :  je souhaite intégrer des charts dans mon site web
    * installation de Chart.js via bower qui va s'occuper de gérer les dépendances nécessaires pour utiliser les charts dans mon site web.
                
            bower install chart.js --save
    
        Ci-dessous, le code nécessaire à la mise en place d'un chart généré automatiquement à partir des progress bar Bootsrap :

        * Code Html nécessaire (index.html)
       
                <label style="font-weight:300;">Programmation Orientée Object (Java, PHP, Pascal)</label> 
				<br />
				<div class="progress">
					 <div class="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 50%;">
						50%
					 </div>
				</div>
		
                    
        * Code Jquery nécessaire (main.js
                
                $(document).ready(function(){
	                /*SMOOTH-SCROLL-DOWN*/
	                'use strict';
	                $('a').smoothScroll();
	
	                /*GENERATION DU CHART A PARTIR DE LA PROGRESS-BAR*/
	                $('.progress-bar').each(function(){
		                var val= $(this).attr('aria-valuenow');  //on stock la valeur de aria-valuenow --> le pourcentage rempli sur la progress bar
		                var color= $(this).css('background-color'); //on récupère la couleur actuel de la progress bar parcouru
		                var canvas = $('<canvas> </canvas>');  //création du canvas pour le donut
		                $(this).parent().replaceWith(canvas);  //on était actuellement au niveau enfant, on doit mtn remonter pour accéder au niveau parent et remplacer tout ce bloc (<div class="progress">)
	
		                var myOtherDoughnutChart = new Chart(canvas, {
			                type: 'doughnut',
			                data: {
				                labels: [val + ' %'],  //? à tester
				                datasets: [{
						            data: [val, 100-val],
						            backgroundColor: [
							            color, 
							            '#f4f4f4'
						            ],
						            hoverBackgroundColor: [
							            color, 
							            '#f4f4f4'
						            ],
						            hoverBorderColor: [
							            '#f4f4f4',
							            '#f4f4f4'
						            ],
						            borderColor:[
						        	    '#f4f4f4',
						            	'#f4f4f4'
					            	]
			               	}]
		             	}
		            });
	           });

* Autres exemples d'améliorations :
    * Ajout de smooth-scroll plugin permettant le défilement progressif lors de clic sur un lien dans la même page.
            
            bower install jquerysmooth-scroll --save

    * Ajout de bootswatch pour changer le thème bootstrap de notre site
    
            bower install bootswatch --save
          
### Documentation du projet à l'aide de Markdown
En utilisant le monde open source pour développer vos sites ou applications web, il est important de laisser derrière nous un mode d'emploi pour nos prochains. Pour réaliser ce dernier, il est d'usage de se référer à Markdown, qui est le langage le plus utilisé sur le web pour commenter ce genre de projet. Disposant d'une syntaxe particulière il est recommandé d'utiliser l'outil d'édition Dillinger (http://dillinger.io/).

Ci-dessous, quelques liens utiles pour la prise en main de l'outil.
* https://guides.github.com/features/mastering-markdown/
* https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet 


### Validation du code HTML et CSS  
Grâce aux outils suivants, il est possible de valider son code HTML et CSS séparément ou ensemble, selon la norme W3C.
* W3C HTML validator -->  https://validator.w3.org/
* W3C CSS validator -->  https://jigsaw.w3.org/css-validator/
* All-in-One HTML CSS validator --> https://validator.w3.org/unicorn/ 


## Refléxion personnelle sur le projet
> Ci-dessous quelques éléments à mon sens utiles sur les acquis permis par ce type de projet ainsi que les problèmes rencontrés lors de ce dernier.


### Acquis personnels
* Utilisation de bootstrap et prise en main de son système de grille
    * Ajout de plugin pour gestion des charts
    * Ajout et utilisation d'une barre de navigation
    * Ajout et prise en main d'un bouton "return on top"
    * Ajout et prise en main des templates bootswatch
* Découverte des outils d'inspection de pages web permettant le travail synchronisé
* Utilisation des validateurs de code pour permettre un code correct et irréprochable.


### Problèmes rencontrés
* Mes images ne sont pas prises en compte !

> Le format .png est accepté seulement, celles qui étaient en .PNG n'ont pas pu passer sur le dossier distant et donc ne s'affichaient pas en ligne. 

* Mes vieux dossiers supprimer sont encore dans les historiques commits des fichiers actuels de github client!  

> C'est normal ! Le dossier distant utilisé et mis à jour n'est que "dist" les autres répertoires restent inchangés

* Mon code Jquery est en place dans mon fichier main.js et correct, les liens de dépendances sont présent dans le fichier bower.json mais aucun effet n'est appliquer à mon site lorsque je clique sur un des liens de mon menu (smoothscroll)

> Une petite vérification dans le validateur de code HTML et hop ! On remarque que la balise body a oublié d'être fermée et que la dépendance au fichier main.js est inexistente !  Attention au copier collé..


