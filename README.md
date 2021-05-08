# the-shoppies: Movie awards for entrepreneurs
UX Developer Intern &amp; Web Developer Intern Challenge - Fall 2021



<!-- PROJECT SHIELDS -->
[![React Badge](https://img.shields.io/badge/-React-61DBFB?style=for-the-badge&labelColor=black&logo=react&logoColor=61DBFB)](#) [![React Badge](https://img.shields.io/badge/-Bootstrap-5555ff?style=for-the-badge&labelColor=black&logo=bootstrap&logoColor=5555ff)](#) 


<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a>
      <ul>
        <li><a href="#screenshtots">Screenshots</a></li>
      </ul>
    </li>
    <li><a href="#links">Links</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
Topic:

>Shopify has branched out into movie award shows and we need your help. Please build us an app to help manage our movie nominations for the upcoming Shoppies.

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->
<!-- <p align="center"><sup><i>Sign up page</i></sup></p> -->

The Challenge:
```sh
We need a webpage that can search OMDB for movies, and allow the user to save their favourite films they feel should be up for nomination. When they've selected 5 nominees they should be notified they're finished.
We'd like a simple to use interface that makes it easy to:
* Search OMDB and display the results (movies only)
* Add a movie from the search results to our nomination list
* View the list of films already nominated
* Remove a nominee from the nomination list
```
Technical Requirements:
```sh
1. Search results should come from OMDB's API (free API key: http://www.omdbapi.com/apikey.aspx).
2. Each search result should list at least its title, year of release and a button to nominate that film.
3. Updates to the search terms should update the result list
4. Movies in search results can be added and removed from the nomination list.
5. If a search result has already been nominated, disable its nominate button.
6. Display a banner when the user has 5 nominations.
```
Extras:
```sh
There is a lot to be improved on here, you can polish the required features by crafting a nicer design, or improve the app by adding new features! Choose something that you feel best showcases your passion and skills.

If you need inspiration, here are examples of what you can work on. If you work on these ideas, we recommend choosing only one or two.


Save nomination lists if the user leaves the page
Animations for loading, adding/deleting movies, notifications
Create shareable links

```

### Built With


* [Bootstrap](https://getbootstrap.com)
* [Reactjs](https://reactjs.org/)



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

Clone the repository
 ```sh
   git clone https://github.com/saidmg/the-shoppies.git
   ```

### Installation
  
Install NPM packages
   ```sh
   npm install
   ```

<!-- USAGE EXAMPLES -->
## Usage

After installtion completed, use the following commander to start react app:
```sh
npm start
```
When the application starts, use the search input to select the 5 movies for nomination.
When you select a movie , it will be shown in the nomination list , with 2 options : 
    -Remove the move nomination.
    -Check the details for the selected movie.
Once 5 movies are selected, a modal will be prompt informing the user that the selections are completed.
once a movie is selected , it cannot be selected again. And once 5 movies are selected, no more movies can be selected unless previous movies were removed.
If the user leaves the page and wish to come back, the previously selected movies will be stored in the local storage and shown for the user.

### screenshots : 

![Movie Nomination](https://user-images.githubusercontent.com/71358869/117549802-696f5e80-b00a-11eb-826a-d03851f84f76.JPG)
![Movie Details](https://user-images.githubusercontent.com/71358869/117549811-6ffdd600-b00a-11eb-9363-6a2dbd263a68.JPG)
![Nomination completed](https://user-images.githubusercontent.com/71358869/117549817-7ab86b00-b00a-11eb-8103-5d2ce3116f13.JPG)

## Links:

* Project Link: [https://github.com/saidmg/the-shoppies](https://github.com/saidmg/the-shoppies)
* Deployed Link: https://your-nominations.herokuapp.com/

<!-- LICENSE -->
## License

Distributed under the MIT License. 
```sh
Copyright <2021> <Said Mghabghab>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

<!-- CONTACT -->
## Contact

* Said Mghabghab - [Linkedin](https://www.linkedin.com/in/said-mghabghab/) - saidmghabghab@gmail.com


<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [Img Shields](https://shields.io)
* [MIT License](https://opensource.org/licenses/MIT)
* [Heroku](https://dashboard.heroku.com/)
* [ReactCardFlip](https://github.com/AaronCCWong/react-card-flip)
* [wallpaper](https://unsplash.com/@felixmooneeram)
* [Font Awesome](https://fontawesome.com) 





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
