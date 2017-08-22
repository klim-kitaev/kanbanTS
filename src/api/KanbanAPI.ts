import { ICard,StatusTypes } from '../models/ICard'
import { ITask } from '../models/ITask'

const API_URL = 'http://kanbanapi.pro-react.com';
const AUTH_KEY = 'klim.kitaev';



export default class KanbanAPI {

    public static fetchCards(): Promise<ICard[]> {
        return new Promise<ICard[]>((resolve, reject) => {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', `${API_URL}/cards`, true);
            xhr.setRequestHeader('Authorization', AUTH_KEY);
            
            xhr.send();

            xhr.onreadystatechange = function () {
                if (this.readyState != 4) {
                    return;
                }

                if (this.status != 200) {
                    reject(new Error('ошибка: ' + (this.status ? this.statusText : 'запрос не удался')));
                }

                resolve(<ICard[]>JSON.parse(this.responseText));
            }
        });
    }

    public static addCard(card: ICard): Promise<ICard> {
        return new Promise<ICard>((resolve, reject) => {

            var xhr = new XMLHttpRequest();           
            xhr.open('POST', `${API_URL}/cards`, true);
            xhr.setRequestHeader('Authorization', AUTH_KEY);
            xhr.send(JSON.stringify(card));

            xhr.onreadystatechange = function () {
                if (this.readyState != 4) {
                    return;
                }

                if (this.status != 200) {
                    reject(new Error('ошибка: ' + (this.status ? this.statusText : 'запрос не удался')));
                }

                resolve(<ICard>JSON.parse(this.responseText));
            }

        });
    }

    public static updateCard(card: ICard, draftCard: ICard): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            var xhr = new XMLHttpRequest();            
            xhr.open('PUT', `${API_URL}/cards/${card.id}`, true);
            xhr.setRequestHeader('Authorization', AUTH_KEY);
            xhr.send(JSON.stringify(card));

            xhr.onreadystatechange = function () {
                if (this.readyState != 4) {
                    return;
                }

                if (this.status != 200) {
                    reject(new Error('ошибка: ' + (this.status ? this.statusText : 'запрос не удался')));
                }

                resolve();
            }
        });
    }

    public static persistCardDrag(cardId: number, status: StatusTypes, index:number): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            var xhr = new XMLHttpRequest();           
            xhr.open('PUT', `${API_URL}/cards/${cardId}`, true);
            xhr.setRequestHeader('Authorization', AUTH_KEY);
            xhr.send(JSON.stringify({status,row_order_position:index}));

            xhr.onreadystatechange = function () {
                if (this.readyState != 4) {
                    return;
                }

                if (this.status != 200) {
                    reject(new Error('ошибка: ' + (this.status ? this.statusText : 'запрос не удался')));
                }

                resolve();
            }

        });
    }

    public static addTask(cardId:number,task:ITask): Promise<ITask> {
        return new Promise<ITask>((resolve, reject) => {
            var xhr = new XMLHttpRequest();           
            xhr.open('POST', `${API_URL}/cards/${cardId}/tasks`, true);
            xhr.setRequestHeader('Authorization', AUTH_KEY);
            xhr.send(JSON.stringify(task));

            xhr.onreadystatechange = function () {
                if (this.readyState != 4) {
                    return;
                }

                if (this.status != 200) {
                    reject(new Error('ошибка: ' + (this.status ? this.statusText : 'запрос не удался')));
                }

                resolve(<ITask>JSON.parse(this.responseText));
            }

        });
    }

    public static deleteTask(cardId:number,task:ITask): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            var xhr = new XMLHttpRequest();            
            xhr.open('DELETE', `${API_URL}/cards/${cardId}/tasks/${task.id}`, true);
            xhr.setRequestHeader('Authorization', AUTH_KEY);
            xhr.send();

            xhr.onreadystatechange = function () {
                if (this.readyState != 4) {
                    return;
                }

                if (this.status != 200) {
                    reject(new Error('ошибка: ' + (this.status ? this.statusText : 'запрос не удался')));
                }

                resolve();
            }

        });
    }

    public static toogleTask(cardId:number,task:ITask): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            var xhr = new XMLHttpRequest();           
            xhr.open('PUT', `${API_URL}/cards/${cardId}/tasks/${task.id}`, true);
            xhr.setRequestHeader('Authorization', AUTH_KEY);
            xhr.send(JSON.stringify({done:!task.done}));

            xhr.onreadystatechange = function () {
                if (this.readyState != 4) {
                    return;
                }

                if (this.status != 200) {
                    reject(new Error('ошибка: ' + (this.status ? this.statusText : 'запрос не удался')));
                }

                resolve();
            }

        });
    }
}