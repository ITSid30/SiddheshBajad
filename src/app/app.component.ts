import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'app_ui';
  public texts: string[] = ['Student', 'Developer', 'Programmer', 'Learner'];
  public currentText: string = this.texts[0];
  public currentIndex: number = 0;
  public date: number = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Remove hash from the URL after the page loads
        window.history.replaceState(null, document.title, window.location.pathname);
      }
    });

    this.date = new Date().getFullYear();
  }

  ngAfterViewInit() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.texts.length;
      this.currentText = this.texts[this.currentIndex];
    }, 1000);
  }


  projects = [
    {
      name: 'Smart blind Stick',
      description: `Programmed the Arduino microcontroller of the stick to detect obstacles in 2 modes ahead of the path as well as sideways.
Used multiple sensors such as UV sensors, Buzzers, Vibrators, Servo Motor in the algorithm to detect and handle obstacles in range of 40-45cm from the stick with an accuracy of 70 percent.`,
      link: 'https://example.com/project1',
      github: 'https://github.com/ITSid30',
    },
    {
      name: 'Crowdfunding Application',
      description: `Build an Ethereum blockchain Dapp on crowdfunding using technology of Solidity, React, HTML, CSS, Javascript, Ganache, Truffle
              It involves direct transfer of funds from smart contract to end user based on majority of voting among contributors on requests.`,
      link: 'https://example.com/project2',
      github: 'https://github.com/ITSid30/Crowdfunding-Dapp',
    },
    {
      name: 'Pothole Management System',
      description: `Developed a pothole reporting and repair application using Flutter with
              Firebase backend with 2 major components User and Admin.
              • Focused on creating a citizen-driven platform for efficient pothole
              detection and promptresolution by civic authorities.`,
      link: 'https://example.com/project3',
      github: 'https://github.com/prashik1402/Final_Year_Project',
    },
    {
      name: 'Maps Distance Project',
      description: `Developed a Maps Project using Ola Maps API and OpenRoute Service to get the total distance and duration between source and multiple destinations using API service.
      This project was developed using Angular`,
      link: '',
      github: 'https://github.com/ITSid30/MapsDistanceProject',
    },
    {
      name: 'ToDo List using Doubly LinkedList',
      description: `This project was implemented using C programming language that covered the Data Structures concept
      of Doubly Linked lists so as to have easy traversal of list to and fro so that we can delete any one list randomly.`,
      link: 'https://example.com/project3',
      github: 'https://github.com/ITSid30/',
    },
    {
      name: 'Personal Website',
      description: `Created a responsive website using Angular, HTML, CSS, and JavaScript.
 Deployed the website code on GitHub providing a portfolio showcase
accessible via a public URL.`,
      link: 'https://example.com/project3',
      github: 'https://github.com/ITSid30/ITSid30',
    },
  ];

  skills = [
    { name: 'HTML', path: 'assets/html.png' },
    { name: 'CSS', path: 'assets/css.png' },
    { name: 'Javascript', path: 'assets/javascript.png' },
    { name: 'TypeScript', path: 'assets/typescript.png' },
    { name: 'Angular', path: 'assets/angular.png' },
    { name: 'React', path: 'assets/react.png' },
    { name: 'C++', path: 'assets/c++.png' },
    { name: 'Java', path: 'assets/java.png' },
    { name: 'Python', path: 'assets/pythonLogo.png' },
    { name: 'Git', path: 'assets/git.png' },
    { name: 'AWS', path: 'assets/aws.png' },
    { name: 'Docker', path: 'assets/docker.png' },
    { name: 'Ethereum', path: 'assets/ethereum.png' },
    { name: 'Solidity', path: 'assets/solidity.png' },
    { name: 'Sql', path: 'assets/sql.png' },
    { name: 'MongoDB', path: 'assets/mongodb.png' },
    { name: 'NodeJS', path: 'assets/nodejs2.png' },
    { name: 'Flutter', path: 'assets/flutter.png' },
  ];

  extraCurriculars = [
    {
      name: 'Best Paper Award', 
      description: 'Recieved Best Paper Award for Paper presentation in IEEE conference.',
      link: 'https://drive.google.com/file/d/1ladlyQYO5cSrMIQ-AA3M0aoUZLRLKcAh/view?usp=drive_link' },
    {
      name: 'Coding Questions', 
      description: 'Solved 300+ Coding Problems on platforms like Leetcode, Geeks For Geeks, etc',
      link: 'https://leetcode.com/u/SidB30/'
    },
    {
      name: 'Publications', 
      description: 'Published 3 IEEE research papers in IEEE conferences.',
      link: 'https://www.scopus.com/authid/detail.uri?authorId=58091671700'
    },
    {
      name: 'Volunteering', 
      description: `Handled 200 people during ITSA farewell in Sound-Tech Team. 
      Volunteered during the Know-Japan event as Cultural team co-ordinator assisting students.`,
      link: ''
    },
    {
      name: 'Devops Bootcamp', 
      description: `Completed DevOps Bootcamp,
gaining hands-on experience
with CI/CD pipelines,
containerization (Docker,
Kubernetes)`,
      link: ''
    },
    // {name: 'Activity 1', description: 'This is activity 1.' },
  ];

  certifications = [
    { name: 'AWS Academy Cloud Foundations', link: 'https://drive.google.com/file/d/1jZXUrKzwPAEyt3v-78oAcUjB5DLYJ1kI/view' },
    { name: 'Google Cloud Foundations', link: 'https://www.cloudskillsboost.google/public_profiles/db3fa67a-aa07-463f-b60a-0c996d29d64c' },
    { name: 'Architecting with Google Compute Engine', link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/DQWE4U5L2GFY' },
    { name: 'Become a Blockchain Developer Linkedin', link: 'https://drive.google.com/file/d/1h6b5etzxTI39ftn3jZQavHNYRwu-peKu/view' },
    { name: 'Certified Ethereum Developer Program', link: 'https://drive.google.com/file/d/1K9DTDACHfBw-Zoh-Hb344rkfKmlQnZhH/view' },
  ];

  contacts = [
    { name: 'Email', detail: 'https://siddhesh.bajad@gmail.com', icon: 'assets/email.png' },
    { name: 'Facebook', detail: 'https://facebook.com/siddheshbajad', icon: 'assets/facebook.png' },
    { name: 'LinkedIn', detail: 'https://linkedin.com/in/siddhesh-bajad-07265a217/', icon: 'assets/linkedin.png' },
    { name: 'Github', detail: 'https://github.com/ITSid30', icon: 'assets/github.png' },
  ];
}
