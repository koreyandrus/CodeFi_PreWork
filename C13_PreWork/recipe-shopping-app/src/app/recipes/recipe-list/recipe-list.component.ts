import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test', 'https://imgs.search.brave.com/IOJA0HuhjLP5-xxVUOmLh1cVKFV2EF_YZDp7nL6kmAQ/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly8xLmJw/LmJsb2dzcG90LmNv/bS8tZS1HT21ONWN0/MDAvWDFhNXVFVTRI/ckkvQUFBQUFBQUFZ/c0EvbWhfT1BsaHl5/djBSVUdjQ1hUcl9o/aDBXX3NBa3ZmMUh3/Q0xjQkdBc1lIUS9z/MjA0OC9uYWRhbiUy/QnByYXducyUyQmZy/eSUyQjEuSlBH'),
    new Recipe('A Test Recipe', 'This is a test', 'https://imgs.search.brave.com/IOJA0HuhjLP5-xxVUOmLh1cVKFV2EF_YZDp7nL6kmAQ/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly8xLmJw/LmJsb2dzcG90LmNv/bS8tZS1HT21ONWN0/MDAvWDFhNXVFVTRI/ckkvQUFBQUFBQUFZ/c0EvbWhfT1BsaHl5/djBSVUdjQ1hUcl9o/aDBXX3NBa3ZmMUh3/Q0xjQkdBc1lIUS9z/MjA0OC9uYWRhbiUy/QnByYXducyUyQmZy/eSUyQjEuSlBH'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
