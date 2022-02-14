import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Food } from './app.model';
import { Item } from './shared/multi-dropdown/multi-dropdown.model';

@Injectable({
    providedIn: 'root'
})
export class AppService {

    private url: string = environment.apiUrl + 'todos';

    constructor(private http: HttpClient) {
    }

    getFoods(): Food[] {
        return [
            {
                id: 1,
                name: 'Grapes 🍇'
            },
            {
                id: 2,
                name: 'Melon 🍈'
            },
            {
                id: 3,
                name: 'Watermelon 🍉'
            },
            {
                id: 4,
                name: 'Tangerine 🍊'
            },
            {
                id: 5,
                name: 'Lemon 🍋'
            },
            {
                id: 6,
                name: 'Banana 🍌'
            },
            {
                id: 7,
                name: 'Pineapple 🍍'
            },
            {
                id: 8,
                name: 'Red Apple 🍎'
            },
            {
                id: 9,
                name: 'Green Apple 🍏'
            },
            {
                id: 10,
                name: 'Pear 🍐'
            },
            {
                id: 11,
                name: 'Peach 🍑'
            },
            {
                id: 12,
                name: 'Cherries 🍒'
            },
            {
                id: 13,
                name: 'Strawberry 🍓'
            },
            {
                id: 14,
                name: 'Kiwi Fruit 🥝'
            },
            {
                id: 15,
                name: 'Tomato 🍅'
            },
            {
                id: 16,
                name: 'Coconut 🥥'
            },
            {
                id: 17,
                name: 'Avocado 🥑'
            },
            {
                id: 18,
                name: 'Eggplant 🍆'
            },
            {
                id: 19,
                name: 'Potato 🥔'
            },
            {
                id: 20,
                name: 'Carrot 🥕'
            },
            {
                id: 21,
                name: 'Ear of Corn 🌽'
            },
            {
                id: 22,
                name: 'Hot Pepper 🌶'
            },
            {
                id: 23,
                name: 'Cucumber 🥒'
            },
            {
                id: 24,
                name: 'Broccoli 🥦'
            },
            {
                id: 25,
                name: 'Peanuts 🥜'
            },
            {
                id: 26,
                name: 'Bread 🍞'
            },
            {
                id: 27,
                name: 'Croissant 🥐'
            },
            {
                id: 28,
                name: 'Baguette Bread 🥖'
            },
            {
                id: 29,
                name: 'Pretzel 🥨'
            },
            {
                id: 30,
                name: 'Pancakes 🥞'
            },
            {
                id: 31,
                name: 'Cheese Wedge 🧀'
            },
            {
                id: 32,
                name: 'Meat on Bone 🍖'
            },
            {
                id: 33,
                name: 'Poultry Leg 🍗'
            },
            {
                id: 34,
                name: 'Cut of Meat 🥩'
            },
            {
                id: 35,
                name: 'Bacon 🥓'
            },
            {
                id: 36,
                name: 'Hamburger 🍔'
            },
            {
                id: 37,
                name: 'French Fries 🍟'
            },
            {
                id: 38,
                name: 'Pizza 🍕'
            },
            {
                id: 39,
                name: 'Hot Dog 🌭'
            },
            {
                id: 40,
                name: 'Sandwich 🥪'
            },
            {
                id: 41,
                name: 'Taco 🌮'
            },
            {
                id: 42,
                name: 'Burrito 🌯'
            },
            {
                id: 43,
                name: 'Cooking 🍳'
            },
            {
                id: 44,
                name: 'Pot of Food 🍲'
            },
            {
                id: 45,
                name: 'Bowl With Spoon 🥣'
            },
            {
                id: 46,
                name: 'Green Salad 🥗'
            },
            {
                id: 47,
                name: 'Popcorn 🍿'
            },
            {
                id: 48,
                name: 'Canned Food 🥫'
            },
            {
                id: 49,
                name: 'Bento Box 🍱'
            },
            {
                id: 50,
                name: 'Rice Cracker 🍘'
            },
            {
                id: 51,
                name: 'Rice Ball 🍙'
            },
            {
                id: 52,
                name: 'Cooked Rice 🍚'
            },
            {
                id: 53,
                name: 'Curry Rice 🍛'
            },
            {
                id: 54,
                name: 'Steaming Bowl 🍜'
            },
            {
                id: 55,
                name: 'Spaghetti 🍝'
            },
            {
                id: 56,
                name: 'Roasted Sweet Potato 🍠'
            },
            {
                id: 57,
                name: 'Oden 🍢'
            },
            {
                id: 58,
                name: 'Sushi 🍣'
            },
            {
                id: 59,
                name: 'Fried Shrimp 🍤'
            },
            {
                id: 60,
                name: 'Fish Cake With Swirl 🍥'
            },
            {
                id: 61,
                name: 'Dango 🍡'
            },
            {
                id: 62,
                name: 'Dumpling 🥟'
            },
            {
                id: 63,
                name: 'Fortune Cookie 🥠'
            },
            {
                id: 64,
                name: 'Takeout Box 🥡'
            },
            {
                id: 65,
                name: 'Soft Ice Cream 🍦'
            },
            {
                id: 66,
                name: 'Shaved Ice 🍧'
            },
            {
                id: 67,
                name: 'Ice Cream 🍨'
            },
            {
                id: 68,
                name: 'Doughnut 🍩'
            },
            {
                id: 69,
                name: 'Cookie 🍪'
            },
            {
                id: 70,
                name: 'Birthday Cake 🎂'
            },
            {
                id: 71,
                name: 'Shortcake 🍰'
            },
            {
                id: 72,
                name: 'Pie 🥧'
            },
            {
                id: 73,
                name: 'Chocolate Bar 🍫'
            },
            {
                id: 74,
                name: 'Candy 🍬'
            },
            {
                id: 75,
                name: 'Lollipop 🍭'
            },
            {
                id: 76,
                name: 'Custard 🍮'
            },
            {
                id: 77,
                name: 'Honey Pot 🍯'
            },
            {
                id: 78,
                name: 'Baby Bottle 🍼'
            },
            {
                id: 79,
                name: 'Glass of Milk 🥛'
            },
            {
                id: 80,
                name: 'Cup of Hot Beverage ☕'
            },
            {
                id: 81,
                name: 'Teacup Without Handle 🍵'
            },
            {
                id: 82,
                name: 'Sake 🍶'
            },
            {
                id: 83,
                name: 'Bottle With Popping Cork 🍾'
            },
            {
                id: 84,
                name: 'Wine Glass 🍷'
            },
            {
                id: 85,
                name: 'Cocktail Glass 🍸'
            },
            {
                id: 86,
                name: 'Tropical Drink 🍹'
            },
            {
                id: 87,
                name: 'Beer Mug 🍺'
            },
            {
                id: 88,
                name: 'Clinking Beer Mugs 🍻'
            },
            {
                id: 89,
                name: 'Clinking Glasses 🥂'
            },
            {
                id: 90,
                name: 'Tumbler Glass 🥃'
            },
            {
                id: 91,
                name: 'Cup With Straw 🥤'
            },
            {
                id: 92,
                name: 'Chopsticks 🥢'
            },
            {
                id: 93,
                name: 'Fork and Knife With Plate 🍽'
            },
            {
                id: 94,
                name: 'Fork and Knife 🍴'
            },
            {
                id: 95,
                name: 'Spoon 🥄'
            }
        ];
    }

    getFoodsAsync() {
        const url = this.url;
        return this.http.get(url).pipe(map((response: any) => {
            return response.map((i: any) => ({
                id: i.id,
                name: i.title
            } as Item)) as Item[]
        }));
      }
}
