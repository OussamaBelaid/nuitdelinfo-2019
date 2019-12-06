import { Component, OnInit } from '@angular/core';
import { CollegesService } from 'src/app/services/colleges.service';

@Component({
  selector: 'app-my-college',
  templateUrl: './my-college.component.html',
  styleUrls: ['./my-college.component.scss']
})
export class MyCollegeComponent implements OnInit {

  college = {
    name: 'My college name',
    description: 'Contrairement à une opinion répandue, le Lorem Ipsum n\'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le rendant vieux de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, s\'est intéressé à un des mots latins les plus obscurs, consectetur, extrait d\'un passage du Lorem Ipsum, et en étudiant tous les usages de ce mot dans la littérature classique, découvrit la source incontestable du Lorem Ipsum. Il provient en fait des sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" (Des Suprêmes Biens et des Suprêmes Maux) de Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est un traité sur la théorie de l\'éthique. Les premières lignes du Lorem Ipsum, "Lorem ipsum dolor sit amet...", proviennent de la section 1.10.32.L\'extrait standard de Lorem Ipsum utilisé depuis le XVIè siècle est reproduit ci-dessous pour les curieux. Les sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" de Cicéron sont aussi reproduites dans leur version originale, accompagnée de la traduction anglaise de H. Rackham (1914).',
  };
  constructor(private readonly collegesService: CollegesService) { }

  ngOnInit() {
    this.fetchCollege();
  }

  fetchCollege() {
    // this.collegesService.fetchOne().subscribe(
    //   (response: any) => {
    //     this.college = response;
    //   } error => { }
    // )
  }
}
