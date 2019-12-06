# Introduction
�L'�tudiant d'aujourd'hui est le responsable de demain �, autrement dit que le nouvel �tudiant doit �tre bien instruit, bien cultiv� et �duqu�.

Il doit en un mot avoir du savoir-vivre et du savoir-faire ; il doit penser et r�fl�chir avec rectitude ; il doit en outre s'exprimer de fa�on correcte et donner son point de vue en toute sinc�rit� et pour parvienne, c�est pour �a il est tr�s important qu�il re�oit au sien de sa vie universitaire un soutien moral ainsi que mat�riel par l�int�gration de ce dernier dans son universit�.

Nous faisons partie de sa famille d�accueil, nous pouvons avoir un impact �norme sur son bonheur et l�aider � surmonter le mal du pays, afin qu�il puisse profiter au mieux de son s�jour.

La nuit de l�info a pens� d�eux et le d�fi propos� pendant cette ann�e intitul� � La pr�carit� �tudiante �. Pour r�pondre � cette exigence nous avons propos� une solution web qui permet de faire pivoter cet �tudiant � avoir le bien �tre, en encourageant-le � rester en contact, partageant nos cultures, occupant leur esprit et donnant lui un peu de temps pour ressentir le manque de son foyer. 

## Etude conceptuelle
Le diagramme de classe permet de mod�liser les classes du syst�me et leurs relations ind�pendamment d�un langage de programmation particulier.

Vous avez trouvez dans le dossier **"Documentation"** les diagrammes de classe et l'architecture de notre application.

## Installation

Pattern mediator

```bash
Install Package MediatR
```


Pattern CQRS



Approche cr�ation de base de donn�es Code First



Gateway and service discovery

``` bash
Install Package Ocelot
```
``` bash
Install Package Ocelot.Provider.Consul
```






## Usage
Pour avoir la base de donn�es de microservice UniversityApi , il faut sp�cifier 
la chaine de connection dans le fichier appsettings.json et faire la migration on sp�cifiant 
le biblioth�que UniversityPersistence comme projet de d�marage.



## Probleme
On a eu une probeleme au niveau de la version de la CLR de .Net core 3.0 quand on fait l'impl�mentation de package consul.

